/*====   import Sctipt    ====*/
    import React from 'react';
    import {GlobalContextConsumer} from "../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

/*====   import Style   ====*/
    import '../../../../../../../css/Page/index/Footer/CountInfo/CountCell/CountNumber/CountNumber.css'
import GraySmall from "../../../../../../items/Title/GraySmall/GraySmall";
/*====   import Style   ====*/
export default class CountNumber extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                        <span className='countNumber color-secound'>
                           <GlobalContextConsumer>
                                {value => value.number}
                            </GlobalContextConsumer>
                        </span>
                </React.Fragment>
            );
        return result;
    }
}