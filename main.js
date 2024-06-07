function calculate(event)
{
    const inputValue =  event.target.value;
    const expression = /\+|\*|\-|\//;
    const numbers = inputValue.split(expression);
    const numberA = parseInt(numbers[0]);
    const numberB = parseInt(numbers[1]);

    const operation = inputValue.match(expression);
    if (operation == null){
        updateResult('Operation not recognised')
        return;
    }
    if(isNaN(numberA) || isNaN(numberB))
    {
        updateResult('Please enter number instead of string variable')
        return;
    }
    const operator = operation[0];

    const Calculator = new calculator();
    Calculator.add(numberA);
    
    let result;
    switch(operator){
        case '+':
            result = Calculator.add(numberB)
            break;
        case '-':
            result = Calculator.substract(numberB)
            break;
        case '*':
            result = Calculator.multiply(numberB)
            break;
        case '/':
            result = Calculator.divide(numberB)
            break;
    }

    updateResult(result);

    function updateResult(result)
    {
        let element = document.getElementById('result');
        if(element){
            element.innerText = result
        }
    }
   
}
document.getElementById('inputValue').addEventListener('change',calculate);