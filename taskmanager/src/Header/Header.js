import React, { useState } from "react";
import Style from "./Header.module.css";

function Header() {
   // State variables to store todos, task input value, and description input value
   const [todos, setTodos] = useState([]);
   const [taskInput, setTaskInput] = useState("");
   const [descriptionInput, setDescriptionInput] = useState("");

   // Function to handle changes in the task input field
   function handleTaskInputChange(e) {
      setTaskInput(e.target.value);
   }
  
   // Function to handle changes in the description input field
   function handleDescriptionInputChange(e) {
      setDescriptionInput(e.target.value);
   }

   // Function to add a new todo item
   function addTodo() {
      // Check if both task and description are provided
      if (taskInput.trim() !== "" && descriptionInput.trim() !== "") {
         // Add the new todo object to the todos array
         setTodos(prevTodos => [...prevTodos,
            {
               task: taskInput,
               description: descriptionInput
            }
         ]);
         // Clear input fields after adding the todo
         setTaskInput("");
         setDescriptionInput("");
      } else {
         // Alert user if either task or description is missing
         alert("Please enter both task and description.");
      }
   }

   // Function to delete a todo item
   function deleteTodo(todoIndex){
      setTodos(prevTodos => prevTodos.filter((prevTodo, prevTodoIndex) => {
              return prevTodoIndex != todoIndex
      })) 
   }

   return (
      <div className={Style.container}>
         {/* Task input field */}
         <div className={Style.row}>
            <label className={Style.label1}><b>Enter Task</b></label>
            <input
               type="text"
               placeholder="Task"
               className={Style.title1}
               maxLength="10000"
               value={taskInput}
               onChange={handleTaskInputChange}
            />
        
         {/* Description input field */}
         
            <label className={Style.label2}><b>Enter Description</b></label>
            <input
               type="text"
               placeholder="Description"
               className={Style.title2}
               maxLength="10000"
               value={descriptionInput}
               onChange={handleDescriptionInputChange}
            />
          </div>
         {/* Add button to add new todo */}
         <div className={Style.button1}>
            <button className={Style.addbutton} onClick={addTodo}>Add</button>
         </div>
         {/* Display todo items */}
         {todos.map((todo, index) => (
            <div className={Style.container2} key={index}>
               <div className={Style.todo}>
                  {/* Display task and description of each todo */}
                  <p className={Style.todo2} style={{ whiteSpace: 'pre-wrap' }}><b>Task:</b><br/> {todo.task}</p>
                  <p className={Style.todo2} style={{ whiteSpace: 'pre-wrap' }}><b>Description:</b><br/> {todo.description}</p>
                  {/* Button to delete todo */}
                  <div className={Style.action}>
                     <button onClick={() => deleteTodo(index)}>Delete</button>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}

export default Header;
