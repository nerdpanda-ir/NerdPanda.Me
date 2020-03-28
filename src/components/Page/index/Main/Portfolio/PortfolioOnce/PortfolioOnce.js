/*====   import Sctipt    ====*/
    import React from "react";
    import PortfolioView from "./PortfolioView/PortfolioView";
/*====   import Sctipt    ====*/

export default class PortfolioOnce extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <li className='col-6  br3 disIB '>
                        <PortfolioView />
                    </li>
                </React.Fragment>
            );
        return result;
    }
}