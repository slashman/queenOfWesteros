const ActionsSummary = ({actions, doEnd}) => {
    const ok = (event) => {
        event.preventDefault();
        doEnd()
    };

    return (
        <div>
            <h1>ACTIONS SUMMARY</h1>
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
