const ActionsSummary = ({actions}) => {
    let something;
    return (
        <div class="actions-container">
            {actions.map((action, index) =>
                <div class="action" key={index}>
                    <p>{action}</p>
                </div>
            )}
        </div>
    );
};
export default ActionsSummary;
