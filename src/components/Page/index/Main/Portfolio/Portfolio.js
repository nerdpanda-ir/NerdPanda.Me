/*====   import Sctipt    ====*/
    import React from 'react';
    import GrayBig from "../../../../items/Title/GrayBig/GrayBig";
    import Container from "../../../../Container/Container";
    import PortfolioOnce from "./PortfolioOnce/PortfolioOnce";
    import MoreBtn from "../../../../items/MoreBtn/MoreBtn";
    import {GlobalContextProvider} from "../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../css/Page/index/Main/Portfolio/Portfolio.css'
/*====   import Style    ====*/

/*====   import FIles    ====*/
    import port1 from  '../../../../../img/page/index/Portfolio/port1.jpg'
    import port2 from  '../../../../../img/page/index/Portfolio/port2.jpg'
    import port3 from  '../../../../../img/page/index/Portfolio/port3.png'
    import port4 from  '../../../../../img/page/index/Portfolio/port4.jpg'

/*====   import FIles    ====*/


export default class Portfolio extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='Portfolio'>
                        <GrayBig tagName='h2'> نمونه کار ها  </GrayBig>
                        <Container className='posRel'>
                            <MoreBtn/>
                            <ul id='portfolioWrapper'>
                                <GlobalContextProvider value = {{title : 'نمونه کار اول ' , img : port1 , alt : 'نمونه کار اولی '}}>
                                    <PortfolioOnce />
                                </GlobalContextProvider>
                                <GlobalContextProvider value = {{title : 'نمونه کار اول ' , img : port2 , alt : 'نمونه کار اولی '}}>
                                    <PortfolioOnce />
                                </GlobalContextProvider>
                                <GlobalContextProvider value = {{title : 'نمونه کار اول ' , img : port3 , alt : 'نمونه کار اولی '}}>
                                    <PortfolioOnce />
                                </GlobalContextProvider>
                                <GlobalContextProvider value = {{title : 'نمونه کار اول ' , img : port4 , alt : 'نمونه کار اولی '}}>
                                    <PortfolioOnce />
                                </GlobalContextProvider>
                            </ul>
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}