import Scroll from './Scroll.component.js';

const ScrollsList = ({ scrolls = [] }) => {
    return (
        <div className="row">
            <div className="col-12">
                <ul className="list-unstyled">
                    {scrolls.map((scroll, index) =>
                        <li className="scroll" key={index}>
                            <Scroll scroll={scroll}  />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ScrollsList;
