/*====   import Sctipt    ====*/
    import React from "react";
    import {GlobalContextConsumer} from "../../../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/
export default class SocialItemContent extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <GlobalContextConsumer>
                        {
                            value=><a href={value.href} className='btn' ><i className={value.icon}></i></a>
                        }
                    </GlobalContextConsumer>
                </React.Fragment>
            );
        return result;
    }
}
