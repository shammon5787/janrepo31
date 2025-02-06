import React, { useEffect, useState } from 'react'
import FoodData from '../assets/Data/FoodData.js'

const CategoryMenu = () => {
    const [categories, setCategories] = useState([])
    
    const ListUniqueCategories = ()=>{
        const uniqueCategories = [... new Set(FoodData.map((food)=>food.category))]
        setCategories(uniqueCategories)
    }
    useEffect(()=>{
        ListUniqueCategories()
    },[])
  return (
    <div>
        <h1 className='font-bold text-3xl uppercase'>order your favorite food</h1>
        <div className='flex flex-row items-center gap-5 overflow-x-scroll my-3 lg:overflow-x-hidden'>
            {
                categories.map((category, i)=>{
                    return(
                        <button key={i} className='bg-blue-600 px-2 py-1 rounded-sm cursor-pointer transition-all duration-500 hover:bg-green-900 font-semibold my-4'>{category}</button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryMenu