import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import Products from './Pages/Products';
import Sidebar from './Components/Sidebar';
import { Routes,Route } from 'react-router-dom';
import './App.css'
import Addproduct from './Pages/Addproduct';
import Productdetails from './Pages/Productdetails';
import ProductEdit from './Pages/ProductEdit';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='row'>
        <div className='col-2 sidebar'>
            <Sidebar />
        </div>
        <div className='col-10'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<Addproduct />} />
          <Route path="products/:productId" element={<Productdetails />} />
          <Route path="products/edit/:productId" element={<ProductEdit />} />



       </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
