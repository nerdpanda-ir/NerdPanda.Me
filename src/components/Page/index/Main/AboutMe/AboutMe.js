/*====   import Sctipt    ====*/
    import React from 'react';
    import GrayBig from "../../../../items/Title/GrayBig/GrayBig";
    import Col from "../../../../items/Col/Col";
    import Container from "../../../../Container/Container";
    import PerpleBig from "../../../../items/Title/PerpleBig/PerpleBig";
    import VectorImg from "../../../../items/VectorImg/VectorImg";
    import BigParagraph from "../../../../items/Paragraph/BigParagraph/BigParagraph";
/*====   import Sctipt    ====*/

/*====   import Files    ====*/
    import aboutImg from '../../../../../img/page/index/about.svg'
/*====   import Files    ====*/
export default class AboutMe extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='aboutMe'>
                        <GrayBig tagName='h2'>
                           درباره من
                        </GrayBig>
                        <Container>
                            <Col className='col-6 flR'>
                                <PerpleBig tagName='h3'>
                                    محمد رضا شمس
                                </PerpleBig>
                                <section id='localtion'>
                                    <i className="fal fa-map-marker-smile"></i>
                                    <span id='country'>ایران</span>
                                    <span id='city'>اصفهان</span>
                                </section>
                                <BigParagraph className='textCenter'>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                                </BigParagraph>
                            </Col>
                            <Col className='col-6 flR  dirL'>
                                <VectorImg src={aboutImg} alt='aboutMe' />
                            </Col>
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }

}