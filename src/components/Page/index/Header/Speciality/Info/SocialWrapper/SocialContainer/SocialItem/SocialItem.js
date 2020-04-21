/*====   import Sctipt    ====*/
    import React from "react";
    import SocialItemContent from "./SocialItemContent/SocialItemContent";
/*====   import Sctipt    ====*/
export default class  SocialItem extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <li>
                        <SocialItemContent />
                    </li>
                </React.Fragment>
            );
        return result;
    }
}