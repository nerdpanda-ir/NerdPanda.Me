/*====   import Sctipt    ====*/
    import React from 'react';
    import GraySmall from "../../../../../../items/Title/GraySmall/GraySmall";
/*====   import Sctipt    ====*/
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