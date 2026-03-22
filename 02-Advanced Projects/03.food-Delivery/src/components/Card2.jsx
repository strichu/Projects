
import React, { useContext } from "react";
import { UserContext } from "../context/UserContex";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {  DecrementQty, IncrementQty, removeItems } from "../redux/cartSlice";
import { toast } from "react-toastify";

function Card2({ name, price, qty, image , id }) {
  const { setQuantity, Quantity } = useContext(UserContext);
  let dispatch = useDispatch();

  return (
    <div className="w-full h-[140px] p-3 shadow-md border border-gray-100 flex justify-between items-center rounded-xl bg-white mb-2">
      
      <div className="flex items-center gap-4 h-full w-[70%]">
        
        {/* Image Container */}
        <div className="w-[100px] h-full flex-shrink-0 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="flex flex-col gap-1.5 justify-between h-full  py-1">
          <h3 className="text-lg text-gray-700  font-bold ">
            {name}
          </h3>
          <div className="w-[110px] h-[35px] flex border border-gray-300 rounded-lg overflow-hidden">
            <button 
              className="w-1/3 bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center font-bold"
              onClick={() => dispatch(DecrementQty({id}))}
            
           >
              -
            </button>
            <div className="w-1/3 flex items-center justify-center bg-white text-sm font-semibold">
              {qty.length === 0 ? "0":qty}
            </div>
            <button 
              className="w-1/3 bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center font-bold"
              onClick={()=>dispatch(IncrementQty({id}))}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end h-full py-1">
        <span className="text-green-600 font-bold text-lg">Rs {price}/-</span>
        <button className="p-2 hover:bg-red-50  rounded-full transition-colors">
          <RiDeleteBin6Line className="h-6 w-6 text-red-500" onClick={()=>{dispatch(removeItems(id))
             
          }
           
          }/>
        </button>
      </div>
    </div>
  );
}

export default Card2;