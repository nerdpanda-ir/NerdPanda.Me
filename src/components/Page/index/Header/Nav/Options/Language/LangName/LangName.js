/*====   import Sctipt    ====*/
    import React from "react";
    import {GlobalContextConsumer} from "../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

export default class LangName extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <GlobalContextConsumer>
                        {(value)=> <span className='langName col-3'>{value.name}</span>}
                    </GlobalContextConsumer>
                </React.Fragment>
            );
            return result;
    }
}