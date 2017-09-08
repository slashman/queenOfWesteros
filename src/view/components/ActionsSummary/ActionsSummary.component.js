const ActionsSummary = ({
    doEnd = () => {},
    actions = ["No scrolls arrived today"]
}) => {
    return (
        <div className="actions-summary container">
            <div className="row">
                <div className="col-12">
                    <ul className="list-unstyled">
                        {actions.map((action, index) =>
                            <li className="action" key={index}>
                                <blockquote className="blockquote">
                                    <p>{action}</p>
                                </blockquote>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="row actions">
                <button className="btn btn-block btn-action btn-danger"
                        onClick={doEnd}>OK
                </button>
            </div>
        </div>
    );
};
export default ActionsSummary;
