/*====   import Sctipt    ====*/
import React from "react";
/*====   import Sctipt    ====*/
export default class PortfolioFooterTechs extends React.Component {
    render() {
        let result =
            (
                <React.Fragment>
                    <ul className='techWrapper col-6 disIB textRight'>
                        <li>
                            <i className="fab fa-html5"></i>
                        </li>
                        <li>
                            <i className="fab fa-js-square"></i>
                        </li>
                        <li>
                            <i className="fab fa-react"></i>
                        </li>
                    </ul>
                </React.Fragment>
            );
        return result;
    }
}