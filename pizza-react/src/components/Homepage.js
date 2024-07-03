/* eslint-disable array-callback-return */
import React, { useContext } from 'react';
import { PizzaData } from '../App';
import { CartPizzaQty } from '../App'
import {PizzaAddedToCart} from '../App'
import Header from './Header';

const Homepage = () => {
    const pizzaData = useContext(PizzaData);
    const cartQuantity = useContext(CartPizzaQty);
    const pizzaCartAdd = useContext(PizzaAddedToCart)

    const handleCartQuantity = (pizzaId) => {
      cartQuantity.setCartQty((prevState) => prevState + 1)
      pizzaCartAdd.setPizzaAdded([...pizzaCartAdd.pizzaAdded, pizzaId])
    };
    return (
    <>
      <Header cartQty={cartQuantity.cartQty}/>
      <ul className='pizza-wrapper'>
      {pizzaData && pizzaData.map((eachPizza) => (<li key={eachPizza.id}>
          <img src={eachPizza.image} alt="pizza-image"/>
          <div className='pizzaDetails'>
            <div className='pizza-name'>{eachPizza.name}</div>
            <div className='pizza-price'>{eachPizza.price}</div>
            <div className='pizza-rank'>{eachPizza.rank}</div>
            <div className='topping'>
            {eachPizza?.topping && eachPizza?.topping.map((eachTopping) => {
              (<span>{eachTopping}</span>)
            })}
            </div>
            <button className='addCart' onClick={() => handleCartQuantity(eachPizza.id)}>Add to Cart</button>
          </div>
          
        </li>)
      )}
      </ul>
    </>
    )
}

export default Homepage