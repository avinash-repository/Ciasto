import React, { useState } from 'react'
import {Link} from "react-router-dom"
export default function Signup() {


    const [credentials, setcredentials ]= useState({name:"" , email:"", password:"", address:""});

const handleSubmit = async (e) => {


        e.preventDefault();
        const response =await fetch("http://localhost:5000/api/creatuser",{
         method:'POST',
         
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify({name:credentials.name , email:credentials.email, password:credentials.password , address:credentials.address})   
        });
        const json = await response.json();
        console.log(json);

        if(!json.success){
          alert("Incorrect Credentials")
        }

}
const onChange = async (event)=>{
    setcredentials({...credentials, [event.target.name]:event.target.value})

}

  return (
    <>

   
  <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <form className="mt-6" onSubmit={handleSubmit}>
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
      <h1 className="text-2xl font-semibold text-center text-gray-700">
        Create an account
      </h1>

        <div className="mb-2">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-800"
        
          >
            Name
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            name='name' value={credentials.name} onChange={onChange}/>
        </div>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Email
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            name='email' value={credentials.email} onChange={onChange}/>
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-800"
          >
            Password
          </label>
          <input
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            name='password' value={credentials.password} onChange={onChange} />
        </div>
        <p className="text-xs text-gray-400 font-bold">
          Password must be at least 8 characters long
        </p>

        <label
            htmlFor="password"
            className="py-4 block text-sm font-semibold text-gray-800"
          >
            Address
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            name='address' value={credentials.address}  onChange={onChange} />
        <div className="mt-6">
          <button className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-600">
            Sign up
          </button>
        </div>
 

      <p className="mt-2 text-xs text-center text-gray-700">
        {" "}
        Already a member?{" "}
        <Link to="/login" className="font-medium text-lg text-gray-600 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
    </form>
  </div>



  </>
  )
}
