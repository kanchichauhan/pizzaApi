import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { cartValue } from './constant';

const cartValue = [
    {
        "id": 1,
        "category": "Pizza",
        "name": "Vesuvius",
        "topping": [
            "Tomat",
            "Ost",
            "Skinka"
            ],
    "price": 79,
    "rank": 3
    },
    {
      "id": 2,
      "category": "Pizza",
      "name": "Hawaii",
      "topping": [
        "Tomat",
        "Ost",
        "Skinka",
        "Ananas"
      ],
      "price": 79,
      "rank": 1
    },
    {
      "id": 3,
      "category": "Pizza",
      "name": "Parma",
      "topping": [
        "Tomat",
        "Ost",
        "Parmaskinka",
        "Oliver",
        "Färska basilika"
      ],
      "price": 89,
      "rank": 2
    },
    {
      "id": 4,
      "category": "Dryck",
      "name": "Coca-cola, 33cl",
      "price": 10
    },
    {
      "id": 5,
      "category": "Dryck",
      "name": "Loka citron, 33cl",
      "price": 10
    },
    {
      "id": 6,
      "category": "Tillbehör",
      "name": "Pizzasallad",
      "price": 0
    },
    {
      "id": 7,
      "category": "Tillbehör",
      "name": "Bröd och smör",
      "price": 10
    }
]
export const PizzaDataContext = React.createContext();

const Homepage = () => {
    
    const navigate = useNavigate();
    return (
    <>
        <PizzaDataContext.Provider value={cartValue}>
            <div>Homepage</div>
            <button onClick={() => navigate('/cart')}>cart</button>
        </PizzaDataContext.Provider>
    </>
    )
}

export default Homepage