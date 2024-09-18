

document.addEventListener('DOMContentLoaded', function () {

    const startButton = document.getElementById('startButton');
    const resultTable = document.getElementById('resultTable');

    startButton.addEventListener('click', function () {

        while (true) {
            const x = prompt('Enter value x:');
            if (x === null) {
                break;

            }


            const operator = prompt('Enter an operator:');
            if (operator === null) {
                break;

            }


            const y = prompt('Enter value y:');
            if (y === null) {
                break;

            }


            const result = calculateResult(parseFloat(x), parseFloat(y), operator);
            const newRow = createTableRow(x, operator, y, result);
            resultTable.appendChild(newRow);

            const continuePrompt = confirm('Continue?');
            if (!continuePrompt) {
                break;
                
            }

        }
    });

    function calculateResult(x, y, operator) {
        if (isNaN(x) || isNaN(y)) {
            return 'Error: Non-numeric input';
        }

        switch (operator) {
            case '+':
                return x + y;
            case '-':
                return x - y;
            case '*':
                return x * y;
            case '/':
                return y !== 0 ? x / y : 'Error: cannot divide by 0';
            case '%':
                return y !== 0 ? x % y : 'Error: cannot modulus by 0';
            default:
                return 'Error: Invalid operator';
        }
    }

    function createTableRow(x, operator, y, result) {
        const row = document.createElement('tr');
        const xCell = document.createElement('td');

        const operatorCell = document.createElement('td');
        const yCell = document.createElement('td');
        const resultCell = document.createElement('td');

        xCell.textContent = x;
        operatorCell.textContent = operator;

        yCell.textContent = y;
        resultCell.textContent = result;

        row.appendChild(xCell);
        row.appendChild(operatorCell);

        row.appendChild(yCell);
        row.appendChild(resultCell);

        return row;
    }
});