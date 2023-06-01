import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }

  useEffect(() => {
      fetchProducts();
      fetchCart();
    }, []);

console.log(cart);
  return (
    <div>
        {/*<Products products={products} onAddToCart={handleAddToCart}/> */}
        <Navbar totalItems={cart.total_items}/>
        <Cart cart={cart} />
    </div>
  )
}

export default App