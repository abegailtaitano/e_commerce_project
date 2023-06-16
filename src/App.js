import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

  const fetchProducts = async () => {
      console.log('Fetch Products...')
    const { data } = await commerce.products.list();
    console.log(data)
    setProducts(data);
  }

  const fetchCart = async () => {
      console.log('Fetch cart...')
      const cart = await commerce.cart.retrieve()
      console.log(cart)
      setCart(cart);
  }

  const handleAddToCart = async (productId, quantity) => {
      console.log('Handle cart....')
      console.log('productId: '+productId)
      console.log('quantity: '+quantity)
      const cart  = await commerce.cart.add(productId, quantity);
      console.log(cart)
      setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
      console.log('Update Cart Quantity...')
      console.log(productId)
      console.log(quantity)
    const cart   = await commerce.cart.update(productId, {quantity});
    console.log('Cart in handle update: '+cart)
    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
      console.log('Remove from cart...')
      console.log(productId)
      const  cart   = await commerce.cart.remove(productId);
      console.log(cart)
      setCart(cart);
  }

  const handleEmptyCart = async () => {
      console.log('Empty cart...')
    const  cart   = await commerce.cart.empty();
    console.log(cart)
    setCart(cart);
  }

  useEffect(() => {
      fetchProducts();
      fetchCart();
    }, []);

  return (
    <Router>
       <div>
            <Navbar totalItems={cart.total_items} />
            <Switch>
              <Route exact path="/">
                  <Products products={products} onAddToCart={handleAddToCart} />
                  </Route>
              <Route exact path="/cart">
                  <Cart
                   cart={cart}
                   handleUpdateCartQty={handleUpdateCartQty}
                   handleRemoveFromCart={handleRemoveFromCart}
                   handleEmptyCart={handleEmptyCart}
                   />
              </Route>
            </Switch>
       </div>
    </Router>
  )
}

export default App
