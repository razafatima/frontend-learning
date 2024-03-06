import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import './Main.css';
import Barchart from "../../BarChart/Barchart";

function Main() {
  const [todos, setTodos] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  function handleTaskInputChange(e){
    setTaskInput(e.target.value);
  }

  function handleDescriptionInputChange(e){
    setDescriptionInput(e.target.value);
  }

  function addTodo() {
    if (taskInput.trim() !== "" && descriptionInput.trim() !== "") {
      setTodos(prevTodos => [
        ...prevTodos,
        {
          task: taskInput,
          description: descriptionInput
        }
      ]);
      setTaskInput("");
      setDescriptionInput("");
    } else {
      alert("Please enter both task and description.");
    }
  }

  function deleteTodo(todoIndex) {
    setTodos(prevTodos => prevTodos.filter((_, index) => index !== todoIndex));
  }

  return (
    <div className="row">
      <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li>
                </ul>
                <hr/>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
           <div className="row">
          <form className="col-sm-6 bg-light custom">
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="mt-3 col-sm-2 col-form-label text-end">Heading</label>
              <div className="col-sm-3">
                <input type="text" className="form-control mt-3" id="inputEmail3" value={taskInput} onChange={handleTaskInputChange}/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3" className="mt-3 col-sm-2 col-form-label">Description</label>
              <div className="col-sm-4">
                <input type="text" className="mt-3 ms-6 form-control" id="inputPassword3" value={descriptionInput} onChange={handleDescriptionInputChange}/>
              </div>
            </div>
            <button type="button" className="btn btn-primary" onClick={addTodo}>Add Task</button>
          </form> 
          
       
          <div className="row-2 bg-light ">
          <div className="card-body bg-light mt-3">
            {todos.map((todo, index) => (
              <div className="mt-3 input-group" key={index}>
                <p><b>Task: </b><br/>{todo.task}</p>
                <p><b>Description: </b><br/>{todo.description}</p>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" onClick={() => deleteTodo(index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row-sm-2 w-50">
      <cardcontent>
            <Barchart />
          </cardcontent>
      </div>


        </div>
        
  

    </div>
    
   </div>

      </div>
  );
}
export default Main;