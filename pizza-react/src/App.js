import './App.css';
import React, { useState } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Homepage from './components/Homepage';
import Cart from './components/Cart';
import { cartValue } from './components/constant';

export const PizzaData = React.createContext();

export const CartPizzaQty = React.createContext({
  cartQty: 0,
  setCartQty: () => {}
})

export const PizzaAddedToCart = React.createContext({
  pizzaAdded: [],
  setPizzaAdded: () => {}
})
function App() {
  const [cartQty, setCartQty] = useState(0);
  const [pizzaAdded, setPizzaAdded] = useState([]);
  
  const cartQtyvalue = { cartQty, setCartQty };
  const cartProductValue = {pizzaAdded, setPizzaAdded}

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '/cart',
      element: <Cart />
    }
  ]);

  return (
    <div className="App">
      <PizzaData.Provider value={cartValue}>
        <CartPizzaQty.Provider value={cartQtyvalue}>
          <PizzaAddedToCart.Provider value={cartProductValue}>
            <RouterProvider router={appRouter}/>
          </PizzaAddedToCart.Provider>
        </CartPizzaQty.Provider>
      </PizzaData.Provider>
    </div>
  );
}

export default App;
