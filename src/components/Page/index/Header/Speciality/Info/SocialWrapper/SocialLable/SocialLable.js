/*====   import Sctipt    ====*/
    import React from 'react';
    import Text from "../../../../../../../items/Text/Text";
/*====   import Sctipt    ====*/
export default class SocialLable extends React.Component
{
    render() {
        let result =
            (
                <React.Fragment>
                    <Text className='flR bg-perple-dark color-white disIB boxSBB col-3 posRel sh4 btn' tagName='span' id='contactMeBtn'>
                        تماس با من
                        <i className="fal fa-long-arrow-alt-left"></i>
                    </Text>
                </React.Fragment>
            );
        return result;
    }
}