let string = "";
let button = document.querySelectorAll('.button');
Array.from(button).forEach((button) => {
    button.addEventListener('click', (e) => {
        let input = document.querySelector('input');
        let inputValue = input.value;
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DE') {
            string = string.slice(0, -1);
            input.value = string;
        } else if (e.target.innerHTML == 'sin') {
            input.value = Math.sin(parseFloat(inputValue));
        } else if (e.target.innerHTML == 'cos') {
            input.value = Math.cos(parseFloat(inputValue));
        } else if (e.target.innerHTML == 'tan') {
            input.value = Math.tan(parseFloat(inputValue));
        } else if (e.target.innerHTML == '%') {
            input.value = parseFloat(inputValue) / 100;
        } else if (e.target.innerHTML == 'x!') {
            input.value = factorial(parseFloat(inputValue));
        } else if (e.target.innerHTML == 'pi') {
            input.value = Math.PI;
        } else if (e.target.innerHTML == 'log') {
            input.value = Math.log10(parseFloat(inputValue));
        } else if (e.target.innerHTML == 'root') {
            input.value = Math.sqrt(parseFloat(inputValue));
        } else if (e.target.innerHTML == 'mod') {
            string += '%'; 
        }
         else if (e.target.innerHTML == 'squ') { 
            input.value = Math.pow(parseFloat(inputValue), 2); 
        } else {
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}
