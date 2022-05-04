const results = document.getElementById('results');
const containerButtons = document.querySelector('.container-buttons');
let number1 = 0;
let number2 = 0;
let typeOperation = '+';
containerButtons.addEventListener('click', (e) => {
    const click = e.target;
    const data = click.dataset;
    if(data.number) {
        writeScreen(data.number);
    }
    if(data.math){
        getOperation(data.math);
    }
    if(data.operation){
        runOperation(data.operation);
    }
});
const writeScreen = number => {
    results.innerHTML += number;
    if(results.innerHTML.includes('+') || results.innerHTML.includes('-') || results.innerHTML.includes('*') || results.innerHTML.includes('/')){
        results.innerHTML = number;
        number2 = number;
    }
}
const getOperation = operation => {
    number1 = results.innerHTML;
    results.innerHTML = operation;
    typeOperation = operation;
    return {number1, typeOperation};
}
const runOperation = operation => {
    if(operation === 'reset'){
        results.innerHTML = '';
    } else if(operation === 'del'){
        results.innerHTML = results.innerHTML.slice(results.length, -1);;
    } else if (operation === 'equal'){
        function getResults (number1, typeOperation) {
            number2 = results.innerHTML;
            switch(typeOperation){
                case '+': 
                    results.innerHTML = Number(number1) + Number(number2);
                break;
                case '-': 
                results.innerHTML= Number(number1) - Number(number2);
                break;
                case '*': 
                    results.innerHTML = Number(number1) * Number(number2);
                break;
                case '/': 
                    results.innerHTML = Number(number1) / Number(number2);
                break;
            }
        }
        getResults(number1, typeOperation);
        }
} 

// Change theme

const body = document.getElementById('body');
const theme1 = document.getElementById('theme1');
const theme2 = document.getElementById('theme2');
const theme3 = document.getElementById('theme3');
theme1.addEventListener('click', (e) => {
    body.classList.add('theme1');
    body.classList.remove('theme2');
    body.classList.remove('theme3');
    if(body.classList.contains("theme1")){
        localStorage.setItem("theme1", "true");
    } else if (!body.classList.contains("theme1")) {
        localStorage.setItem("theme1", "false");
    }
});
theme2.addEventListener('click', (e) => {
    body.classList.add('theme2');
    body.classList.remove('theme1');
    body.classList.remove('theme3');
    if(body.classList.contains("theme2")){
        localStorage.setItem("theme2", "true");
    } else if (!body.classList.contains("theme2")) {
        localStorage.setItem("theme2", "false");
    }
});
theme3.addEventListener('click', (e) => {
    body.classList.add('theme3');
    body.classList.remove('theme2');
    body.classList.remove('theme1');
    if(body.classList.contains("theme3")){
        localStorage.setItem("theme3", "true");
    } else if (!body.classList.contains("theme2")) {
        localStorage.setItem("theme3", "false");
    }
});
if(localStorage.getItem("theme1") === "true"){
    body.classList.add("theme1");
    localStorage.setItem("theme1", "false");
    localStorage.setItem("theme2", "false");
    localStorage.setItem("theme3", "false");
} else if(localStorage.getItem("theme1") === "false") {
    body.classList.remove("theme1");
} 
if(localStorage.getItem("theme2") === "true"){
    body.classList.add("theme2");
    localStorage.setItem("theme1", "false");
    localStorage.setItem("theme2", "false");
    localStorage.setItem("theme3", "false");
} else if(localStorage.getItem("theme2") === "false") {
    body.classList.remove("theme2");
} 
if(localStorage.getItem("theme3") === "true"){
    body.classList.add("theme3");
    localStorage.setItem("theme1", "false");
    localStorage.setItem("theme2", "false");
    localStorage.setItem("theme3", "false");
} else if(localStorage.getItem("theme3") === "false") {
    body.classList.remove("theme3");
}