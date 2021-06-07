// Ui
const form = document.querySelector('#task-form');
const taskinput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');

// Add Task Event Listener
form.addEventListener('submit',addtask);
// Remove task Event Listener
tasklist.addEventListener('click',removetask);
// clear tasks Event Listener
clearbtn.addEventListener('click',cleartasks);
// Filter task Event AudioListener
filter.addEventListener('keyup',flitertasks);

// DOM Load Event Listener
document.addEventListener('DOMContentLoaded',gettasks);
// Clear Tasks Event Listener
clearbtn.addEventListener('click',cleartaskfromlocalstorage);
function addtask(e){
    // console.log("hello");

    if(taskinput.value === ''){
        window.alert("Add a task");
    }
    const li = document.createElement('li');
    // add Class   
    li.className = "collection-item";
    // create text node
    li.appendChild(document.createTextNode(taskinput.value));
    const link = document.createElement('a');
    link.className = "delete-item secondary-content";
    // Add icon
    link.innerHTML = `<i class="far fa-trash-alt"></i>`;
    //append a to li
    li.appendChild(link);
    // append li to ul
    tasklist.appendChild(li);
    storetaskinlocalstorage(taskinput.value);
    e.preventDefault();
}
function removetask(e){
    // console.log(e.target);
    // console.log(e.target.parentElement);
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm("Are You Sure")){
            e.target.parentElement.parentElement.remove();
        }
    }
    // remove task from local Storage
    removetaskfromlocalstorage(e.target.parentElement.parentElement);
}

// Clear Tasks
function cleartasks(){
    // Method1
    // tasklist.innerHTML = '';

    // Method2
    let x = 0;
    // console.log(tasklist.childElementCount);
    // const litems = document.querySelectorAll("li");
    // while(x<tasklist.childElementCount){
    //     tasklist.removeChild(tasklist.firstChild);
    // }   

    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }

}

// Filter tasks
function flitertasks(e){
    // console.log("hey");
    // console.log(e.target.value);
    const filter = e.target.value.toLowerCase();
    const tasks = document.querySelectorAll(".collection-item");
    tasks.forEach(function(task){
        const item = task.firstChild.textContent.toLowerCase();
        if(item.indexOf(filter)!== -1){
            task.style.display = "block";
        }else{
            task.style.display = "none";
        }
    })


}
function storetaskinlocalstorage(task){

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));

}

// Get Tasks From loacalstorage

function gettasks(){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(task){
        // create l Element
        const li = document.createElement('li');
        li.className = "collection-item";
        // Create text node and append to li
        li.appendChild(document.createTextNode(task));
        // create new link element
        const link = document.createElement('a');
        // add class
        link.className = 'delete-item secondary-content';
        // add icon
        link.innerHTML = `<i class="fas fa-trash-alt"></i>`;
        // append link to li
        li.appendChild(link);
        tasklist.appendChild(li);
    });
}

// Remove Task From Localstorage
function removetaskfromlocalstorage(taskitem){
    // console.log(taskitem);
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index){
        if(taskitem.textContent === task){
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

// Clear From Local Storage
function cleartaskfromlocalstorage(){
    localStorage.clear();
}