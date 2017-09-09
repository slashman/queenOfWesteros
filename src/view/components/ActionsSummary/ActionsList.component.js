import Action from './Action.component.js';

const ActionsList = ({
    actions = []
}) => {
    return (
        <ul className="list-unstyled">
            {actions.map((action, index) =>
                <Action action={action} key={index} />
            )}
        </ul>
    );
};

export default ActionsList;
