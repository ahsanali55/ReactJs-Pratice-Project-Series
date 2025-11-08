import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [ userData, setUserData ] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-60 ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between gap-3 text-2xl font-bold rounded">
        <h2 className="w-1/5 ">Employee Name</h2>
        <h3 className="w-1/5 ">New Task</h3>
        <h5 className="w-1/5 ">Active Task</h5>
        <h5 className="w-1/5 ">Completed </h5>
        <h5 className="w-1/5 ">Failed </h5>
      </div>

      <div className="">
        {userData.employees.map((item, index) => {
          return (
            <div className="bg-gray-400 mb-2 py-2 px-4 flex gap-3 justify-between rounded" key={index}>
              <h2 className="w-1/5 p-3 text-xl bg-purple-600">{item.firstName}</h2>
              <h3 className="w-1/5 p-3 text-xl bg-blue-600">{item.taskCount.newTask}</h3>
              <h5 className="w-1/5 p-3 text-xl bg-yellow-600">{item.taskCount.active}</h5>
              <h5 className="w-1/5 p-3 text-xl bg-green-600">{item.taskCount.completed}</h5>
              <h5 className="w-1/5 p-3 text-xl bg-red-600">{item.taskCount.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
