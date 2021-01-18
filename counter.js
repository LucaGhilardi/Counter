let decrease_btn = document.getElementById("decrease-btn");
let increase_btn = document.getElementById("increase-btn");
let counter = document.getElementById("counter");
let reset = document.getElementById("reset");
let count = 0;


decrease_btn.addEventListener("click", ()=> {
    count--;
    counter.innerHTML = count;
})

increase_btn.addEventListener("click", ()=> {
    count++;
    counter.innerHTML = count;
})

reset.addEventListener("click", ()=>{
    counter.innerHTML=count=0;
})