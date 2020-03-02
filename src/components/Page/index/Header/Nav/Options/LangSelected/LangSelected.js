/*====   import Sctipt    ====*/
    import React from "react";
    import LangRow from "../Language/LangRow/LangRow";
    import Arrow from "../Language/Arrow/Arrow";
/*====   import Sctipt    ====*/


export default class LangSelected extends React.Component{
    render() {
        let result = (
            <React.Fragment>
                <section id='LangSelect' className='h100'>
                        <LangRow />
                        <Arrow />
                </section>
            </React.Fragment>
        );
        return result;
    }

}