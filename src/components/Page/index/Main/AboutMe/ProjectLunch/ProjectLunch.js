/*====   import Sctipt    ====*/
    import React from "react";
    import GrayBig from "../../../../../items/Title/GrayBig/GrayBig";
    import Container from "../../../../../Container/Container";
    import Col from "../../../../../items/Col/Col";
    import Tip from "./Tip/Tip";
/*====   import Sctipt    ====*/

/*====   import Style   ====*/
    import '../../../../../../css/Page/index/Main/ProjectLunch/ProjectLunch.css'
import BigParagraph from "../../../../../items/Paragraph/BigParagraph/BigParagraph";
/*====   import Style   ====*/

export default class ProjectLunch extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='lunch' className='bg-white-light'>
                        <GrayBig tagName='h2' className='disIB col-12'>
                            یک پروژه چگونه لانچ می شود
                        </GrayBig>
                        <Container>
                            <Col className='col-6 disIB'>
                                <Tip title='ایده پردازی' icon='fal fa-lightbulb-on'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،</Tip>
                                <Tip title='لورم ایپسوم متن ساختگی ' icon='fal fa-lightbulb-on'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،</Tip>
                            </Col>
                            <Col className='col-6 disIB dirL'>
                                <Tip title='لورم ایپسوم متن ساختگی ' icon='fal fa-lightbulb-on'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،</Tip>
                                <Tip title='لورم ایپسوم متن ساختگی ' icon='fal fa-lightbulb-on'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،</Tip>
                            </Col>
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}