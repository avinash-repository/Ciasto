import React , {useState, useEffect} from 'react'
import { useDispatchCart, useCart } from './ContextReducer'

const Card = ({id, name, description, image, prices}) => {
    let dispatch = useDispatchCart();
    let data= useCart();
    const [quantity, setquantity] =useState(1);
    const [varient, setVarient] = useState(Object.keys(prices)[0]);
    
    const handleAddtoCart =async () =>{
        console.log(data);



        let food = []
        for (const item of data) {
          if (item.id === id) {
            food = item;
    
            break;
          }
        }
        //console.log(food)
       // console.log(new Date())
        if (food !== []) {
          if (food.size === varient) {
            await dispatch({ type: "UPDATE", id:id, price: finalPrice, quantity: quantity })
            return
          }
          else if (food.size !== varient) {
            await dispatch({ type: "ADD", id: id, name: name, price: finalPrice, quantity: quantity, size: varient,img: image })
           // console.log("Size different so simply ADD one more to the list")
            return
          }
          return
        }
        await dispatch({type:"ADD" , id:id, name:name, description:description, quantity:quantity, img:image , price:finalPrice  ,size:varient })

    }


    
      let selectedOption = prices[varient];
      let finalPrice= selectedOption * quantity;
    

  return (
 <div className='m-5 shadow-lg border-4 rounded-md border-indigo-500/75 text-white w-auto'>
    <div className='p-4 bg-[#111827]'>
      <div className='justify-center items-center p-3'>
        <h1 className='text-[25px]'>{name}</h1>
      </div>
      <div className='mx-5 px-7 h-200px w-200px'>
        <img src={image} className='' alt="cake" />
      </div>
      <div className='justify-center items-center p-4 m-3 text-[#475569]'>
        <p className='text-[16px]'>{description}</p>
      </div>
      <div className='flex container justify-between text-[20px]'>
        <div className=''>
          <p className='py-2'>Size</p>
          <select
        className='bg-[#1f2937]'
        value={varient}
        onChange={(e) => {setVarient(e.target.value)}}
      >
         {Object.keys(prices).map((size, index) => (
                <option value={size} key={index} onChange={(e)=>{setVarient(e.target.va)} }>{size}</option>
              ))}
      </select>
        </div>
        <div className='w-100 text-[20px]'>
          <p className='py-2'> Quantity</p>
          <select className='bg-[#1f2937]' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
            {[...Array(6).keys()].map((x, i) => {
              return <option value={i + 1} key={i}>{i + 1}</option>
            })}
          </select>
        </div>
      </div>
      <div className='py-6 flex container justify-between text-[24px]'>
        <div>
          <h1>Price: {finalPrice} </h1>
        </div>
        <div className='bg-cyan-500 shadow-lg shadow-cyan-500/50 border-3 text-[20px]'>
          <button className='p-2' onClick={handleAddtoCart}> ADD TO CART </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card