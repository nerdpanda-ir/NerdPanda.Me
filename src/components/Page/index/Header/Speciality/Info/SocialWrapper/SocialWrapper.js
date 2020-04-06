/*====   import Sctipt    ====*/
    import React from 'react';
    import Text from "../../../../../../items/Text/Text";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../css/Page/index/Header/Speciality/SocialWrapper/SocialWrapper.css';
import ClearBoth from "../../../../../../items/ClearBoth/ClearBoth";
/*====   import Style    ====*/

export default class SocialWrapper extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='socialRow'>
                        <Text className='flR bg-perple-dark color-white disIB boxSBB col-3 posRel sh4 btn' tagName='span' id='contactMeBtn'>
                            تماس با من
                            <i className="fal fa-long-arrow-alt-left"></i>
                        </Text>
                        <ul className='flR col-9 h100 boxSBB dirL' id='SpecialSocialNetworkWrapper'>
                            <li><a href='https://twitter.com/' className='btn' ><i className="fab fa-twitter"></i></a></li>
                            <li><a href='https://www.linkedin.com/' className='btn' ><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href='https://telegram.org/' className='btn' ><i className="fab fa-telegram-plane"></i></a></li>
                            <li><a href='http://instagram.com/' className='btn' ><i className="fab fa-instagram"></i></a></li>
                            <li><a href='https://steamcommunity.com/id/itonegamer' className='btn'><i className="fab fa-steam-symbol"></i></a></li>
                        </ul>
                        <ClearBoth/>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}