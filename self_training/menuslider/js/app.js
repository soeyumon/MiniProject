// ui
const toggle = document.getElementById("toggle");
const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

// Event Listener
toggle.addEventListener("click",()=>{
    document.body.classList.toggle("show-nav");
});

open.addEventListener("click",()=>{
    // console.log("abcd");
    modal.classList.add("show-modal");
});

close.addEventListener("click",()=>{
    modal.classList.remove("show-modal");
})
// method1
// window.addEventListener("click",function(e){
//     if(e.target === modal){
//         modal.classList.remove("show-modal");
//     }
// });
// Method2
window.addEventListener('click',(e)=>e.target === modal ? modal.classList.remove("show-modal"):false);