/*====   import Sctipt    ====*/
    import React from "react";
    import {LangInfoProvider} from "../LangInfoContext/LangInfo";
    import LangSelected from "../LangSelected/LangSelected";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../css/Page/index/Header/Nav/Options/Language/Language.css';
/*====   import Style    ====*/

/*====   import Files    ====*/
    import persian from '../../../../../../../img/global/Lang/iran.svg';
    import english from '../../../../../../../img/global/Lang/uk.svg';
    import arab from '../../../../../../../img/global/Lang/ar.svg';
/*====   import Files    ====*/

export default class Language extends React.Component
{
    render() {
        let result =
            (
                <React.Fragment>
                    <div id='language' className='col-11 br3 boxSBB dirR sh2'>
                        <LangInfoProvider value={{img : persian , alt : 'persian-lang' , name : 'فارسی'}}>
                            <LangSelected />
                        </LangInfoProvider>
                    </div>
                </React.Fragment>
            );
        return result;
    }
}