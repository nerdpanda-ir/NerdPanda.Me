/*====   import Sctipt    ====*/
    import React from 'react';
    import Text from "../../../../../../items/Text/Text";
/*====   import Sctipt    ====*/

/*====   import Style   ====*/
    import '../../../../../../../css/Page/index/Header/Speciality/Info/InfoTitle/InfoTitle.css'
/*====   import Style   ====*/
export default class InfoTitle extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <Text tagName='h1' className='color-secound'>فول استک دولوپر</Text>
                </React.Fragment>
            );
        return result;
    }
}