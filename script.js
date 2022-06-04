const previous = document.querySelector('.previous');
const current = document.querySelector('.current');
const numbers = document.querySelectorAll('.numbers > div');
const operators = document.querySelectorAll('.operators > div')

let currentNumbers = [];
let currentOperator = '';
let currentStringInt = '';

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
            case '=':
                execute(currentNumbers, currentOperator);
                break;
            default:
                console.log('Error');
        }
    });
});