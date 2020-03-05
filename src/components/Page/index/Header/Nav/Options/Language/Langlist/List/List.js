/*====   import Sctipt    ====*/
    import React from "react";
    import LangRow from "../../LangRow/LangRow";
/*====   import Sctipt    ====*/
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