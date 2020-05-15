/*====   import Sctipt    ====*/
    import React from 'react';
    import {GlobalContextConsumer} from "../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/
/*====   import Style    ====*/
    import '../../../../../../../../css/Page/index/Header/Nav/menu/List/icon/icon.css'
/*====   import Style    ====*/
export default class ListIcon extends React.Component
{
    render()
    {
        let result = 
        (
            <React.Fragment>
                <GlobalContextConsumer>
                    {(value)=><i className={"menuIcon "+value.icon}></i>}
                </GlobalContextConsumer>
            </React.Fragment>
        )
        return result;
    }
}