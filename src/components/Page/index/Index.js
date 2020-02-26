/*====   import Sctipt    ====*/
    import React from "react";
    import Header from './Header/Header'
/*====   import Sctipt    ====*/

/*====   import Styles    ====*/
    import '../../../css/Page/index/index.css'
/*====   import Styles    ====*/

export default class Index extends React.Component {
    render() {
        let element =
            (
                <React.Fragment>
                    <Header />
                </React.Fragment>
            );
        return element
    }
}