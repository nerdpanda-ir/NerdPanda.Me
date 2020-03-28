/*====   import Sctipt    ====*/
    import React from "react";
/*====   import Sctipt    ====*/
export default class PortfolioFooterLinks extends React.Component {
    render() {
        let result =
            (
                <React.Fragment>
                    <ul className='linkWrapper  col-6 disIB textLeft'>
                        <li>
                            <i className="fal fa-link"></i>
                        </li>
                        <li>
                            <i className="fal fa-eye"></i>
                        </li>
                    </ul>
                </React.Fragment>
            );
        return result;
    }
}