/*====   import Sctipt    ====*/
    import React from 'react';
    import TipCircleIcon from "../../../../../../../../items/TipCircleIcon/TipCircleIcon";
    import {GlobalContextConsumer} from "../../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/
export default class TipIcon extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <TipCircleIcon>
                        <GlobalContextConsumer>
                            {
                                value=><i className={value.icon}></i>
                            }
                        </GlobalContextConsumer>
                    </TipCircleIcon>
                </React.Fragment>
            );
        return result;
    }
}