const action = getAction();
const operandA = getOperand('A', 2);
const operandB = getOperand('B', 4);
const result = calc(action, operandA, operandB );

showResult(action, operandA, operandB, result);


function getAction() {
  return prompt('Enter +, -, *, /', '+');
}

function getOperand(name, defaultValue) {
  return Number(prompt(`Enter operand ${name}`, defaultValue));
}

function calc(action, operandA, operandB) {
  switch (action) {
    case '+': return add(operandA, operandB);
    case '-': return sub(operandA, operandB);
    case '*': return mul(operandA, operandB);
    case '/': return div(operandA, operandB);
 }
}

function showResult(action, operandA, operandB, res) {
  console.log(`${operandA} ${action} ${operandB} = ${res}`);
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}