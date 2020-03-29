/*====   import Sctipt    ====*/
    import React from "react";
    import PortfolioLike from "./PortfolioLike/PortfolioLike";
/*====   import Sctipt    ====*/

/*====   import Style   ====*/
    import '../../../../../../../../../css/Page/index/Main/Portfolio/PortfolioOnce/PortfolioView/PortfolioContent/PortfolioMain/PortfolioMain.css'
/*====   import Style   ====*/
export default class PortfolioMain extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='PortfolioMain textCenter posAb boxSBB col-12'>
                        <PortfolioLike />
                    </section>
                </React.Fragment>
            );
        return result;
    }
}