/*====   import Sctipt    ====*/
    import React from "react";
    import PortfolioContent from "./PortfolioContent/PortfolioContent";
 /*====   import Sctipt    ====*/

/*====   import Sctipt    ====*/
    import port1 from '../../../../../../../img/page/index/Portfolio/port1.jpg'
/*====   import Sctipt    ====*/

export default class PortfolioView extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <figure className='portfolioView br3 h100 col-11 posRel'>
                        <img src={port1} alt="portfolio" className='col-12 br3 h100 sh3'/>
                        <PortfolioContent />
                    </figure>
                </React.Fragment>
            );
        return result;
    }
}