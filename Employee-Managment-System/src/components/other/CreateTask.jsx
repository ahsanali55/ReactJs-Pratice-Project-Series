import React from 'react'

const CreateTask = () => {
  return (
    <>
        <div>
        <form className="flex flex-wrap w-full items-start justify-between p-6 bg-gray-800 h-full">

          <div className="w-[40%] flex flex-col gap-7">
            <div>
              <h3 className="mb-2">Task Title</h3>
              <input className="border-2 border-gray-300 w-full px-3 py-1 placeholder:text-gray-300 rounded" type="text" placeholder="Make a UI design" />
            </div>

            <div>
              <h3 className="mb-2">Date</h3>
              <input className="border-2 border-gray-300 w-full px-3 py-1 placeholder:text-gray-300 rounded" type="date" name="" id="" />
            </div>

            <div>
              <h3 className="mb-2">Asign to</h3>
              <input className="border-2 border-gray-300 w-full px-3 py-1 placeholder:text-gray-300 rounded" type="text" placeholder="employee Name" />
            </div>

            <div>
              <h3 className="mb-2">Category</h3>
              <input className="border-2 border-gray-300 w-full px-3 py-1 placeholder:text-gray-300 rounded" type="text" placeholder="design, dev, etc" />
            </div>
          </div>

          <div>

          <div className="w-1/2 ">
            <h3 className="text-[19px]">Description</h3>
            <textarea className="rounded border-2 border-gray-300" name="" id="" rows={"10"} cols={"80"}></textarea>
          </div>

          <button className="font-medium w-full bg-green-300 py-4 rounded my-3">Create Task</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateTask
