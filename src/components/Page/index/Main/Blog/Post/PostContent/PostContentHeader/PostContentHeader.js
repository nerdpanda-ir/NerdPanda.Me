/*====   import Sctipt    ====*/
    import React from "react";
    import GraySmall from "../../../../../../../items/Title/GraySmall/GraySmall";
    import {GlobalContextConsumer} from "../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/
export default class PostContentHeader extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <header className='disIB col-12'>
                        <GraySmall tagName='h3'>
                            <GlobalContextConsumer>
                                {
                                    value => value.title
                                }
                            </GlobalContextConsumer>
                        </GraySmall>
                    </header>
                </React.Fragment>
            );
        return result ;
    }
}