


// eslint-disable-next-line react/prop-types
const Button = ({ buttonValue, onButton}) => {
    const handleClick = (e) => {
        e.preventDefault();

        if(buttonValue === "00") {
            buttonValue = "0"
        }
        onButton(buttonValue);
    };


    return <>
        <button 
            onClick={handleClick}
            style={{
                border: 'none',
                width: "100%",
                height: "100%",
                backgroundColor: 'inherit',
                cursor: 'pointer'
        }}>{ buttonValue }</button>
    </>
};

export default Button;