/*====   import Sctipt    ====*/
    import React from "react";
    import PortfolioHeader from "./PortfolioHeader/PortfolioHeader";
    import PortfolioMain from "./PortfolioMain/PortfolioMain";
    import PortfolioFooter from "./PortfolioFooter/PortfolioFooter";
/*====   import Sctipt    ====*/


/*====   import Style   ====*/
    import '../../../../../../../../css/Page/index/Main/Portfolio/PortfolioOnce/PortfolioView/PortfolioContent/PortfolioContent.css';
/*====   import Style   ====*/

export default class PortfolioContent extends React.Component {

    render() {
        let element =
            (
                <React.Fragment>
                    <figcaption className='portfolioContent boxSBB posAb color-white  col-11 br5 sh4 disN bg-perple-rgba8 dirR'>
                        <PortfolioHeader />
                        <PortfolioMain />
                        <PortfolioFooter />
                    </figcaption>
                </React.Fragment>
            );
        return element
    }
}