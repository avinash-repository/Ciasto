import React, { useReducer, useContext, createContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: action.id, name: action.name, quantity: action.quantity, description:action.description, img: action.img, price:action.price , size:action.size }]
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;

        case "DROP":
            let empArray = []
            return empArray 
            
        case "UPDATE":
            let arr = [...state]
            arr.find((item, index) => {
                if (item.id === action.id) {
                   // console.log(food.qty, parseInt(action.qty), action.price + food.price)
                    arr[index] = { ...item, quantity: action.quantity + item.quantity, price: action.price + item.price }
                }
                return arr
            })
            return arr 
        default:
            console.log("Error in Reducer");
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);