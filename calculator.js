// Retrieve command-line arguments
const args = process.argv.slice(2);

// Ensure we have exactly 3 arguments: num1, operator, num2
if (args.length !== 3) {
  console.log("Usage: node calculator.js <num1> <operator> <num2>");
  process.exit(1);
}

// Parse the input arguments
const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);

// Check if the input numbers are valid
if (isNaN(num1) || isNaN(num2)) {
  console.log("Error: Please provide valid numbers.");
  process.exit(1);
}

// Perform the appropriate arithmetic operation based on the operator
let result;

switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    if (num2 === 0) {
      console.log("Error: Division by zero is not allowed.");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.log("Error: Invalid operator. Use one of (+, -, *, /).");
    process.exit(1);
}

// Output the result
console.log(`The result of ${num1} ${operator} ${num2} is ${result}.`);
