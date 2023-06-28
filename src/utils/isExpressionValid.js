
const operands = [ "+", "-", "/", "*", "%"]

/**
 * Returns true if expression cannot be evaluated by eval
 * @param expression - Mathematical expression
*/
export const isValid = (expression) => {
    let hasOperand = false;
    let lastTerm = expression[expression.length - 1]
    for(let term of expression){
        if(operands.some(op => term === op)) {
            hasOperand = true;
            break;
        }
    }
    return (isNaN(lastTerm) && lastTerm !== "%")  || hasOperand === false || (expression.length === 1);
}
