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


// import React from 'react'
// import { useState } from 'react'

// const Slider = () => {
//     const [count, setcount] = useState(0)
//     const incount = ()=>{
//         const newcount = count + 1;
//         setcount(newcount)
//     }
//   return (
//     <div>
//         <button onClick={incount} className='bg-blue-950 px-2 py-1 cursor-pointer'>Increase</button>
//         <h1>{count}</h1>
//     </div>
//   )
// }
// export default Slider

// import React from 'react'
// import { useState } from 'react'

// const Slider = () => {
//     const [name, setName] = useState("name")
//     const username = (e) =>{
//         const newname = e.target.value;
//         setName(newname)
//     }
//   return (
//     <div>
//         <input onChange={username} className='bg-amber-50 text-black p-2 outline-none' type="search" name="nameee" id="" />
//         <h1>User Name: {name} </h1>
//     </div>
//   )
// }

// export default Slider

// import React from 'react'
// import { useReducer } from 'react'


// const reducer = (state, action)=>{
//     switch(action.type){
//         case "INCREMENT":
//             return{
//                 count: state.count + 1,
//                 text: state.text
//             }
//             case "TOGGLE":
//                 return{
//                     count: state.count,
//                     text: !state.text
//                 }
//     }
// }
// const Slider = () => {
//     const [state, dispatch] = useReducer(reducer, {count: 0, text: true})
//   return (
//     <div>
//         <h1>{state.count}</h1>
//         <button onClick={()=>{
//             dispatch({type: "INCREMENT"})
//             dispatch({type: "TOGGLE"})
//         }}  className='bg-green-900 px-2 py-0.5 cursor-pointer'>INC</button>
//         {
//             state.text && <h1>Show Text</h1>
//         }
//     </div>
//   )
// }

// export default Slider

import React from 'react'
import { useRef } from 'react'

const Slider = () => {
    const inputRef = useRef(null)
    const onClick = (e)=>{
        inputRef.current.value = ""
    }
  return (
    <div className='flex items-center gap-7 flex-row'> 
        <input className='bg-amber-50 text-black outline-none p-2 rounded-md' type="search" name="sea" placeholder='search here' id="" ref={inputRef} />
        <button onClick={onClick} className='bg-blue-950 px-2 py-0.5 cursor-pointer'>CLICK</button>
        <h1>your texy</h1>
    </div>
  )
}

export default Slider
