import React, { useContext } from 'react';
import { PizzaDataContext } from './Homepage';

const Cart = () => {
    const pizzaData = useContext(PizzaDataContext);
    return (
        <>
            <div>Cart</div>
            <pre>{JSON.stringify(pizzaData, null, 2)}</pre>
        </>
    )
}

export default Cart