import React from 'react'
import FoodCard from './FoodCard'
import foodData from '../assets/Data/FoodData.js'

const FoodItem = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
        {
            foodData.map((food)=>{
                return(
                    <FoodCard key={food.id} id= {food.id} name = {food.name} image = {food.image} price = {food.price} rating = {food.ratting} desc = {food.desc} />
                )
            })
        }
    </div>
  )
}

export default FoodItem