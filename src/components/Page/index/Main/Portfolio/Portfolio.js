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
    import port1 from  '../../../../../img/page/index/Portfolio/port1.png'
    import port2 from  '../../../../../img/page/index/Portfolio/port2.jpg'
    import port3 from  '../../../../../img/page/index/Portfolio/port3.png'
    import port4 from  '../../../../../img/page/index/Portfolio/port4.png'

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
                                <GlobalContextProvider value = {{title : 'وب سایت  No Shutdown ' , img : port1 , alt : 'وب سایت  No Shutdown '}}>
                                    <PortfolioOnce />
                                </GlobalContextProvider>
                                <GlobalContextProvider value = {{title : 'فیش حقوقی بازیافت لنجان ' , img : port2 , alt : 'فیش حقوقی بازیافت لنجان '}}>
                                    <PortfolioOnce />
                                </GlobalContextProvider>
                                <GlobalContextProvider value = {{title : 'پالت رنگ برای طراحان' , img : port3 , alt : 'پالت رنگ برای طراحان '}}>
                                    <PortfolioOnce />
                                </GlobalContextProvider>
                                <GlobalContextProvider value = {{title : 'فروشگاه فایل' , img : port4 , alt : 'فروشگاه فایل'}}>
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