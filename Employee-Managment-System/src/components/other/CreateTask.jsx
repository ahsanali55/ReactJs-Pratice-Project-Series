import React, { useContext, useEffect, useState } from "react";
import NewTask from "../TaskList/NewTask";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTaskTitle] = useState("");
  const [description, settaskDescription] = useState("");
  const [date, settaskDate] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [category, setcategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();

    setNewTask({
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData.employees;

    data.forEach((element) => {
      if (element.firstName === assignTo) {
        element.tasks.push(newTask);

        element.taskCount.newTask += 1;
      }
    });
    setUserData({ employees: data });

    setTaskTitle("");
    settaskDescription("");
    settaskDate("");
    setassignTo("");
    setcategory("");
  };

  return (
    <>
      <div>
        <form
          onSubmit={(event) => submitHandler(event)}
          className="flex flex-wrap w-full items-start justify-between p-6 bg-gray-800 h-full"
        >
          <div className="w-[40%] flex flex-col gap-7">
            <div>
              <h3 className="mb-2">Task Title</h3>
              <input
                value={title}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="border-2 border-gray-300 w-full px-3 py-1 placeholder:text-gray-300 rounded"
                type="text"
                placeholder="Make a UI design"
              />
            </div>

            <div>
              <h3 className="mb-2">Date</h3>
              <input
                value={date}
                onChange={(event) => {
                  settaskDate(event.target.value);
                }}
                className="border-2 border-gray-300 w-full px-3 py-1 placeholder:text-gray-300 rounded"
                type="date"
                name=""
                id=""
              />
            </div>

            <div>
              <h3 className="mb-2">Asign to</h3>
              <input
                value={assignTo}
                onChange={(event) => setassignTo(event.target.value)}
                className="border-2 border-gray-300 w-full px-3 py-1 placeholder:text-gray-300 rounded"
                type="text"
                placeholder="employee Name"
              />
            </div>

            <div>
              <h3 className="mb-2">Category</h3>
              <input
                value={category}
                onChange={(event) => setcategory(event.target.value)}
                className="border-2 border-gray-300 w-full px-3 py-1 placeholder:text-gray-300 rounded"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>

          <div>
            <div className="w-1/2 ">
              <h3 className="text-[19px]">Description</h3>
              <textarea
                value={description}
                onChange={(event) => settaskDescription(event.target.value)}
                className="rounded border-2 border-gray-300"
                name=""
                id=""
                rows={"10"}
                cols={"80"}
              ></textarea>
            </div>

            <button className="font-medium w-full bg-green-300 py-4 rounded my-3">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
