/*====   import Sctipt    ====*/
    import React from 'react';
    import GrayBig from "../../../../items/Title/GrayBig/GrayBig";
    import Container from "../../../../Container/Container";
    import PortfolioOnce from "./PortfolioOnce/PortfolioOnce";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../css/Page/index/Main/Portfolio/Portfolio.css'
/*====   import Style    ====*/





export default class Portfolio extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='Portfolio'>
                        <GrayBig tagName='h2'> نمونه کار ها  </GrayBig>
                        <Container>
                            <ul id='portfolioWrapper'>
                                <PortfolioOnce />
                                <PortfolioOnce />
                                <PortfolioOnce />
                                <PortfolioOnce />
                            </ul>
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}