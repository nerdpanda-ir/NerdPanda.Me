/*====   import Sctipt    ====*/
    import React from "react";
/*====   import Sctipt    ====*/
/*====   import Style    ====*/
    import '../../../../../../../../css/Page/index/Header/Nav/Options/Language/LangArrow/LangArrow.css'
/*====   import Style    ====*/
export default class Arrow extends React.Component
{
    render() {
        let result =
            (
                <React.Fragment>
                    <i className="fal fa-sort-down col-1" id='lagnArrow'></i>
                </React.Fragment>
            );
        return result;
    }
}