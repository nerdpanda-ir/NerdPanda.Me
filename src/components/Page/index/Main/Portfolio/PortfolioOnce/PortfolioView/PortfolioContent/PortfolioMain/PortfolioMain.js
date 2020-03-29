/*====   import Sctipt    ====*/
    import React from "react";
    import PortfolioLike from "./PortfolioLike/PortfolioLike";
/*====   import Sctipt    ====*/
export default class PortfolioMain extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='PortfolioMain textCenter'>
                        <PortfolioLike />
                    </section>
                </React.Fragment>
            );
        return result;
    }
}