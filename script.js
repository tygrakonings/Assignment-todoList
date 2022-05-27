
//Select elements

const todoInput = document.getElementById("todoInput");
const todoButton = document.getElementById("todoButton");
const todoList = document.getElementById("todo-list");


// FUNCTIONS

const createTaskList = async function () {
    const data = await getTasks();
    // console.log(data.id);
    
    addItemsToDom(data);
    
}
createTaskList();



// add Task to dom
const addTaskToDom = async function (data) {
    postTask(todoInput.value);
createTaskList();
}

// add items to dom 

const addItemsToDom = async function (data){
    console.log(data);
    todoList.innerHTML = "";

    data.map(function(x) {
        
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        const newTodo = document.createElement("li");
        console.log(x.description);
        newTodo.innerText = x.description;
        console.log(x._id);
        newTodo.id = x._id;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        todoInput.value ="";
      
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `delete <i class="fa-solid fa-trash"></i>`;
    // `<i class="fa-solid fa-trash"></i>`;
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    todoList.appendChild(todoDiv);
    deleteButton.addEventListener('click', () => {
        // console.log(x._id);
        deleteTask(x._id) 
         
    })
    })
    }

    const deleteItem = async function(event){
        const item = event.target;
        if(item.classList[0] === "delete-btn"){
    const todo = item.parentElement;
    todo.remove();
    
        }
     }

    //  add this function to every todo with an eventHandler
// const handleDelete = async (button) => {
//     const todo = button.target;
//     if(todo.classList[0] === "delete-btn"){
// const todo = todo.parentElement; // get todo based on button  
//     await deleteTask(todo);
//     }
// }
    
     //Event listeners
    todoButton.addEventListener("click", addTaskToDom);
    todoList.addEventListener("click", deleteItem);
    







