

/**
 * Evaluates Mathematical Expression Passed as argument in array form
*/
export const evaluate = (expression) => {
    
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] === "%") {
            expression[i-1] = parseFloat(expression[i-1])/100;
            expression.splice(i,1);
        }
    }

    try {
        let result = eval(expression.join(""))
        return result;
    } catch (error) {
        // console.log(error)
        // pass
    }
};