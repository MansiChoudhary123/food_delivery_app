import './App.css';
import './foodcss/Home.css';
import Home1 from './screens/Home1';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Signup from './screens/Signup.js';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from './screens/Login';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';

function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <Navbar/>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path ="/Home1" element={<Home1/>}/>
        <Route exact path ="/createuser" element={<Signup/>}/>
        <Route exact path ="/myorder" element={<MyOrder/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
