/*====   import Sctipt    ====*/
    import React from "react";
    import LangSelected from "./LangSelected/LangSelected";
    import LangList from "./Langlist/LangList";
    import DropDown from "../../../../../../../plugins/DropDown/DropDown";
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
                        <DropDown setting={{arrow: {id: 'lagnArrow'}, selected: {id: 'LangSelect' ,  imgClass: 'langIcon' , defaltSelect : 1 }, list: {id: 'LangList'}}}>
                            <LangSelected />
                            <LangList />
                        </DropDown>
                    </div>
                </React.Fragment>
            );
        return result;
    }
}