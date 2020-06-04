/*====   import Sctipt    ====*/
    import React from "react";
    import Header from './Header/Header';
    import Main from "./Main/Main";
    import Footer from "./Footer/Footer";
    import FixNav from "../../../plugins/FixNav/FixNav";
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
    componentDidMount()
    {
        this.fixMenu = new FixNav({elementSelector: "#topNav" , fixAnimation: 'animate__fadeInDown' , unfixAnimation: 'animate__bounce' , unfixZeroScroll : false});
        window.addEventListener('scroll',this.scrollEventHandler);
    }
    scrollEventHandler=()=>
    {
        this.fixMenu.checkFix();
    }

}