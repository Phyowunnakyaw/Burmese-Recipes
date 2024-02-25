import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEgg } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
         
         <div className='p-6 max-w-6xl mx-auto'>

              <Link to='/' className=" flex items-center gap-2 ">

                  <FontAwesomeIcon icon={ faEgg } className=' text-2xl' />                 
                  <h1 className=' text-3xl font-medium' > Burmese Recipes </h1>

              </Link>

         </div>
  )
}
