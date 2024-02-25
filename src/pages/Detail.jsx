import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function Detail() {
    
    let { id } = useParams()
    let { data : recipe , loading, error } = useFetch( `http://localhost:3000/recipes/${id}` );

  return (
         
         <div className=' p-4 pt-0 pb-9'>

              <div className=" p-6 h-[609px] max-w-6xl mx-auto bg-twine rounded">

                  { recipe && 
                  
                     <div className=" grid grid-cols-3 ">

                         <div className=" ">
                             <img src={ `/img/${ recipe.Name }.jpg` } alt="Image" className=' w-[342px] h-64' />
                         </div>

                         <div className=" col-span-2 space-y-5">

                             <div className=" p-4 h-[510px] overflow-auto border border-yellow-500 space-y-4 ">

                                 <h1 className=' font-bold text-lg ' > { recipe.Name } </h1>

                                 <p className=' leading-8'> <span className=' font-bold'> ပါဝင်ပစ္စည်းများ - </span> { recipe.Ingredients } </p>

                                 <p className=' leading-8'> <span className=' font-bold'> ချက်ပြုတ်နည်း - </span> { recipe.CookingInstructions } </p>

                             </div>

                             <Link to='/recipes' className=" flex justify-end">
                                 <button className=' p-1 px-3 bg-black text-yellow-500 rounded' > Back </button>
                             </Link>

                         </div>

                     </div>

                  }

              </div> 

         </div>
  )
}
