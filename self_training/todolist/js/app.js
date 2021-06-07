// Ui
const form = document.querySelector('#task-form');
const taskinput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');

// Add Task Event Listener
form.addEventListener('submit',addtask);
tasklist.addEventListener('click',removetask);
clearbtn.addEventListener('click',cleantasks);
filter.addEventListener('keyup',filtertasks);

document.addEventListener('DOMContentLoaded',gettasks);
clearbtn.addEventListener('click',cleartaskfromlocalstorage);
// Functions
function addtask(e){
    // console.log("hey");
    if(taskinput.value === ''){
        window.alert("Please insert task");
    }
    const li = document.createElement('li');
    li.className = "collection-items";
    li.appendChild(document.createTextNode(taskinput.value));
    const link = document.createElement('a');
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="far fa-trash-alt"></i>';
    li.appendChild(link);
    tasklist.appendChild(li);
    // console.log(taskinput.value);
    
    e.preventDefault();
    storetaskinlocalstorage(taskinput.value);
    
}
function removetask(e){
//  console.log(e.target.parentElement);
    if(e.target.parentElement.classList.contains("delete-item")){
        
        if(confirm("Are you Sure")){
            e.target.parentElement.parentElement.remove();
        }
    }
    removetaskfromlocalstorage(e.target.parentElement.parentElement);
}
function cleantasks(){
    // method1
    // tasklist.innerText = "";
    // method2
    let x = 0;
    // console.log(tasklist.childElementCount);
    // while(tasklist.childElementCount>x){
    //     tasklist.removeChild(tasklist.firstChild);
    // }
    while(tasklist.childElementCount){
        tasklist.removeChild(tasklist.firstChild);
    }
}

function filtertasks(e){
    // console.log(e.target.value.toLowerCase());
    const filter = e.target.value.toLowerCase();
    const tasks = document.querySelectorAll(".collection-items");
    // console.log(tasks);
    tasks.forEach(function(task){
        // console.log(task);
        const item = task.firstChild.textContent.toLowerCase();
        // console.log(item);
        if(item.indexOf(filter)!== -1){
            task.style.display = "block";
        }else{
            task.style.display = "none";
        }
    });
}
function storetaskinlocalstorage(task){
    console.log(task);
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));

}
function gettasks(){
    // console.log("cc");
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(task){
        // console.log("hi");
        const li = document.createElement('li');
        li.className = "collection-item";
        li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
        link.className = "delete-item secondary-content";
        link.innerHTML = "<i class='fas fa-trash-alt'></i>";
        li.appendChild(link);
        tasklist.appendChild(li);
        
    });
    console.log(tasks);
}
function removetaskfromlocalstorage(taskitem){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(task,index){
        console.log(taskitem.textContent);
        console.log('b'+task);
        if(taskitem.textContent == task){
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
function cleartaskfromlocalstorage(){
    localStorage.clear();
}