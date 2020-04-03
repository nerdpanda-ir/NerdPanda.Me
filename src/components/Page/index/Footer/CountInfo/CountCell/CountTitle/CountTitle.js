/*====   import Sctipt    ====*/
    import React from 'react';
    import GraySmall from "../../../../../../items/Title/GraySmall/GraySmall";
    import {GlobalContextConsumer} from "../../../../../../GlobalContext/GlobalContext";

/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../css/Page/index/Footer/CountInfo/CountCell/CountTitle/CountTitle.css'
/*====   import Style    ====*/

export default class CountTitle extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                        <GraySmall className='countTitle disB' tagName='strong'>
                            <GlobalContextConsumer>
                                {value=> value.title}
                            </GlobalContextConsumer>
                        </GraySmall>
                </React.Fragment>
            );
        return result;
    }
}