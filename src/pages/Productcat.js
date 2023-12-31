import axios from 'axios';
import { useEffect, useState } from 'react';

const Productcat = ()  => {

  const params = window.location.pathname.split('/Productcat/');
  const [pricedata , setPriceData] = useState({});
  const [products, setProducts] = useState([]);
  // console.log(params[1]);
  useEffect(() => {
      Products();
  },[])
  useEffect(() => {
    fetchapi();
    
    },[pricedata]);

  async function Products(){
      const res = await axios.post("http://127.0.0.1:5000/all_Products",{
          id: params[1]
      });
      setProducts(res.data);
      console.log(res.data);
  }

  
  function fetchapi() {
    const websocket= new WebSocket("wss://stream.binance.com:9443/ws");
   websocket.onopen = () => {
    console.log("web socket connected");
    websocket.send( JSON.stringify({
            method: "SUBSCRIBE",
            params: ["ethusdt@miniTicker"],
            id: 1
            }
            
            ));
   }


   websocket.onmessage = (event) => {

    const data = JSON.parse(event.data);

   console.log(data);  
setPriceData(data);

}

 // websocket.onclose = () => {
  //     console.log("close web socket connected");
  //     websocket.send( JSON.stringify({
  //             method: "UNSUBSCRIBE",
  //             params: ["ethusdt@miniTicker"],
  //             id: 1
  //             }
              
  //             ));
  //    }

 

}


const handleAddCart = async (item) =>{
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
  const res = await axios.post("http://127.0.01:5000/addCart",{
    item
  });
  console.log(res);

}

return(
<>

<table>
            <tr>
                <td>
                    {pricedata.s}
                </td>
                <td>
                    {pricedata.c}
                </td>
            </tr>

        </table>

<div className="album py-5 bg-body-tertiary">
  <div className="container">
    <div className="row d-flex">
      <div className="col-lg-12 d-flex gap-5 ">
            {products.map((item)  => {
               return (
                        
                
                <div className="card w-25" >
  <img src={item.images} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">
    {item.description}
    </p>
    <button type = "button" onClick={(e) => handleAddCart(item)} className="btn btn-secondary px-4">
      Add to Cart
      </button>
  </div>
</div>

               )
            } )}
          
         
      </div>
    </div>
  </div>
</div>









</>

);



}


export default Productcat;