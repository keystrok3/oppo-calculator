
import Button from './Button';
import './Keypad.css';

// eslint-disable-next-line react/prop-types
const Keypad = ({ onChangeExpression, show }) => {

    return (
        <div className="keypad" style={{ display: show ? 'none' : 'grid' }}>
            <div><Button onButton={onChangeExpression} buttonValue={'C'} /> </div>
            <div><Button onButton={onChangeExpression} buttonValue={'%'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'Bcksp'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'/'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'7'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'8'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'9'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'*'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'4'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'5'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'6'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'-'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'1'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'2'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'3'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'+'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'00'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'0'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'.'} /></div>
            <div><Button onButton={onChangeExpression} buttonValue={'='} /></div>
        </div>
    )
};


export default Keypad;