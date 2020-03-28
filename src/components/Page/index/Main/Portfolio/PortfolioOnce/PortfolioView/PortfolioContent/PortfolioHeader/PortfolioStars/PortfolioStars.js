/*====   import Sctipt    ====*/
    import React from "react";
    import PortfolioStrokeStar from "./PortfolioStrokeStar/PortfolioStrokeStar";
    import PortfolioFillStar from "./PortfolioFillStar/PortfolioFillStar";
/*====   import Sctipt    ====*/

export default class PortfolioStars extends React.Component {

    render() {
        let element =
            (
                <React.Fragment>
                    <ul className='starWrapper col-6 disIB textLeft dirL'>
                        <PortfolioFillStar/>
                        <PortfolioFillStar/>
                        <PortfolioFillStar/>
                        <PortfolioFillStar/>
                        <PortfolioStrokeStar/>
                    </ul>
                </React.Fragment>
            );
        return element
    }
}