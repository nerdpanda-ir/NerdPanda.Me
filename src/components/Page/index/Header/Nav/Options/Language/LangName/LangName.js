/*====   import Sctipt    ====*/
    import React from "react";
    import {LangInfoConsumer} from "../../LangInfoContext/LangInfo";
/*====   import Sctipt    ====*/

export default class LangName extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <LangInfoConsumer>
                        {(value)=> <span className='langName col-3'>{value.name}</span>}
                    </LangInfoConsumer>
                </React.Fragment>
            );
            return result;
    }
}