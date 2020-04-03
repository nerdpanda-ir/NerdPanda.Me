/*====   import Sctipt    ====*/
    import React from "react";
    import Header from './Header/Header';
    import Main from "./Main/Main";
    import Footer from "./Footer/Footer";
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
                    <Main/>
                    <Footer />
                </React.Fragment>
            );
        return element
    }
}