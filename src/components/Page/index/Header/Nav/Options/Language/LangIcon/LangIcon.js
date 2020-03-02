/*====   import Sctipt    ====*/
    import React from "react";
    import {LangInfoConsumer} from "../../LangInfoContext/LangInfo";
/*====   import Sctipt    ====*/

export default class LangIcon extends React.Component
{
    render()
    {
        let result =
            (
                <React.Fragment>
                    <LangInfoConsumer>
                        {(value)=><img src={value.img} alt={value.alt} className='br3'/>}
                    </LangInfoConsumer>
                </React.Fragment>
            );
        return result;
    }
}