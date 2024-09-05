var numbers = [];
var operator = null;
var result = null;

// TODO: Add keyboard support

function clear() {
    numbers = [];
    operator = null;
    display.textContent = null;
    result = null;
}

function operate(operator, numbers) {
  console.log("Executing operate with:", numbers, operator);
    switch (operator) {
        case '+':
          return numbers[0] + numbers[1];
        case '-':
            return numbers[0] - numbers[1];
        case '*':
            return numbers[0] * numbers[1];
        case '/':
            if (numbers[1] === 0) {
                return '';
            }
            else {
              return numbers[0] / numbers[1];
            }
            
        default:
            return 'Invalid operator';
    }
}

const display = document.getElementById('display');
const digitButton = document.querySelectorAll('.digit-btn');

digitButton.forEach((button) => {
    button.addEventListener('click', () => {
      // TODO: Should allow decimal numbers - only one decimal point per number
      // TODO: Should ensure numbers don't start with 0
      console.log(numbers, operator, result);
      if (result === Number(display.textContent)) {
        display.textContent = '';
      }
      display.textContent += button.textContent;
    });
});

const operatorButton = document.querySelectorAll('.operator-btn');
operatorButton.forEach((button) => {
    button.addEventListener('click', () => {
      console.log(numbers, operator, result);
      if (numbers.length < 2) {
        numbers.push(Number(display.textContent));    
      } 
      console.log(numbers, operator, result);
      if (numbers.length === 2 && operator !== null) {
        result = operate(operator, numbers);
        display.textContent = result;
        numbers = [result];
        operator = button.textContent;
      } else {
        operator = button.textContent;
        display.textContent = ''; 
        console.log(numbers, operator, result);
      }
    });
  });

const equalButton = document.getElementById('equals-btn');
equalButton.addEventListener('click', () => {
  if (numbers.length < 2 && operator !== null) {
    numbers.push(Number(display.textContent));    
  }
  if (numbers.length === 2 && operator !== null) {
    result = operate(operator, numbers);
    display.textContent = result;
    operator = null;
    numbers = [];
  }
  console.log("end equal button", numbers, operator, result);
});

const clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', () => {
    clear();
});
