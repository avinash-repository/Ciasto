import './App.css';
import { BrowserRouter as Router, Route , Routes ,  } from 'react-router-dom';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from './screens/Signup';

import MyOrder from './screens/MyOrder';

import { CartProvider } from './components/ContextReducer';
import Cart from "./components/Cartitem";
function App() {
  return (


    <CartProvider>
          <div>

      
            <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/createuser" element={<Signup/>}/>
                <Route exact path="/mycart" element={<Cart/>}/>
                <Route exact path="/myorders" element={<MyOrder/>}/>


              </Routes>

              </Router>
          
        
          </div>
          </CartProvider>
  );
}

export default App;
