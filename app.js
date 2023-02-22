/*
let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}

let a;
let b;
let c;



console.log(c)

document.getElementById("outPut").onclick = function(){
    a = document.getElementById("aText").value;
    a = Number(a);
    b = document.getElementById("bText").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    c = document.getElementById("cLabel").innerHTML = "side c :" + c;
}

let count  = 0;

document.getElementById("naklebiButton").onclick = function(){
      count -=1;   
      document.getElementById("text").innerHTML = count;
}
document.getElementById("resetButton").onclick = function(){
      count = 0;   
      document.getElementById("text").innerHTML = count;
}
document.getElementById("metiButton").onclick = function(){
      count +=1;   
      document.getElementById("text").innerHTML = count;
}


document.getElementById("myButton").onclick = function(){

    const checkBox = document.getElementById("checkBox");
    const visaCard = document.getElementById("visaCard");
    const masterCard = document.getElementById("masterCard");
    const payPal = document.getElementById("payPal");


    if(checkBox.checked){
        console.log("your button is checked");
    }
    else{
        console.log("your button is not checked");
    }

    if(visaCard.checked){
        console.log("You choose visaCard");
    }
    else if(masterCard.checked){
        console.log("You choose masterCard");
    }
    else if(payPal.checked){
        console.log("You choose payPal");
    }
}

let graphics = window.prompt("Enter your Graphics")
let row = window.prompt("Enter your Row ")
let column = window.prompt("Enter your Column")

for( let i = 1; i<= row; i+= 1){
    for( let j = 1; j <= column; j+= 1){
        document.getElementById("myLabel").innerHTML += graphics;
    }
    document.getElementById("myLabel").innerHTML += "<br>";
}

 
const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("myButton").onclick = function(){
   let guess = document.getElementById("myInput").value
    guesses+=1;

    if(guess == answer){
        alert(`finally! Your # is ${answer} you took it ${guesses} guesses`);
    }
    else if(guess < answer) { 
        alert(`it's too small`);
    }
    else{
        alert(`it's too large`);
    }
}



document.getElementById("myButton").onclick = function(){
    
    let temp;

    if(document.getElementById("cButton").checked){
        temp = document.getElementById("myInput").value;
        temp = Number(temp);
        temp = laCelcius(temp);
        document.getElementById("myLabel").innerHTML = temp + "*C"
    }
    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("myInput").value;
        temp = Number(temp);
        temp = laFahrenit(temp);
        document.getElementById("myLabel").innerHTML = temp + "*F"
    }
    else{
        document.getElementById("myLabel").innerHTML = "select a button "
    }
}

function laCelcius (temp){
    return (temp -32) * (9/5);
}
function laFahrenit (temp){
    return temp * 9 / 5 + 32;
}


let numbers = [1,2,3,4,5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

cubes.forEach(print);

function square(element){
     return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}
function print(element){
    console.log(element);
}

let prices = [5, 10, 15, 20, 25]
let total = prices.reduce(checkOut);
console.log(total);
function checkOut(total, element ,){
    return total + element ;
}


let grades = [100 , 50 , 90 , 60, 70 ,80];

grades = grades.sort(descenSort);
grades.forEach(print);

function descenSort(x, y){
    return y - x;
}

function print(element){
    console.log(element);
}
const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", move );
let g = 0;
let j = 0;

function move(event){
    switch(event.key){
        case "ArrowDown":
            j+=10;
            myDiv.style.top = j + "px";
            break;
        case "ArrowUp":
            j-=10;
            myDiv.style.top = j + "px";
            break;    
        case "ArrowRight":
            g+=10;
            myDiv.style.left = g + "px";
            break;    
        case "ArrowLeft": 
            g-=30;
            myDiv.style.left = g + "px";
            break;            
        default:
            break;    
    }
}
*/





document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
});



