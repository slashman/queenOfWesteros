const ActionsSummary = ({actions, doEnd}) => {
    const ok = (event) => {
        event.preventDefault();
        doEnd()
    };

    return (
        <div>
            <h1>4th day, 25th moon, 346 AL</h1>
            <div className="actions-container">
                {actions.map((action, index) =>
                    <div className="action" key={index}>
                        <p>{action}</p>
                    </div>
                )}
            </div>
            <div className="buttons">
                <button onClick={ok}>OK</button>
            </div>
        </div>
    );
};
export default ActionsSummary;
