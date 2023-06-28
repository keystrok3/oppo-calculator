import { useEffect, useState } from 'react';
import './App.css'
import History from './components/History';
import Keypad from './components/Keypad';
import { evaluate } from './utils/evaluate';
import { isValid } from './utils/isExpressionValid';

const App = () => {

  const [ expression, setExpression ] = useState([]);
  const [ result, setResult ] = useState(null);
  const [ showHistory, setShowHistory ] = useState(false);




  /**
   * Change display to show calculation history
  */
  const handleShowHistory = () => {
    setShowHistory(!showHistory);
  };




  /**
   * Update the value of `expression`
  */
  const handleChangeExpression = (term) => {
    if(term === "C") {
      setExpression([]);
      setResult("");
      return;
    }

    if(term === "Bcksp") {
      let exprArray = [ ...expression ];

      exprArray.pop(term);
      setExpression(exprArray);
      return;
    }

    if(expression.length === 1 && expression[0] == "0") {
      if(term !== ".") {
        setExpression([term]);
        return;
      }
    }

    let exprArray = [ ...expression ];

    exprArray.push(term);
    setExpression(exprArray);
  };




  /**
   * Runs every time `expression` changes, and tries to evaluate 
   * the expression if it's valid
  */
  useEffect(() => {
    if(isValid(expression)) {
      setResult("");
      return;
    }

    let thisresult = evaluate(expression);
    setResult(thisresult);
    
  }, [expression]);

  return (
    <div className='App'>
      <div className='work-space'>
        <div className='top-section'>{expression}</div>
        <div className='bottom-section'>{result}</div>
        <button style={{
          display: showHistory ? 'none' : 'block',
          width: '30%',
          backgroundColor: '#858585',
          margin: '0 auto',
          border: '1px solid #9e9e9e',
          cursor: 'pointer'
          }}

          onClick={handleShowHistory}
        >
        </button>
      </div>

      
      <Keypad 
        onChangeExpression={handleChangeExpression} 
        show={showHistory}
      />

      <History 
        onShowHistory={handleShowHistory}
        show={showHistory}
      />
    </div>
  )
};

export default App
