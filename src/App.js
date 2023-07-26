
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Productcat from './pages/Productcat';
import Cart from './pages/cart';



function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
       
       <Routes>
        
       <Route path='/' element={<Home/>}/>
       <Route path='/Profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Productcat/:id' element={<Productcat/>}/>
        <Route path='/cart' element={<Cart/>}/>
    
       </Routes>
      
      </BrowserRouter>
      

      <Footer/>
    </div>
  );
}

export default App;
