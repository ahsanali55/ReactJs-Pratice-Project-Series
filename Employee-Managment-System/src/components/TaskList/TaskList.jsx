import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {

  return (
    <div
      id="taskList"
      className="h-[55%] flex items-center justify-start  gap-5 flex-nowrap py-5 w-full  mt-10 overflow-auto"
    >
      {data.tasks.map((item, index) => {
        if (item.active) {
          return <AcceptTask key={index} data={item}/>;
        }
        if (item.newTask) {
          return <NewTask key={index} data={item} />;
        }
        if (item.completed){
            return <CompleteTask key={index} data={item} />
        }
        if (item.failed){
            return  <FailedTask key={index} data={item} />
        }
      })}

     
     
    </div>
  );
};

export default TaskList;
