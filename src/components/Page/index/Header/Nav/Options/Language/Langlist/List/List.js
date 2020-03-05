/*====   import Sctipt    ====*/
    import React from "react";
    import LangRow from "../../LangRow/LangRow";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../../../css/Page/index/Header/Nav/Options/Language/LangList/List/List.css'
/*====   import Style    ====*/
export default class List extends React.Component {
    render() {
        let result =
            (
                <React.Fragment>
                    <li>
                        <LangRow />
                    </li>
                </React.Fragment>
            );
        return result;
    }
}