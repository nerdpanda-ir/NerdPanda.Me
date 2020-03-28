/*====   import Sctipt    ====*/
    import React from 'react';
    import GrayBig from "../../../../items/Title/GrayBig/GrayBig";
    import Container from "../../../../Container/Container";
    import GraySmall from "../../../../items/Title/GraySmall/GraySmall";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../css/Page/index/Main/Portfolio/Portfolio.css'
/*====   import Style    ====*/
    import port1 from '../../../../../img/page/index/Portfolio/port1.jpg'
    import port2 from '../../../../../img/page/index/Portfolio/port2.jpg'
    import port3 from '../../../../../img/page/index/Portfolio/port3.png'
    import port4 from '../../../../../img/page/index/Portfolio/port4.jpg'
/*====   import Files    ====*/


export default class Portfolio extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='Portfolio'>
                        <GrayBig tagName='h2'> نمونه کار ها  </GrayBig>
                        <Container>
                            <ul id='portfolioWrapper'>
                                <li className='col-6  br3 disIB '>
                                        <figure className='portfolioView br3 h100 col-11 posRel'>
                                            <img src={port1} alt="portfolio" className='col-12 br3 h100 sh3'/>
                                            <figcaption className='portfolioContent boxSBB posAb color-white bg-perple-rgba8   col-11 br3 sh4 disN'>
                                                <header>
                                                    <GraySmall tagName='h5' className='col-6 disIB'> اپلیکیشن شماره ۱ </GraySmall>
                                                    <ul className='starWrapper col-6 disIB textLeft dirL'>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fal fa-star"></i></li>
                                                    </ul>
                                                </header>
                                                <footer className='posAb col-11 dirL'>
                                                    <ul className='linkWrapper  col-6 disIB textLeft'>
                                                        <li>
                                                            <i className="fal fa-link"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fal fa-eye"></i>
                                                        </li>

                                                    </ul>
                                                    <ul className='techWrapper col-6 disIB textRight'>
                                                        <li>
                                                            <i className="fab fa-html5"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fab fa-js-square"></i>
                                                        </li>
                                                        <li>
                                                            <i className="fab fa-react"></i>
                                                        </li>
                                                    </ul>
                                                </footer>
                                            </figcaption>
                                        </figure>
                                </li>
                            </ul>
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}