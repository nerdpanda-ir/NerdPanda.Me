/*====   import Sctipt    ====*/
    import React from "react";
    import {GlobalContextConsumer} from "../../../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/
export default class PortfolioFooterLinks extends React.Component {
    render() {
        let result =
            (
                <React.Fragment>
                    <ul className='linkWrapper  col-6 disIB textLeft'>
                        <li>
                            <i className="fal fa-link"></i>
                        </li>
                        <li>
                            <GlobalContextConsumer>
                                {
                                    value=> <a href={window.location.href.substr(0,window.location.href.lastIndexOf('/'))+value.img} className='color-white'>  <i className="fal fa-eye"></i></a>
                                }
                            </GlobalContextConsumer>
                        </li>
                    </ul>
                </React.Fragment>
            );
        return result;
    }
}