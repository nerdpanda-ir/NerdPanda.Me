/*====   import Sctipt    ====*/
    import React from 'react';
    import PerpleBig from "../../../../../../items/Title/PerpleBig/PerpleBig";
/*====   import Sctipt    ====*/

/*====   import Style   ====*/
    import '../../../../../../../css/Page/index/Header/Speciality/Info/InfoTitle/InfoTitle.css'
/*====   import Style   ====*/
export default class InfoTitle extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <PerpleBig tagName='h1'>فول استک  وب دولوپر</PerpleBig>
                </React.Fragment>
            );
        return result;
    }
}