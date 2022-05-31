import React, { useState } from "react";

import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
import "./App.css";
 
const App = () => {
    const [tasks, setTasks] = useState([
        {
          id: '1',
          title: '试释是',
          completed: false,
        },
        {
          id: '2',
          title: '氏始试食是狮',
          completed: 'true',
        },
        {
          id: '3',
          title: '氏食是十狮',
          completed: 'true',
        },
        {
          id: '4',
          title: '氏是十狮',
          completed: 'true',
        },
        {
          id: '5',
          title: '试十狮',
          completed: 'true',
        },
        {
          id: '6',
          title: '氏始是十狮',
          completed: 'true',
        },
        {
          id: '7',
          title: '氏始试狮',
          completed: 'false',
        },
        {
          id: '8',
          title: '试食是十狮',
          completed: 'true',
        },
        {
          id: '9',
          title: '氏始试食是',
          completed: 'false',
        },
        {
          id: '10',
          title: '氏始试十狮',
          completed: 'true',
        },

       
    ]);

        const handleTaskClick = (taskId) => {
           const newTasks = tasks.map((tasks) => {
           if (tasks.id === taskId) return { ...tasks, completed: !tasks.completed };
           
             return tasks;
           });

           setTasks(newTasks );
          };

    const handleTaskAddition = ( taskTitle) => {
      const newTasks = [
        ...tasks,
        {
          title: taskTitle,
          id:Math.random(10),
          completed: false,
        },
     ];

         setTasks(newTasks);
    };

       const handleTaskDeletion = (taskId) =>  {
         const newTasks = tasks.filter(task => task.id == taskId)

         setTasks(newTasks)
       }

     return (
      <>
      
         <div className= "container">
         <Header/>
           <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks 
            tasks={tasks}handleTaskClick={handleTaskClick}
            handleTaskDeletion={handleTaskDeletion} 
            />
           </div> 
      </>
  );
};

export default App;