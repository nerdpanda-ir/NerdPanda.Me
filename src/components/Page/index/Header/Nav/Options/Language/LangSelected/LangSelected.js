/*====   import Sctipt    ====*/
    import React from "react";
    import LangRow from "../LangRow/LangRow";
    import Arrow from "../Arrow/Arrow";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../../css/Page/index/Header/Nav/Options/Language/LangSelect/LangSelect.css';
/*====   import Style    ====*/


export default class LangSelected extends React.Component{
    render() {
        let result = (
            <React.Fragment>
                <section id='LangSelect' className='h100 textCenter boxSBB'>
                        <LangRow />
                        <Arrow />
                </section>
            </React.Fragment>
        );
        return result;
    }

}