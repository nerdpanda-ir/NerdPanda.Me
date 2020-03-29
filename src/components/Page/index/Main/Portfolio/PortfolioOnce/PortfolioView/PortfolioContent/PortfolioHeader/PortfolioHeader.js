/*====   import Sctipt    ====*/
    import React from "react";
    import GraySmall from "../../../../../../../../items/Title/GraySmall/GraySmall";
    import PortfolioStars from "./PortfolioStars/PortfolioStars";
    import {GlobalContextConsumer} from "../../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

export default class PortfolioHeader extends React.Component {

    render() {
        let element =
            (
                <React.Fragment>
                        <header>
                            <GlobalContextConsumer>
                                {
                                    value =><GraySmall tagName='h5' className='col-6 disIB'> {value.title} </GraySmall>
                                }
                            </GlobalContextConsumer>
                            <PortfolioStars />
                        </header>
                </React.Fragment>
            );
        return element
    }
}