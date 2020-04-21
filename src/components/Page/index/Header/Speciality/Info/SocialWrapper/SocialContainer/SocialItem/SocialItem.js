/*====   import Sctipt    ====*/
    import React from "react";
    import {GlobalContextConsumer} from "../../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/
export default class  SocialItem extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <li>
                        <GlobalContextConsumer>
                        {
                            value=><a href={value.href} className='btn' ><i className={value.icon}></i></a>
                        }
                        </GlobalContextConsumer>
                    </li>
                </React.Fragment>
            );
        return result;
    }
}