/*====   import Sctipt    ====*/
    import React from "react";
    import {GlobalContextConsumer} from "../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../../css/Page/index/Header/Nav/Options/Language/LangIcon/LangIcon.css'
/*====   import Style    ====*/

export default class LangIcon extends React.Component
{
    render()
    {
        let result =
            (
                <React.Fragment>
                    <GlobalContextConsumer>
                        {(value)=><img src={value.img} alt={value.alt} className='br3 col-3 langIcon'/>}
                    </GlobalContextConsumer>
                </React.Fragment>
            );
        return result;
    }
}