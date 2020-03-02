/*====   import Sctipt    ====*/
    import React from "react";
    import {GlobalContextConsumer} from "../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../../css/Page/index/Header/Nav/Options/Language/LangName/LangName.css'
/*====   import Style    ====*/
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