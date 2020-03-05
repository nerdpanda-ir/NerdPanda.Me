/*====   import Sctipt    ====*/
    import React from "react";
    import LangSelected from "./LangSelected/LangSelected";
    import LangList from "./Langlist/LangList";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../css/Page/index/Header/Nav/Options/Language/Language.css';
/*====   import Style    ====*/



export default class Language extends React.Component
{
    render() {
        let result =
            (
                <React.Fragment>
                    <div id='language' className='col-11 br3 boxSBB dirR sh2 posRel'>
                            <LangSelected />
                            <LangList />
                    </div>
                </React.Fragment>
            );
        return result;
    }
}