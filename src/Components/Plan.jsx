import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/2604792/pexels-photo-2604792.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/5362213/pexels-photo-5362213.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/16679160/pexels-photo-16679160/free-photo-of-swimming-pool-in-holiday-resort-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="/" />
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/796619/pexels-photo-796619.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="/" />
        </div>
        {/* {right side} */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md;text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eius.</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae labore hic architecto asperiores totam doloremque quasi quas voluptates quibusdam illo molestias impedit, explicabo, recusandae eveniet error. Facere, ipsa iure!</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan