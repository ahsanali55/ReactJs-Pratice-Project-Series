import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='h-[55%] flex items-center justify-start  gap-5 flex-nowrap py-5 w-full  mt-10 overflow-auto'>

        <div className='shrink-0 h-full w-[350px] p-4 bg-purple-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>High</h3>
                <h4 className='text-sm' >20 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold tracking-tight'>Make a website</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempora libero mollitia. Eos, fuga tempore!</p>
        </div>

         <div className='shrink-0 h-full w-[350px] p-4 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>High</h3>
                <h4 className='text-sm' >20 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold tracking-tight'>Make a website</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempora libero mollitia. Eos, fuga tempore!</p>
        </div>

         <div className='shrink-0 h-full w-[350px] p-4 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>High</h3>
                <h4 className='text-sm' >20 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold tracking-tight'>Make a website</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempora libero mollitia. Eos, fuga tempore!</p>
        </div>

         <div className='shrink-0 h-full w-[350px] p-4 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>High</h3>
                <h4 className='text-sm' >20 Feb 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold tracking-tight'>Make a website</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempora libero mollitia. Eos, fuga tempore!</p>
        </div>


    </div>
  )
}

export default TaskList
