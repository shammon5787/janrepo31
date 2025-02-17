// import React from 'react'
// import FoodData from '../assets/Data/FoodData.js'

// const Slider = () => {
//     return (
//         <div className='bg-slate-800 w-[90vw] m-auto rounded-lg opacity-70'> 
//             {
//                 FoodData.map((item) => {
//                     return (
//                         <div className='flex flex-col items-center p-10 '>
//                             <img className='rounded-full w-[200px] h-[200px]' src={item.image} alt="" />
//                             <h1>{item.desc}</h1>
//                             <h1>{item.name}</h1>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Slider


import React from 'react'
import { useState } from 'react'

const Slider = () => {
    const [search1, setSearch] = useState('hi')
    const nowSearch = (e) =>{
        const newV = e.target.value;
        // search1 = newV
        setSearch(newV)
    }
    
  return (
    <div>
        <input onChange={nowSearch} className='bg-red-200 rounded-md p-3 text-black' type="search" name="seach" id="" />
        <h1>your new valuue is : {search1} </h1>
    </div>
  )
}

export default Slider