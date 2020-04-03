/*====   import Sctipt    ====*/
    import React from "react";
    import SocialIcon from "./SocialIcon/SocialIcon";
    import {GlobalContextConsumer} from "../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

/*====   import Style   ====*/
    import '../../../../../../../css/Page/index/Footer/Team/TeamSocials/SocialItem/SocialItem.css'
/*====   import Style   ====*/

export default class SocialItem extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <li className='disIB'>
                        <GlobalContextConsumer>
                            {
                                value=><a href={value.link} className='color-main disIB h100 col-12 br100 textCenter boxSBB bg-white-dark2'><SocialIcon /></a>
                            }
                        </GlobalContextConsumer>
                    </li>
                </React.Fragment>
            );
        return result;
    }
}