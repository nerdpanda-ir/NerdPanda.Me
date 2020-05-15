/*====   import Sctipt    ====*/
    import React from "react";
    import {GlobalContextConsumer} from "../../../../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/
export default class ArticleDataItem extends React.Component{
    render() {
        let result =
            (
                    <li>
                        <GlobalContextConsumer>
                            {
                                value =>  <React.Fragment><i className={value.icon}></i> <span className='iconLable'>{value.value}</span></React.Fragment>
                            }
                        </GlobalContextConsumer>
                    </li>
            );
        return result;
    }
}