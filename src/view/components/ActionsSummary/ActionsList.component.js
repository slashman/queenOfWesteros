import Action from './Action.component.js';

const ActionsList = ({ actions = [] }) => {
    return (
        <div className="row">
            <div className="col-12">
                <ul className="list-unstyled">
                    {actions.map((action, index) =>
                        <Action action={action} key={index} />
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ActionsList;
