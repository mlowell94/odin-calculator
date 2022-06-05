const previous = document.querySelector('.previous');
const current = document.querySelector('.current');
const numbers = document.querySelectorAll('.numbers > div');
const operators = document.querySelectorAll('.operators > div')

let currentFirst = null;
let currentSecond = null;
let currentOperator = '';
let currentStringInt = '';
let decPressed = false;

numbers.forEach(number => {
    number.addEventListener('click', function(e) {
        number.setAttribute('id','press');
        setTimeout(function() {
            number.removeAttribute('id')
        }, 50);
        switch(number.textContent) {
            case '0':
                if(!currentStringInt) {
                    break;
                } else {
                currentStringInt += '0';
                current.textContent = currentStringInt;
                }
                break;            
            case '1':
                currentStringInt += '1';
                current.textContent = currentStringInt;
                break;            
            case '2':
                currentStringInt += '2';
                current.textContent = currentStringInt;
                break;            
            case '3':
                currentStringInt += '3';
                current.textContent = currentStringInt;
                break;            
            case '4':
                currentStringInt += '4';
                current.textContent = currentStringInt;
                break;            
            case '5':
                currentStringInt += '5';
                current.textContent = currentStringInt;
                break;
            case '6':
                currentStringInt += '6';
                current.textContent = currentStringInt;
                break;
            case '7':
                currentStringInt += '7';
                current.textContent = currentStringInt;
                break;            
            case '8':
                currentStringInt += '8';
                current.textContent = currentStringInt;
                break;            
            case '9':
                currentStringInt += '9';
                current.textContent = currentStringInt;
                break;
            case '.': 
                if(!decPressed) {
                    currentStringInt += '.';
                    current.textContent = currentStringInt;
                    decPressed = true;
                } else {
                    break;
                }
            case '=':
                operators.forEach(operator => operator.removeAttribute('id'));
                if(currentFirst == null) {
                    break;
                }
                if(currentStringInt == '') {
                    previous.textContent = `${currentFirst} ${currentOperator} ${currentSecond}`
                    result = operate(currentFirst,currentSecond,currentOperator);
                    currentFirst = result;
                    current.textContent = result;
                    console.log(currentFirst);
                    console.log(currentSecond);
                    break;
                } else {
                    if(currentStringInt.includes('.')) {
                        currentSecond = parseFloat(currentStringInt);
                    } else {
                        currentSecond = parseInt(currentStringInt);
                    }
                currentStringInt = '';
                previous.textContent = `${currentFirst} ${currentOperator} ${currentSecond}`
                result = operate(currentFirst,currentSecond,currentOperator);
                currentFirst = result;
                current.textContent = result;
                console.log(currentFirst);
                console.log(currentSecond);
                break;
                }
            default:
                console.log('Error');
        }
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', function(e) {
        operators.forEach(operator => operator.removeAttribute('id'));
        operator.setAttribute('id','press');
        switch(operator.textContent) {
            case '+':
                if(currentFirst == null) {
                    currentFirst = parseInt(currentStringInt);
                    currentStringInt = '';
                } else {
                    if(currentStringInt == '') {
                        previous.textContent = current.textContent;
                        current.textContent = '';
                    } else {
                    currentSecond = parseInt(currentStringInt);
                    currentStringInt = '';
                    previous.textContent = `${currentFirst} ${currentOperator} ${currentSecond}`
                    result = operate(currentFirst,currentSecond,currentOperator);
                    currentFirst = result;
                    current.textContent = result;    
                    }
                }
                currentOperator = '+';
                break;
            case '-':
                if(currentFirst == null) {
                    currentFirst = parseInt(currentStringInt);
                    currentStringInt = '';
                } else {
                    if(currentStringInt == '') {
                        previous.textContent = current.textContent;
                        current.textContent = '';
                    } else {
                    currentSecond = parseInt(currentStringInt);
                    currentStringInt = '';
                    previous.textContent = `${currentFirst} ${currentOperator} ${currentSecond}`
                    result = operate(currentFirst,currentSecond,currentOperator);
                    currentFirst = result;
                    current.textContent = result;    
                    }
                }
                currentOperator = '-';
                break;
            case '%':
                if(currentFirst == null) {
                    currentFirst = parseInt(currentStringInt);
                    currentStringInt = '';
                } else {
                    if(currentStringInt == '') {
                        previous.textContent = current.textContent;
                        current.textContent = '';
                    } else {
                    currentSecond = parseInt(currentStringInt);
                    currentStringInt = '';
                    previous.textContent = `${currentFirst} ${currentOperator} ${currentSecond}`
                    result = operate(currentFirst,currentSecond,currentOperator);
                    currentFirst = result;
                    current.textContent = result;    
                    }
                }
                currentOperator = '%';
                break;
            case 'x':
                if(currentFirst == null) {
                    currentFirst = parseInt(currentStringInt);
                    currentStringInt = '';
                } else {
                    if(currentStringInt == '') {
                        previous.textContent = current.textContent;
                        current.textContent = '';
                    } else {
                    currentSecond = parseInt(currentStringInt);
                    currentStringInt = '';
                    previous.textContent = `${currentFirst} ${currentOperator} ${currentSecond}`
                    result = operate(currentFirst,currentSecond,currentOperator);
                    currentFirst = result;
                    current.textContent = result;    
                    }
                }
                currentOperator = 'x';
                break;
            default:
                console.log('Error');
        }
    });
});

function operate(first,second,ope) {
    result = 0;
    switch(ope) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '%':
            result = first / second;
            break;
        case 'x':
            result = first * second;
            break;
        default:
            console.log(error);
    }
    return result;
}

