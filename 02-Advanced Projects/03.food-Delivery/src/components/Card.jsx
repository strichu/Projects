import React from 'react'
import image1 from '../../assets/image1.avif'
import { LuLeafyGreen } from 'react-icons/lu'
import { GiChickenOven } from 'react-icons/gi'
import {useDispatch} from 'react-redux'
import { addItems } from '../redux/cartSlice'
import { toast } from 'react-toastify'
function Card({ name , type , image , price ,id}) {
  let dispatch = useDispatch()
  
  return (
    <div className='w-[300px] h-[400px] shadow-lg rounded-lg p-3  flex flex-col  gap-2 bg-white'>
        <div className='w-[100%] h-[60%] overflow-hidden   rounded-lg'>
            <img src={image} alt="" className='object-cover' />
        </div>
        <div className='text-2xl  font-semibold'>
            {name}
        </div>
        <div className=' w-full flex justify-between items-center'>
            <div className='text-md text-green-500 font-bold '>Rs {price}/-</div>
            <div className='flex items-center justify-center gap-3 text-green-500'>{type==="Veg"?<LuLeafyGreen />:<GiChickenOven />} <span>{type}</span></div>
        </div>
        <button className='w-full p-3 bg-green-300 text-gray-500 rounded-lg hover:bg-green-400 transition-all ' onClick={()=>{
          dispatch(addItems({id:id,name:name,price:price,image:image,qty:1}))
           toast.success("item added")
        }}>Add to dish</button>
    </div>
  )
}

export default Card