/*====   import Sctipt    ====*/
    import React from "react";
    import LangIcon from "../LangIcon/LangIcon";
    import LangName from "../LangName/LangName";
/*====   import Sctipt    ====*/

export  default  class LangRow extends React.Component{
    render()
    {
        let result =
            (
                <React.Fragment>
                    <LangIcon />
                    <LangName />
                </React.Fragment>
            );
        return result;
    }
}