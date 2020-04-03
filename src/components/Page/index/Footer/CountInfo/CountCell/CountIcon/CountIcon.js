/*====   import Sctipt    ====*/
    import React from 'react';
    import {GlobalContextConsumer} from "../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../css/Page/index/Footer/CountInfo/CountCell/CountIcon/CountIcon.css'
/*====   import Style    ====*/
export default class CountIcon extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                        <GlobalContextConsumer>
                            {
                                value =><i className={value.icon+" color-secound"}></i>
                            }
                        </GlobalContextConsumer>

                </React.Fragment>
            );
        return result;
    }
}