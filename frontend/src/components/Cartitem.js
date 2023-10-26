import React from 'react';
import { useDispatchCart, useCart } from './ContextReducer'
import { FaTrash } from 'react-icons/fa';
import Button from "./Button"
const CartItem = ({ serialNumber, itemName, price, onRemove, image }) => {
    let data = useCart();
    let dispatch = useDispatchCart();
       if(data.length===0){
          return(
              <div className='bg-gray-800 h-full w-ful'>
                   <div className="container mx-auto p-4  text-white text-center">
      <h1 className="text-2xl mb-4">The Cart is Empty</h1> 
      </div>   
              </div>
          )
      } 

   
  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("useremail");
    let response = await fetch("http://localhost:5000/api/orderData", {
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    //console.log("JSON RESPONSE:::::", response.status)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

    
    let totalprice = data.reduce((total, item) => total + item.price, 0)

    return (


     <>
           <div className='bg-gray-800 h-full w-full'>
           <div className="container mx-auto p-4  text-white text-center">
                    <h1 className="text-2xl mb-4">Shopping Cart</h1>
                    
                    <div className="flex items-center justify-center bg-gray-700 p-2 mb-2 rounded">
                        <div className="text-white mr-4">Serial No. </div>
                        <div className="text-white flex-1 ml-4">Qty</div>
                        <div className="text-white flex-1 ml-4">Size</div>
                        <div className="text-white flex-1 ml-4">Price</div>
                       
                     
                    </div>
              
            {data.map((item, index) => (
          
             
                    <div className="flex items-center justify-center bg-gray-700 p-2 mb-2 rounded">
                        <div className="text-white mr-4">{index +1 }</div>
                        <img src={item.img} alt={itemName} className="flex  h-12 w-12" />
                        <div className="text-white flex-1 ml-4">{item.quantity}</div>
                        <div className="text-white flex-1 ml-4">{item.size}</div>
                        <div className="text-white flex-1 ml-4">{item.price}</div>
                        <FaTrash className="w-6 h-6" onClick={()=> {dispatch({type:"REMOVE" , index:index})}  }/>
                     
                    </div>
              
                
 
            )

            )}


        <div className='text-white    m-4 text-right'>
         <h1 className=' p-8  text-[25px]'>   Total: {totalprice} </h1> 
        </div>
        <Button> 
            <div onClick={handleCheckOut}>
            CheckOut
            </div>
           
        </Button>
        </div>
        </div>
     
</>

    );
};

export default CartItem;
