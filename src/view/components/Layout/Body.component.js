const Body = ({ children}) => {
    return (
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                { children }
            </div>
            <div className="col-sm-2"></div>
        </div>
    );
};

export default Body;
