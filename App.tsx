"use client";
import Home from './component/pages/Home';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Service from './component/pages/header/Service/service';
import About from './component/pages/header/about/about';
import Cart from './component/pages/header/cartItem/cart';
import Signup from './component/pages/header/signup/signup';
import './App.css';
import ContextProvider from './component/context/contextProvider';
import Shop from './component/pages/Servece/shop';

 

function App() {
  // const movinum = 1;
  return (
    
      <ContextProvider>
      
      <BrowserRouter>
        <Routes>  
        <Route path="/service" element={<Service/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
      </ContextProvider>
       
    
    
  );
}

export default App;     