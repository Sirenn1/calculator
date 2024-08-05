let display = document.querySelector(".display");
let allButtons = document.querySelectorAll("button");

let isFirstClick = false;
allButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (!isFirstClick) {
            allButtons.forEach(btn => {
                display.innerHTML = ""; // Clear the content of each button
            });
            isFirstClick = true;
        }
    });
});
   
let x = "";
let operator = "";
let y = "";

allButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.innerText != "="){
        display.innerHTML += button.innerText;

        if(button.innerText == "+" ||button.innerText == "-" ||
           button.innerText == "*" ||button.innerText == "/"){
            operator = button.innerText;
        }
        else if(!y && !operator){
            x += button.innerText;
        }
        else if (operator && x )
        {
            y += button.innerText;
            }
        } 
        else if(button.innerText == "="){
            display.innerText = "";
            countResult();
            display.innerHTML += result;
        }
        console.log(`x : ${x}`);
        console.log(`op : ${operator}`);
        console.log(`y : ${y}`);
    });
});

let result = 0;

function countResult (){
    x = parseInt(x);
    y = parseInt(y);
    if(operator == "+"){
        result = x+y;
    }
    else if(operator == "-"){
        result = x-y;
    }
    else if(operator == "*"){
        result = x*y;
    }
    else if(operator == "/"){
        result = x/y;
    }
}



