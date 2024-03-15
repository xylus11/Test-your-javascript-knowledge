import React, { useState } from "react";
import Title from "../componant/Title";
import { TableStyle } from "../Tasktracker/TableStyle";
import Task from "./Task";
import NewTask from "./NewTask";

export default function Tasktracker() {
  const [newTasks, setTasks] = useState({
    date: "",
    type: "",
    completed: "",
  });

  const handleDate = (e) => {
    setTasks({ ...newTasks, date: e.target.value });
  };
  const handleChangeType = (e) => {
    setTasks({ ...newTasks, type: e.target.value });
  };


 
  let tasks = [{ date: "", type: "" }];

  const [taskList, setTaskList] = useState(tasks);

  const addNewTask = () => {
    setTaskList([...taskList, { date: newTasks.date, type: newTasks.type }]);
  };
  const handleCompleted = (e) => {
    e.target.parentElement.parentElement.parentElement.classList.toggle("completed");
  };

  const handleDeleteTask = (e) => {
    window.confirm("Delete this Task?") && e.target.parentElement.parentElement.parentElement.remove();
  };

  //what is this?

  return (
    <div className="container text-center py-3">
      {" "}
                                                                        {/* entire div*/}
      <Title text={"Task tracker"} />
      <TableStyle>
        <ul className="table-head">
          <li>Date</li>
          <li>Task</li>
        </ul>
        <Task
          Data={newTasks.date}
          setDate={handleDate}
          type={newTasks.type}
          setType={handleChangeType}
          onClick={addNewTask}
        />
        <ul className="table-row">
          {taskList.map((tk, index) => {
            return tk.date !== "" && tk.type !== "" ? (
              <NewTask key={index} date={tk.date} type={tk.type} onTaskClick={handleCompleted}
              onDelete={handleDeleteTask} />
            ) : null;
          })}
        </ul>
      </TableStyle>
    </div>
  );
}
