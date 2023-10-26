import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatchCart, useCart } from './ContextReducer'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let data = useCart();
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('authToken')

    navigate("/login")
  }



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#111827] p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <span className="text-white text-4xl font-bold">Ciasto</span>
          </div>
          <div className="   text-white hidden md:flex flex-grow justify-center items-center space-x-4 text-xl ">
            <Link to="/" className="hover:text-white/[0.5]">Home</Link>
            <Link to="#" className="hover:text-white/[0.5]">About</Link>
            <Link to="#" className="hover:text-white/[0.5]">Contact</Link>
          </div>





          {(localStorage.getItem("authToken")) ?

            <div>
              <Link to="/mycart" className=''>
                <Button>
                  <div className="flex items-center justify-center">
                    <FaShoppingCart className="h-4 w-4 " />
                    <span className="bg-blue-900 text-white p-[3px] rounded-full  text-xs">
                      {data.length}
                    </span>
                  </div>
                </Button>
              </Link>
              <Link to="/myorderData" className=''>
                <Button>
                  MyOrders
                </Button>
              </Link>
              <Link to="/" className='' onClick={handleLogout}>
                <Button>
                  Logout
                </Button>
              </Link>
            </div>
            : ""}


          {(!localStorage.getItem("authToken")) ?
            <div>

              <Link to="/login" className=''>
                <Button>
                  LogIn
                </Button>
              </Link>
              <Link to="/createuser" className=''>
                <Button>
                  SignUp
                </Button>
              </Link>

            </div>
            : ""}




          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>



        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center">
            <Link to="#" className="text-white mb-2">Home</Link>
            <Link to="#" className="text-white mb-2">About</Link>
            <Link to="#" className="text-white mb-2">Services</Link>
            <Link to="#" className="text-white mb-2">Contact</Link>
          </div>
        )}



      </div>

    </nav>
  );
};

export default Navbar;
