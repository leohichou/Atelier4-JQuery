$(document).ready(function() {
    let screen = $('.calculator-screen');
    let currentInput = '';
    let operator = '';
    let firstNumber = '';

    function clearScreen() {
        screen.val('');
    }

    function updateScreen(value) {
        screen.val(value);
    }

    function handleNumber(number) {
        if (currentInput.length < 10) {
            currentInput += number;
            updateScreen(currentInput);
        }
    }

    function handleOperator(op) {
        if (currentInput === '' && op !== '-') {
            return;
        }
        if (currentInput === '' && op === '-') {
            currentInput = '-';
            updateScreen(currentInput);
            return;
        }
        if (operator !== '') {
            calculate();
        }
        firstNumber = currentInput;
        currentInput = '';
        operator = op;
    }

    function calculate() {
        let result = 0;
        const a = parseFloat(firstNumber);
        const b = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
        }
        currentInput = result.toString();
        operator = '';
        firstNumber = '';
        updateScreen(currentInput);
    }

    $('.btn').click(function() {
        const buttonText = $(this).text();

        if ($(this).hasClass('operator')) {
            handleOperator(buttonText);
        } else if ($(this).hasClass('equal-sign')) {
            calculate();
        } else if ($(this).hasClass('all-clear')) {
            clearScreen();
            currentInput = '';
            operator = '';
            firstNumber = '';
        } else if ($(this).hasClass('clear')) {
            clearScreen();
            currentInput = '';
        } else {
            handleNumber(buttonText);
        }
    });
});