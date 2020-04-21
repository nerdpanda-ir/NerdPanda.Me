/*====   import Sctipt    ====*/
    import React from "react";
    import {GlobalContextConsumer} from "../../../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/
export default class FavoritsItemContent extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <GlobalContextConsumer >
                        {
                            value=> ((!value.hasOwnProperty('href')) ? <i className={value.icon}></i>:<a href={value.href}><i className={value.icon}></i></a>)
                        }
                    </GlobalContextConsumer>
                </React.Fragment>
            );
        return result;
    }
}