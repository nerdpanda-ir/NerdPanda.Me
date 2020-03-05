/*====   import Sctipt    ====*/
    import React from "react";
    import LangRow from "../LangRow/LangRow";
    import Arrow from "../Arrow/Arrow";
    import {GlobalContextProvider} from "../../../../../../../GlobalContext/GlobalContext";

/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../../css/Page/index/Header/Nav/Options/Language/LangSelect/LangSelect.css';
/*====   import Style    ====*/


/*====   import Style    ====*/
    import persian from "../../../../../../../../img/global/Lang/iran.svg";
/*====   import Style    ====*/



export default class LangSelected extends React.Component{
    render() {
        let result = (
            <React.Fragment>
                <section id='LangSelect' className='h100 textCenter boxSBB'>
                    <GlobalContextProvider value={{img : persian , alt : 'persian-lang' , name : 'فارسی'}}>
                        <LangRow />
                    </GlobalContextProvider>
                    <Arrow />
                </section>
            </React.Fragment>
        );
        return result;
    }

}