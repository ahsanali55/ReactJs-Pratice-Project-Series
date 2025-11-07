import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between gap-5 screen'>
        <div className="py-6 px-8 rounded-xl w-[45%] bg-red-400 text-white">
            <h2 className='text-2xl font-semibold' >{data.taskCount.newTask}</h2>
            <h3 className='text-xl font-medium' >New Task</h3>
        </div>

         <div className="py-6 px-8 rounded-xl w-[45%] bg-blue-400 text-white">
            <h2 className='text-2xl font-semibold' >{data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium' >Completd Task</h3>
        </div>

         <div className="py-6 px-8 rounded-xl w-[45%] bg-green-400 text-white">
            <h2 className='text-2xl font-semibold' >{data.taskCount.active}</h2>
            <h3 className='text-xl font-medium' >Accepted Task</h3>
        </div>

         <div className="py-6 px-8 rounded-xl w-[45%] bg-yellow-400 text-white">
            <h2 className='text-2xl font-semibold' >{data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium' >Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
