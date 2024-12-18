import { useState, useEffect } from "react";

/*  
Key Concepts here in state Management:

1) KEY PROP for list: 
    Line 54 -> React needs a unique identifier (key prop) for 
    each element in the list to optimize  the  rendering  and 
    reconciliation process.

2) Asynchronous State Updates: 
    Line 32 -> Since State updates are asynchronous, cartItems 
    won't be updated when updateCartValue  is  being  executed, 
    hence a new list in line 33 so that we get updatedValue  to 
    calculate cartValue. 
3) 

*/

const CounterComponent = () => {
    const items = [
        { itemID: 1, itemName: "Laptop", itemPrice: 999.99 },
        { itemID: 2, itemName: "Smartphone", itemPrice: 699.99 },
        { itemID: 3, itemName: "Headphones", itemPrice: 199.99 },
        { itemID: 4, itemName: "Smartwatch", itemPrice: 249.99 },
        { itemID: 5, itemName: "Keyboard", itemPrice: 49.99 },
        { itemID: 6, itemName: "Mouse", itemPrice: 29.99 },
        { itemID: 7, itemName: "Monitor", itemPrice: 299.99 },
        { itemID: 8, itemName: "External Hard Drive", itemPrice: 89.99 },
        { itemID: 9, itemName: "USB-C Cable", itemPrice: 15.99 },
        { itemID: 10, itemName: "Webcam", itemPrice: 79.99 }
    ];

    //Value based state variable
    const [counter, setCounter] = useState(0);
    //Function based state variable
    const [cartValue, setCartValue] = useState(0.0);

    const [cartItems, setCartItems] = useState([]);

    const addItemstoCart = (item) => {
        setCartItems((prevCartItems) => {
            let updatedCartItems = [...prevCartItems, item];
            updateCartValue(updatedCartItems);
            return updatedCartItems;
        });
    }

    const updateCartValue = (cartItems) => {
        let newCartValue = 0;
        for (let i = 0; i < cartItems.length; i++) {
            newCartValue += cartItems[i].itemPrice;
        }
        setCartValue(newCartValue)
    }

    return (<>
        <div>
            <h1>Items</h1>
            {items.map(item =>
            (
                <div key={item.itemID}>
                    <span>{item.itemName} - {item.itemPrice}</span>

                    <button onClick={() => addItemstoCart(item)}> Add this </button>
                </div>
            )
            )}

            <div>
                Total Cart Value: {cartValue}
            </div>
        </div>
    </>)


}

export default CounterComponent;