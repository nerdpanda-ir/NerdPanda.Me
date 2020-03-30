/*====   import Sctipt    ====*/
    import React from "react";
import GraySmall from "../../../../../../../items/Title/GraySmall/GraySmall";
/*====   import Sctipt    ====*/
export default class PostContentHeader extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <header className='disIB col-12'>
                        <GraySmall tagName='h3'>پست اول </GraySmall>
                    </header>
                </React.Fragment>
            );
        return result ;
    }
}