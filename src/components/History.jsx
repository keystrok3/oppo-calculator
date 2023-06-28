/* eslint-disable react/prop-types */


const History = ({ onShowHistory, show }) => {

    const handleContinue = (e) => {
        e.preventDefault();
        onShowHistory()
    }
    return (
        <div className="history-panel" style={{
            display: show ? 'flex' : 'none',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
        }}>
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />

            <div className="control" style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                padding: '.5em'
            }}>
                <button onClick={handleContinue}>Continue</button>
                <button>Clear</button>
            </div>
        </div>
    )
};


const HistoryItem = () => {
    return (
        <div className="history-item" style={{
            margin: '.5em'
        }}>
            <div className="expression-class">8*9</div>
            <div className="result-class" style={{ fontWeight: 'bold'}}>=72</div>
        </div>
    );
};

export default History; 