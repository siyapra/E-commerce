import './App.css';
import { Route, Routes, useNavigate, createSearchParams } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Cart from './pages/Cart/cart';
import Product from './pages/Product/product';
import Products from './pages/Products/Products';
import Notfound from './pages/Notfound/notfound';

import { useCart } from './context/Cart';

function App() {
  const navigate = useNavigate();
  const { cartItemCount } = useCart()

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    <>
      <Navbar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route exact path='/Product/:productId' element={<Product />} />
        <Route exact path='/cart' component={<Cart />} />
        <Route exact path='*' component={<Notfound />} />
      </Routes>
    </>

  );
}

export default App;
