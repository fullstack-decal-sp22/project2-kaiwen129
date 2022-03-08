//Check out calculator_hints.js for hints if you're stuck
var resultWindow = document.getElementById("result-screen");
var prev = 0;
var mode = "none"; 

document.addEventListener("click", function(event){
    if(event.target.className == "number-button"){
        let number = event.target.innerText;
        if(resultWindow.innerText == "0"){
            resultWindow.innerText = number;
        }
        else{
            resultWindow.innerText = resultWindow.innerText + number;
        }
    }
    if(event.target.id == "plus"){
        prev = parseInt(resultWindow.innerText);
        resultWindow.innerText = "0";
        mode = "plus";
    }
    if(event.target.id == "minus"){
        prev = parseInt(resultWindow.innerText);
        resultWindow.innerText = "0";
        mode = "minus";
    }
    if(event.target.id == "multiply"){
        prev = parseInt(resultWindow.innerText);
        resultWindow.innerText = "0";
        mode = "multiply";
    }
    if(event.target.id == "divide"){
        prev = parseInt(resultWindow.innerText);
        resultWindow.innerText = "0";
        mode = "divide";
    }
    if(event.target.id == "equals"){
        if(mode == "plus"){
            resultWindow.innerText = (prev + parseInt(resultWindow.innerText)).toString();
        }
        if(mode == "minus"){
            resultWindow.innerText = (prev - parseInt(resultWindow.innerText)).toString();
        }
        if(mode == "multiply"){
            resultWindow.innerText = (prev * parseInt(resultWindow.innerText)).toString();
        }
        if(mode == "divide"){
            resultWindow.innerText = (prev / parseInt(resultWindow.innerText)).toString();
        }
        mode = "none";
    }
    if(event.target.id == "clear"){
        mode = "none";
        resultWindow.innerText = "0";
    }
    if(event.target.id == "backspace"){
        resultWindow.innerText = resultWindow.innerText.slice(0, resultWindow.innerText.length-1);
        if(resultWindow.innerText.length == 0){
            resultWindow.innerText = "0";
        }
    }
})

