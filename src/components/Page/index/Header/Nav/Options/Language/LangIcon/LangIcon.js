/*====   import Sctipt    ====*/
    import React from "react";
    import {GlobalContextConsumer} from "../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

export default class LangIcon extends React.Component
{
    render()
    {
        let result =
            (
                <React.Fragment>
                    <GlobalContextConsumer>
                        {(value)=><img src={value.img} alt={value.alt} className='br3 col-3'/>}
                    </GlobalContextConsumer>
                </React.Fragment>
            );
        return result;
    }
}