import React from 'react'
import img from '../assets/Food/4.avif'
import { IoIosStar } from "react-icons/io";

const FoodCard = ({id, name, image, price, rating, desc}) => {
    return (
        <div className='flex items-center flex-col bg-amber-50 w-full lg:w-[23vw] rounded-lg'>
            <div className='flex items-center flex-col p-3 bg-slate-500 w-full rounded-t-md hover:bg-white transition-all duration-500'>
                <img className='w-[200px] h-[100px] rounded-md hover:cursor-grab hover:scale-110 transition-all duration-500' src={image} alt="" />
            </div>
            <div className='bg-slate-900 flex flex-col items-center w-full p-3'>
                <div className='flex flex-row items-center justify-between w-full'>
                    <h1>{name}</h1>
                    <h1> $:{price}</h1>
                </div>
                <p>{desc}.</p>
                <div className='flex flex-row items-center justify-between w-full'>
                    <span className='flex items-center gap-2'>
                        <h1 className='text-yellow-500'><IoIosStar/></h1>
                        <h1>{rating}</h1>
                    </span>
                    <button className='bg-blue-600 px-1.5 py-1 rounded-sm cursor-pointer transition-all duration-500 hover:bg-green-900 font-semibold my-4'>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard