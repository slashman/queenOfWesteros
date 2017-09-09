const Action = ({ action }) => {
    return (
        <li className="action">
            <blockquote className="blockquote">
                <p>{action}</p>
            </blockquote>
        </li>
    );
};

export default Action;
