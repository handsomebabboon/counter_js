let count = 0
let num_counter = document.getElementById("count-el")

let history_text = document.getElementById("len-history")
function increment(){

    count += 1;
    
    num_counter.textContent = count;
}

function save(){
    let str = count + " - "
    history_text.textContent += str;
    count = 0;
    num_counter.textContent = count;
}

