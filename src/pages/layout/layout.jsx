import React from 'react'
import NavBar from '../../components/NavBar'
import { Outlet } from 'react-router-dom'

export default function layout() {
  return (
         
         <div className=' font-mono bg-yellow-500'>

              <NavBar />

              <div>

                   <Outlet />

              </div>

         </div>
  )
}
