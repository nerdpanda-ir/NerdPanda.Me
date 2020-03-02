/*====   import Sctipt    ====*/
    import React from 'react';
    import {GlobalContextConsumer} from "../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/
export default class ListIcon extends React.Component
{
    render()
    {
        let result = 
        (
            <React.Fragment>
                <GlobalContextConsumer>
                    {(value)=><i className={"menuIcon "+value[1]}></i>}
                </GlobalContextConsumer>
            </React.Fragment>
        )
        return result;
    }
}