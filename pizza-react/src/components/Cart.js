import Header from "./Header"
import { useContext, useEffect, useState } from "react";
import { CartPizzaQty, PizzaData } from "../App";
import { PizzaAddedToCart } from '../App'

const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const cartQuantity = useContext(CartPizzaQty);
    const pizzaId = useContext(PizzaAddedToCart);
    const pizzaData = useContext(PizzaData)

    useEffect(() => {
        if (cartQuantity.cartQty > 0) {
            console.log('pizzaAdded', pizzaId.pizzaAdded)
            pizzaId.pizzaAdded.forEach((eachId) => {
                const findData = pizzaData.find((eachData) => eachData.id === eachId);
                console.log('findData', findData)
                setCartData([...cartData, findData])
            });
            console.log('cartData', cartData)
        }
    }, []);

    const deleteCartQuantity = (pizzaId) => {
        console.log(pizzaId)
    };

    return (
        <>
            <Header cartQty={cartQuantity.cartQty} />
            <div>Cart</div>
            {/* {(cartQuantity.cartQty > 0) && cartData.map((eachPizza) => {
                <li key={eachPizza.id}>
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
                  <button className='addCart' onClick={() => deleteCartQuantity(eachPizza.id)}>Delete</button>
                </div>
              </li>
            })} */}
        </>
    )
}

export default Cart