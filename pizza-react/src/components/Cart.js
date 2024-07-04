import Header from "./Header"
import { useContext, useEffect, useState } from "react";
import { CartPizzaQty, PizzaData } from "../App";
import { PizzaAddedToCart } from '../App'
import './../App.css'
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const [cartData, setCartData] = useState([]);
    const cartQuantity = useContext(CartPizzaQty);
    const pizzaId = useContext(PizzaAddedToCart);
    const pizzaData = useContext(PizzaData)

    useEffect(() => {
        if (cartQuantity.cartQty > 0) {
            const updatedCartData = pizzaId.pizzaAdded.map((eachId) => {
                return pizzaData.find((eachData) => eachData.id === eachId);
            });
            setCartData(updatedCartData);
        }
    }, [cartQuantity.cartQty, pizzaId.pizzaAdded, pizzaData]);

    const deleteCartQuantity = (pizzaId) => {
        console.log('cartData: ', cartData, 'pizzaData:', pizzaId.pizzaAdded )
        const updatedValue = cartData.filter((eachPizza) => eachPizza.id !== pizzaId)
        console.log(updatedValue);
        setCartData(updatedValue);
        console.log('updatedcartData: ', cartData)
        cartQuantity.setCartQty((prevState) => prevState - 1)
    };

    return (
        <>
            <button onClick={() => navigate('/')}>Back to homepage</button>
            <Header cartQty={cartQuantity.cartQty} />
            <ul className='pizza-wrapper'>
            {(cartQuantity.cartQty > 0) && cartData.map((eachPizza) => (
                <li key={eachPizza.id}>
                <img src={eachPizza.image} alt="pizza-image" /><div className='pizzaDetails'>
                    <div className='pizza-name'>{eachPizza.name}</div>
                    <div className='pizza-price'>{eachPizza.price}</div>
                    <div className='pizza-rank'>{eachPizza.rank}</div>
                    <div className='topping'>
                        {eachPizza?.topping && eachPizza?.topping.map((eachTopping) => 
                            (<span>{eachTopping}</span>)
                        )}
                    </div>
                    <button className='deleteCart' onClick={() => deleteCartQuantity(eachPizza.id)}>Delete</button>
                </div>
                </li>
            ))}
            </ul>
        </>
    )
}

export default Cart