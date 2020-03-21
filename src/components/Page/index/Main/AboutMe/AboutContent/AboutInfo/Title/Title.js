/*====   import Sctipt    ====*/
     import React from "react";
    import PerpleBig from "../../../../../../../items/Title/PerpleBig/PerpleBig";
/*====   import Sctipt    ====*/

/*====   import Style   ====*/
import '../../../../../../../../css/Page/index/Main/AboutMe/AboutContent/AboutInfo/Title/Title.css'
/*====   import Style   ====*/

export default class Title extends React.Component{
    render() {
        let result =
            (
                <PerpleBig tagName='h3' style={{marginBottom : '30px'}}>
                    محمد رضا شمس
                </PerpleBig>
            );
        return result;
    }
}