/*====   import Sctipt    ====*/
    import React from 'react';
    import {GlobalContextConsumer} from "../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/
export default class SocialIcon extends React.Component{
    render() {
        let result =
            (
                <GlobalContextConsumer>
                    {
                        value=><i className={value.icon}></i>
                    }
                </GlobalContextConsumer>
            );
        return result;
    }
}
