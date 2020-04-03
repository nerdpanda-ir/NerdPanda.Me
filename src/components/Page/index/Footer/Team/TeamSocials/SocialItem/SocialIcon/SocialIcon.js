/*====   import Sctipt    ====*/
    import React from 'react';
    import {GlobalContextConsumer} from "../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../../css/Page/index/Footer/Team/TeamSocials/SocialItem/SocialIcon/SocialIcon.css'
/*====   import Style    ====*/
export default class SocialIcon extends React.Component{
    render() {
        let result =
            (
                <GlobalContextConsumer>
                    {
                        value=><i className={value.icon}></i>
                    }
                </GlobalContextConsumer>
            );
        return result;
    }
}
