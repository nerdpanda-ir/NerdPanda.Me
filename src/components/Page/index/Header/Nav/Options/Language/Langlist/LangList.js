/*====   import Sctipt    ====*/
    import React from "react";
    import List from "./List/List";
    import {GlobalContextProvider} from "../../../../../../../GlobalContext/GlobalContext";

/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../../css/Page/index/Header/Nav/Options/Language/LangList/LangList.css'
/*====   import Style    ====*/


/*====   import Files    ====*/
    import persian from '../../../../../../../../img/global/Lang/iran.svg';
    import english from '../../../../../../../../img/global/Lang/uk.svg';
    import arab from '../../../../../../../../img/global/Lang/ar.svg';
/*====   import Files    ====*/



export default class LangList extends React.Component
{
    render() {
        let result =
            (
                <React.Fragment>
                    <ul className='posAb col-12 bg-white sh2' id='LangList'>
                        <GlobalContextProvider value={{img : persian , alt : 'persian-lang' , name : 'فارسی'}}>
                            <List />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{img : english , alt : 'English-lang' , name : 'English'}}>
                            <List />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{img : arab , alt : 'Arab-lang' , name : 'عربی'}}>
                            <List />
                        </GlobalContextProvider>
                    </ul>
                </React.Fragment>
            );
        return result;
    }
}