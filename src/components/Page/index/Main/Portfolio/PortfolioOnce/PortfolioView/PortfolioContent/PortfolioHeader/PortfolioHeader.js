/*====   import Sctipt    ====*/
    import React from "react";
    import GraySmall from "../../../../../../../../items/Title/GraySmall/GraySmall";
    import PortfolioStars from "./PortfolioStars/PortfolioStars";
/*====   import Sctipt    ====*/

export default class PortfolioHeader extends React.Component {

    render() {
        let element =
            (
                <React.Fragment>
                        <header>
                            <GraySmall tagName='h5' className='col-6 disIB'> اپلیکیشن شماره ۱ </GraySmall>
                            <PortfolioStars />
                        </header>
                </React.Fragment>
            );
        return element
    }
}