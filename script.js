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
            case 'AC':
                currentFirst = null;
                currentSecond = null;
                currentOperator = '';
                currentStringInt = '';
                decPressed = false;
                current.textContent = '';
                previous.textContent = '';
                break;
            case 'C':
                if(currentStringInt.slice(-1) == '.') {
                    decPressed = false;
                }
                currentStringInt = currentStringInt.slice(0, -1);
                current.textContent = current.textContent.slice(0, -1);
                break;
            case '0':
                if(!currentStringInt) {
                    break;
                } else {
                currentStringInt += '0';
                current.textContent = currentStringInt;
                }
                break;            
            case '1':
                if(currentFirst != null && currentSecond != null) {
                    currentFirst = null;
                    currentSecond = null;
                    currentOperator = '';
                    currentStringInt = '';
                    decPressed = false;
                    current.textContent = '';
                    decPressed = false;
                }
                currentStringInt += '1';
                current.textContent = currentStringInt;
                break;            
            case '2':
                if(currentFirst != null && currentSecond != null) {
                    currentFirst = null;
                    currentSecond = null;
                    currentOperator = '';
                    currentStringInt = '';
                    decPressed = false;
                    current.textContent = '';
                    decPressed = false;
                }
                currentStringInt += '2';
                current.textContent = currentStringInt;
                break;            
            case '3':
                console.log(`currentFirst on 3 start = ${currentFirst}`);
                console.log(`currentSecond on 3 start = ${currentSecond}`);
                if(currentFirst != null && currentSecond != null) {
                    currentFirst = null;
                    currentSecond = null;
                    currentOperator = '';
                    currentStringInt = '';
                    decPressed = false;
                    current.textContent = '';
                    decPressed = false;
                }
                console.log(`currentFirst on 3 end = ${currentFirst}`);
                console.log(`currentSecond on 3 end = ${currentSecond}`);
                currentStringInt += '3';
                current.textContent = currentStringInt;
                break;            
            case '4':
                if(currentFirst != null && currentSecond != null) {
                    currentFirst = null;
                    currentSecond = null;
                    currentOperator = '';
                    currentStringInt = '';
                    decPressed = false;
                    current.textContent = '';
                    decPressed = false;
                }
                currentStringInt += '4';
                current.textContent = currentStringInt;
                break;            
            case '5':
                if(currentFirst != null && currentSecond != null) {
                    currentFirst = null;
                    currentSecond = null;
                    currentOperator = '';
                    currentStringInt = '';
                    decPressed = false;
                    current.textContent = '';
                    decPressed = false;
                }
                currentStringInt += '5';
                current.textContent = currentStringInt;
                break;
            case '6':
                if(currentFirst != null && currentSecond != null) {
                    currentFirst = null;
                    currentSecond = null;
                    currentOperator = '';
                    currentStringInt = '';
                    decPressed = false;
                    current.textContent = '';
                    decPressed = false;
                }
                currentStringInt += '6';
                current.textContent = currentStringInt;
                break;
            case '7':
                if(currentFirst != null && currentSecond != null) {
                    currentFirst = null;
                    currentSecond = null;
                    currentOperator = '';
                    currentStringInt = '';
                    decPressed = false;
                    current.textContent = '';
                    decPressed = false;
                }
                currentStringInt += '7';
                current.textContent = currentStringInt;
                break;            
            case '8':
                if(currentFirst != null && currentSecond != null) {
                    currentFirst = null;
                    currentSecond = null;
                    currentOperator = '';
                    currentStringInt = '';
                    decPressed = false;
                    current.textContent = '';
                    decPressed = false;
                }
                currentStringInt += '8';
                current.textContent = currentStringInt;
                break;            
            case '9':
                if(currentFirst != null && currentSecond != null) {
                    currentFirst = null;
                    currentSecond = null;
                    currentOperator = '';
                    currentStringInt = '';
                    decPressed = false;
                    current.textContent = '';
                    decPressed = false;
                }
                currentStringInt += '9';
                current.textContent = currentStringInt;
                break;
            case '.': 
                if(!decPressed) {
                    if(currentFirst != null && currentSecond != null) {
                        currentFirst = null;
                        currentSecond = null;
                        currentOperator = '';
                        currentStringInt = '';
                        decPressed = false;
                        current.textContent = '';
                        decPressed = false;
                    }    
                    currentStringInt += '.';
                    current.textContent = currentStringInt;
                    decPressed = true;
                } else {
                    break;
                }
                break;
            case '=':
                console.log(`currentFirst on equal start = ${currentFirst}`);
                console.log(`currentSecond on equal start = ${currentSecond}`);
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
                    console.log(`currentFirst on equal start = ${currentFirst}`);
                    console.log(`currentFirst on equal start = ${currentSecond}`);
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
        if(currentFirst == null && currentStringInt == '') {
            return;
        }
        operator.setAttribute('id','pressope');
        switch(operator.textContent) {
            case '+':
                decPressed = false;
                if(currentFirst == null) {
                    if(currentStringInt.includes('.')) {
                        currentFirst = parseFloat(currentStringInt);
                    } else {
                    currentFirst = parseInt(currentStringInt);
                    }
                    currentStringInt = '';
                } else {
                    if(currentFirst != null && currentSecond != null) {
                        currentSecond = null;
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
            }
                currentOperator = '+';
                break;
            case '-':
                decPressed = false;
                if(currentFirst == null) {
                    if(currentStringInt.includes('.')) {
                        currentFirst = parseFloat(currentStringInt);
                    } else {
                    currentFirst = parseInt(currentStringInt);
                    }
                    currentStringInt = '';
                } else {
                    if(currentFirst != null && currentSecond != null) {
                        currentSecond = null;
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
            }
                currentOperator = '-';
                break;
            case '%':
                decPressed = false;
                if(currentFirst == null) {
                    if(currentStringInt.includes('.')) {
                        currentFirst = parseFloat(currentStringInt);
                    } else {
                    currentFirst = parseInt(currentStringInt);
                    }
                    currentStringInt = '';
                } else {
                    if(currentFirst != null && currentSecond != null) {
                        currentSecond = null;
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
            }
                currentOperator = '%';
                break;
            case 'x':
                decPressed = false;
                if(currentFirst == null) {
                    if(currentStringInt.includes('.')) {
                        currentFirst = parseFloat(currentStringInt);
                    } else {
                    currentFirst = parseInt(currentStringInt);
                    }
                    currentStringInt = '';
                } else {
                    if(currentFirst != null && currentSecond != null) {
                        currentSecond = null;
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
            }
                currentOperator = 'x';
                console.log(`currentFirst on multiply end = ${currentFirst}`);
                console.log(`currentSecond on multiply end = ${currentSecond}`);                
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
            if(second == 0) {
                console.log('running');
                alert('Did you think this humble HTML calculator was capable of such things? I am flattered :). For you, I will return the result of 1.');
                return 1;
            }
            result = first / second;
            break;
        case 'x':
            result = first * second;
            break;
        default:
            console.log(error);
    }
    if(typeof result === 'float') {
        return result.toFixed(3);
    }
    return result;
}

