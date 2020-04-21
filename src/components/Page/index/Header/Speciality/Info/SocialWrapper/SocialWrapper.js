/*====   import Sctipt    ====*/
    import React from 'react';
    import SocialLable from "./SocialLable/SocialLable";
    import ClearBoth from "../../../../../../items/ClearBoth/ClearBoth";
    import SocialContainer from "./SocialContainer/SocialContainer";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../css/Page/index/Header/Speciality/SocialWrapper/SocialWrapper.css';
/*====   import Style    ====*/

export default class SocialWrapper extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='socialRow'>
                        <SocialLable />
                        <SocialContainer />
                        <ClearBoth/>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}