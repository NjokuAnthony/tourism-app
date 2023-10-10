import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src="https://media.istockphoto.com/id/486937952/photo/maldives.jpg?s=612x612&w=0&k=20&c=Ndq28wuFx8XfERRaINp_zJ2SUcvD-bciqyjYKcOj9I0=" alt="/" />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
          <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <p>All Inclusive</p>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ea dolorem deserunt quasi inventore sit. Necessitatibus adipisci nihil atque officiis.</p>
            <button className='bg-white text-black'>Reserve Now</button>
          </div>
        </div>
    </div>
  )
}

export default Nav