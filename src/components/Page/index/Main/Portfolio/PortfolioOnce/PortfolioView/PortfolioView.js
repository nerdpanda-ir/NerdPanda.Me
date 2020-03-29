/*====   import Sctipt    ====*/
    import React from "react";
    import PortfolioContent from "./PortfolioContent/PortfolioContent";
    import {GlobalContextConsumer} from "../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/



export default class PortfolioView extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <figure className='portfolioView br3 h100 col-11 posRel'>
                        <GlobalContextConsumer>
                            {
                                value=><img src={value.img} alt={value.alt} className='col-12 br3 h100 sh3'/>
                            }
                        </GlobalContextConsumer>
                        <PortfolioContent />
                    </figure>
                </React.Fragment>
            );
        return result;
    }
}