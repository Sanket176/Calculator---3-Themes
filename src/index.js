console.log("first");

let inputDisplay = "";

const updateDisplay=()=>{
    let inputScreen = document.getElementById("displayCalculations");
    inputScreen.value = inputDisplay;
    console.log(inputScreen.value);
}

const btn7 = document.getElementById("btn7");
btn7.addEventListener("click", (e)=>{
    btn7.value = 7;
    inputDisplay += btn7.value.toString();
    console.log(btn7.value);
    console.log(inputDisplay);
    updateDisplay();
})

const btn8 = document.getElementById("btn8");
btn8.addEventListener("click", (e)=>{
    btn8.value = 8;
    inputDisplay += btn8.value.toString();
    console.log(btn8.value);
    console.log(inputDisplay);
    updateDisplay();
})

const btn9 = document.getElementById("btn9");
btn9.addEventListener("click", (e)=>{
    btn9.value = 9;
    inputDisplay += btn9.value.toString();
    console.log(btn9.value);
    console.log(inputDisplay);
    updateDisplay();
})

const del = document.getElementById("del");
del.addEventListener("click", (e)=>{
    inputDisplay = inputDisplay.slice(0, -1);
    console.log(inputDisplay);
    updateDisplay();
})

const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", (e)=>{
    btn4.value = 4;
    inputDisplay += btn4.value.toString();
    console.log(btn4.value);
    console.log(inputDisplay);
    updateDisplay();
})

const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", (e)=>{
    btn5.value = 5;
    inputDisplay += btn5.value.toString();
    console.log(btn5.value);
    console.log(inputDisplay);
    updateDisplay();
})

const btn6 = document.getElementById("btn6");
btn6.addEventListener("click", (e)=>{
    btn6.value = 6;
    inputDisplay += btn6.value.toString();
    console.log(btn6.value);
    console.log(inputDisplay);
    updateDisplay();
})

const btnPlus = document.getElementById("btnPlus");
btnPlus.addEventListener("click", (e)=>{
    inputDisplay += "+";
    console.log(inputDisplay);
    updateDisplay();
})

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", (e)=>{
    btn1.value = 1;
    inputDisplay += btn1.value.toString();
    console.log(btn1.value);
    console.log(inputDisplay);
    updateDisplay();
})

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", (e)=>{
    btn2.value = 2;
    inputDisplay += btn2.value.toString();
    console.log(btn2.value);
    console.log(inputDisplay);
    updateDisplay();
})

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", (e)=>{
    btn3.value = 3;
    inputDisplay += btn3.value.toString();
    console.log(btn3.value);
    console.log(inputDisplay);
    updateDisplay();
})

const btnMinus = document.getElementById("btnMinus");
btnMinus.addEventListener("click", (e)=>{
    inputDisplay += "-";
    console.log(inputDisplay);
    updateDisplay();
})

const btnDot = document.getElementById("btnDot");
btnDot.addEventListener("click", (e)=>{
    inputDisplay += ".";
    console.log(inputDisplay);
    updateDisplay();
})

const btn0 = document.getElementById("btn0");
btn0.addEventListener("click", (e)=>{
    btn0.value = 0;
    inputDisplay += btn0.value.toString();
    console.log(btn0.value);
    console.log(inputDisplay);
    updateDisplay();
})

const btnDivison = document.getElementById("btnDivison");
btnDivison.addEventListener("click", (e)=>{
    inputDisplay += "/";
    console.log(inputDisplay);
    updateDisplay();
})

const btnMulti = document.getElementById("btnMulti");
btnMulti.addEventListener("click", (e)=>{
    inputDisplay += "*";
    console.log(inputDisplay);
    updateDisplay();
})

const reset = document.getElementById("reset");
reset.addEventListener("click", (e)=>{
    inputDisplay = "";
    console.log(inputDisplay);
    updateDisplay();
})

const equalstoBtn = document.getElementById("equalstoBtn");
equalstoBtn.addEventListener("click", (e)=>{
    console.log(inputDisplay);
    console.log("Euqal to  btn pressed");
    calc(); //calulate and display the ANSWER
})

const calc=()=>{
    try{
        inputDisplay = eval(inputDisplay);
        updateDisplay();
        inputDisplay = "";
    }
    catch{
        inputDisplay= "Error";
    }
    
}

// Toggle 3 state - CODE

function filterme(value) {
    value = parseInt(value, 10); // Convert to an integer
    var customToggle = document.getElementById('custom-toggle');
    var spanElements = document.querySelectorAll('span');
    var displayCalculations = document.getElementById("displayCalculations");
    // let displayCalculationsTH2 = document.getElementsByClassName("displayCalculations-TH2");
  
    if (value === 1) {
      customToggle.classList.remove('tgl-third', 'tgl-second');
      customToggle.classList.add('tgl-first');
      displayCalculations.classList.remove('displayCalculations');
      displayCalculations.classList.add('displayCalculations-TH2');
      spanElements.forEach(function(span) {
        span.textContent = 'Enabled'; 
      });
    } else if (value === 2) {
      customToggle.classList.remove('tgl-first', 'tgl-third');
      customToggle.classList.add('tgl-second');

      spanElements.forEach(function(span) {
        span.textContent = 'Undetermined';
      });
    } else if (value === 3) {
      customToggle.classList.remove('tgl-first', 'tgl-second');
      customToggle.classList.add('tgl-third');
      spanElements.forEach(function(span) {
        span.textContent = 'Disabled';
      });
    }
  }