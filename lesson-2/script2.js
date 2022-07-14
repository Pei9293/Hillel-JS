

const actions = ['+', '-', '*', '/'];

let operator = getOperator()

let operandsCount = getOperandsCount()

let operands = getOperands()

calc();

function getOperator() {
    let op;
        do {
            op = prompt (`Enter operator: ${actions.join(', ')}`, '+');
        } while (!actions.includes(op));
    return op
}

function getOperandsCount() {
   let opCount;
        do {
            opCount = prompt ('Enter the amount of operands', '1');
        } while (opCount <= 1 || opCount > 5 || isNaN(opCount));
    return opCount; 
}

function getOperands() {
    let operands = [];

        while (operands.length < operandsCount) {
            operands.push(prompt ('Enter number'));
        }

        for (i=0; i<operands.length; i++) {
            if (isNaN(operands[i])) {operands[i] = prompt('Failed 1 of numbers, rewrite it');
            }
        }

    return operands;
}

function calc() {
    let result;
        switch (operator) {
            case '+':
            result = add();
            break;

            case '-':
            result = sub();
            break;

            case '*':
            result = mult();
            break;

            case '/':
            result = div();
            break;

            default:
            result = "Error";
        }
    alert(result);
}

function add() {
    let add=0;
    for (i=0; i<operands.length; i++) {
    add += Number(operands[i]);
    } 
return given() + `${add}`;
}

function sub() {
    let sub = operands[0];
    for (i=1; i<operands.length; i++) {
    sub -= operands[i];
    } 
return given() + `${sub}`;
}

function mult() {
    let mult = operands[0];
    for (i=1; i<operands.length; i++) {
    mult *= operands[i];
    } 
return given() + `${mult}`;
}

function div() {
    let div = operands[0] ;
    for (i=1; i<operands.length; i++) {
    div /= operands[i];
    } 
return given() + `${div}`;
}

function given() {
    return `${operands.join(` ${operator} `)} = `;
}