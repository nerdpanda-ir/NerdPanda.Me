/*====   import Sctipt    ====*/
    import React from "react";
    import {GlobalContextConsumer} from "../../../../../../../../GlobalContext/GlobalContext";
    import FavoritsItemContent from "./FavoritsItemContent/FavoritsItemContent";
/*====   import Sctipt    ====*/
export default class FavoritsItem extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <GlobalContextConsumer>
                        {
                            value=> <li  className="hint--bottom hint--perple hint--medium" aria-label={value.description}><FavoritsItemContent /></li>
                        }
                    </GlobalContextConsumer>

                </React.Fragment>
            );
        return result;
    }

}