let display = document.getElementById("screen");

function ajay(value){
    display.value += value;

}

function clear(){
    display.value = " ";
}

function calculate(){
    display.value = eval(display.value);
}
function back(){
    display.value = display.value.slice(0, -1);

}

document.querySelectorAll("#keys  button" ).forEach((btn) =>{
    btn.addEventListener("click", function(){
        if(btn.textContent === "="){
            calculate();

        } else if(btn.textContent === "AC"){
            clear();
        } else if(btn.textContent === "B"){
            back();
        } else{
            ajay(btn.textContent);
        }
        
    })

})