/*====   import Sctipt    ====*/
    import React from 'react';
    import Text from "../../../../../../items/Text/Text";
/*====   import Sctipt    ====*/
export default class SocialWrapper extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='socialRow'>
                        <Text className='bg-dark-perple color-white br3' tagName='span' id='contactMeBtn'>
                            تماس با من
                            <i className="fal fa-long-arrow-alt-left"></i>
                        </Text>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}