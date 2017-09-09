import ActionsList from './ActionsList.component.js';

const ActionsSummary = ({
    doEnd = () => {},
    actions = ["No scrolls arrived today"]
}) => {
    return (
        <div className="actions-summary container">
            <ActionsList actions={actions} />
            <div className="row actions">
                <button className="btn btn-block btn-action btn-danger"
                        onClick={doEnd}>OK
                </button>
            </div>
        </div>
    );
};
export default ActionsSummary;
