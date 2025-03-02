import React from 'react'
import Header from '../Header/Header'


function Dashboard() {
  return (
    <> 
    
    <div className=' w-full h-screen '>
       <Header/>
        <div className='  w-40  top-20 left-0 bg-gray-200 shadow-lg p-5 ' >
            <img src="" alt="" />
            <ul className='space-y-3'>
                <li>Add relative list</li>
                <li>Home</li>
                <li>Contact</li>
                <li>Emerjamcy</li>
            </ul>
            <div className='space-y-3'>
            <h1>detectify</h1>
            <img src="" alt="" />
            </div>
        </div>

        {/* this is a div in which real time image will be see on screen of deshboard */}
        <div>
            hello
        </div>
    </div>
    </>
  )
}

export default Dashboard
