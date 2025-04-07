export function calculate(firstOperand, secondOperand, operator) {
    // Convert string inputs to numbers if needed
    const first = typeof firstOperand === 'string' ? parseFloat(firstOperand) : firstOperand;
    const second = typeof secondOperand === 'string' ? parseFloat(secondOperand) : secondOperand;
    
    // Handle operations
    switch (operator) {
      case '+':
        return first + second;
      case '-':
        return first - second;
      case '×':
      case '*':
        return first * second;
      case '÷':
      case '/':
        // Handle division by zero
        if (second === 0) {
          return 'Error: Division by zero';
        }
        return first / second;
      default:
        return 'Error: Invalid operator';
    }
  }