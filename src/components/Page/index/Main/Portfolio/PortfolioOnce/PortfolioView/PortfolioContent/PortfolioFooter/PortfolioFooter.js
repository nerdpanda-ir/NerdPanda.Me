/*====   import Sctipt    ====*/
    import React from "react";
    import PortfolioFooterLinks from "./PortfolioFooterLinks/PortfolioFooterLinks";
    import PortfolioFooterTechs from "./PortfolioFooterTechs/PortfolioFooterTechs";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../../../css/Page/index/Main/Portfolio/PortfolioOnce/PortfolioView/PortfolioContent/PortfolioFooter/PortfolioFooter.css'
/*====   import Style    ====*/

export default class PortfolioFooter extends React.Component {

    render() {
        let element =
            (
                <React.Fragment>
                    <footer className='posAb col-11 dirL'>
                        <PortfolioFooterLinks />
                        <PortfolioFooterTechs />
                    </footer>
                </React.Fragment>
            );
        return element
    }
}