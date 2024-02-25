import { useState } from 'react';
import image from '../../img/default.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home() {


  return (
         
         <div className=" p-4 pt-0 pb-9 ">
   
             <div className=" p-4 max-w-6xl mx-auto bg-twine rounded "> 
         
                 <div className=" grid grid-cols-1 md:grid-cols-2">

                     <div className=" flex flex-col justify-center items-center gap-12 py-20 ">

                         <div className=" space-y-2">

                             <h3> Are You Hungry <span> ? </span> </h3>
                             <h1 className=' text-6xl font-bold'> Don't Wait! </h1>
                             <h3 className=' text-2xl font-semibold'> Let start to cook with <span className=' text-yellow-500 '> Us </span> </h3>

                         </div>

                         <Link to='/recipes' className=' group flex gap-2 items-center bg-black p-2 px-6 rounded-full transition-all '>
                      
                              <button className=' text-yellow-500 '> Checkout Our Recipes </button>
                              <FontAwesomeIcon icon={ faArrowRight } className=' text-yellow-500 text-base hidden group-hover:block' />

                         </Link>

                     </div>
                  
                     <div className=" relative py-40 flex justify-center items-center">

                         <div className=" inline-block p-2 border-2 rounded-full border-yellow-500 ">
                             <img src={ image } alt="HomeImage" className=' w-60' />
                         </div>

                         <div className=" absolute animate-ping top-[145px] left-[136px] w-72 h-72 border-2 border-black rounded-full "></div>

                     </div>

                 </div>

             </div>

         </div>

  )
}

export default Home;
