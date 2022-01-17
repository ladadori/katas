export default (reversePolishExpression) => {

    const stack = [];
    let alert = false;
  
    const calculate = (leftOperand, operator, rightOperand) => {
      switch (operator) {
        case '/':
          if (leftOperand === 0 || rightOperand === 0) {
            alert = true;
          }
          return leftOperand / rightOperand;
        case '+':
          return leftOperand + rightOperand;
        case '*':
          return leftOperand * rightOperand;
        default:
      }
      return leftOperand - rightOperand;
    };
  
    for (const item of reversePolishExpression) {
  
      
      if (typeof item === 'number') {
        stack.push(item);
      } else {
        const rightOperand = stack.pop();
        const leftOperand = stack.pop();
        stack.push(calculate(leftOperand, item, rightOperand));
    }
    }
    if (alert === true) {
      return null;
    }
    return stack[0];
  };