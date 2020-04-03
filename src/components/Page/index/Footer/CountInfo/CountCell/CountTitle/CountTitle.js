/*====   import Sctipt    ====*/
    import React from 'react';
    import GraySmall from "../../../../../../items/Title/GraySmall/GraySmall";
/*====   import Sctipt    ====*/
/*====   import Style    ====*/
    import '../../../../../../../css/Page/index/Footer/CountInfo/CountCell/CountTitle/CountTitle.css'
/*====   import Style    ====*/

export default class CountTitle extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                        <GraySmall className='countTitle disB' tagName='strong'>مشتریان راضی </GraySmall>
                </React.Fragment>
            );
        return result;
    }
}