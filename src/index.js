console.log("first");

let inputDisplay = "";

let btn7 = document.getElementById("btn7");
btn7.addEventListener("click", (e)=>{
    btn7.value = 7;
    inputDisplay += btn7.value.toString();
    console.log(btn7.value);
    console.log(inputDisplay);
})

const btn8 = document.getElementById("btn8");
btn8.addEventListener("click", (e)=>{
    btn8.value = 8;
    inputDisplay += btn8.value.toString();
    console.log(btn8.value);
    console.log(inputDisplay);
})

const btn9 = document.getElementById("btn9");
btn9.addEventListener("click", (e)=>{
    btn9.value = 9;
    inputDisplay += btn9.value.toString();
    console.log(btn9.value);
    console.log(inputDisplay);
})

const del = document.getElementById("del");
del.addEventListener("click", (e)=>{
    inputDisplay = inputDisplay.slice(0, -1);
    console.log(inputDisplay);
})

const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", (e)=>{
    btn4.value = 4;
    inputDisplay += btn4.value.toString();
    console.log(btn4.value);
    console.log(inputDisplay);
})

const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", (e)=>{
    btn5.value = 5;
    inputDisplay += btn5.value.toString();
    console.log(btn5.value);
    console.log(inputDisplay);
})

const btn6 = document.getElementById("btn6");
btn6.addEventListener("click", (e)=>{
    btn6.value = 6;
    inputDisplay += btn6.value.toString();
    console.log(btn6.value);
    console.log(inputDisplay);
})

const btnPlus = document.getElementById("btnPlus");
btnPlus.addEventListener("click", (e)=>{
    inputDisplay += "+";
    console.log(inputDisplay);
})

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", (e)=>{
    btn1.value = 1;
    inputDisplay += btn1.value.toString();
    console.log(btn1.value);
    console.log(inputDisplay);
})

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", (e)=>{
    btn2.value = 2;
    inputDisplay += btn2.value.toString();
    console.log(btn2.value);
    console.log(inputDisplay);
})

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", (e)=>{
    btn3.value = 3;
    inputDisplay += btn3.value.toString();
    console.log(btn3.value);
    console.log(inputDisplay);
})

const btnMinus = document.getElementById("btnMinus");
btnMinus.addEventListener("click", (e)=>{
    inputDisplay += "-";
    console.log(inputDisplay);
})

const btnDot = document.getElementById("btnDot");
btnDot.addEventListener("click", (e)=>{
    inputDisplay += ".";
    console.log(inputDisplay);
})

const btn0 = document.getElementById("btn0");
btn0.addEventListener("click", (e)=>{
    btn0.value = 0;
    inputDisplay += btn0.value.toString();
    console.log(btn0.value);
    console.log(inputDisplay);
})

const btnDivison = document.getElementById("btnDivison");
btnDivison.addEventListener("click", (e)=>{
    inputDisplay += "/";
    console.log(inputDisplay);
})

const btnMulti = document.getElementById("btnMulti");
btnMulti.addEventListener("click", (e)=>{
    inputDisplay += "*";
    console.log(inputDisplay);
})

const reset = document.getElementById("reset");
reset.addEventListener("click", (e)=>{
    inputDisplay = "";
    console.log(inputDisplay);
})

const equalstoBtn = document.getElementById("equalstoBtn");
equalstoBtn.addEventListener("click", (e)=>{
    console.log(inputDisplay);
    console.log("Euqal to  btn pressed");
    //calc(); //calulate and display the ANSWER
})