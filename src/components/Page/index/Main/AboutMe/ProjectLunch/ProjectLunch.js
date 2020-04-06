/*====   import Sctipt    ====*/
    import React from "react";
    import GrayBig from "../../../../../items/Title/GrayBig/GrayBig";
    import Container from "../../../../../Container/Container";
    import Col from "../../../../../items/Col/Col";
    import Tip from "./Tip/Tip";
    import ClearBoth from "../../../../../items/ClearBoth/ClearBoth";
/*====   import Sctipt    ====*/

/*====   import Style   ====*/
    import '../../../../../../css/Page/index/Main/ProjectLunch/ProjectLunch.css'
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
                            <Col className='col-6 flR'>
                                <Tip title='ایده پردازی' icon='fal fa-lightbulb-on'>
                                    ایده‌ها و نوآوری های جدید کمک میکنه که انجام کار ها توی زندگی راحت‌تر بشه !!!! هر شب قبل از خواب در رابطه با کار هایی که میتونم انجام بدهم فکر میکنم و یک دفعه ایده ای تو ذهنم جرقه میزنه سریع ماژیکو بر می دارم و توی تابلوی وایت برد مینویسم . و روی امکاناتی که میتونه اون ایده داشته باشه فکر میکنم
                                </Tip>
                                <Tip title='طراحی Ui برنامه ها' icon='fal fa-drafting-compass'>یکی از مهم‌ترین بخش‌های تولید یک نرم‌افزار User Interface یا رابط کاربری اون توی نرم افزار های گرافیکی مثل Gimp یا Adobe XD هست!! چونکه طراحی Ui مناسب باعث میشه کاربر خاطره خوبی از اون نرم افزار توی ذهنش بمونه.همیشه سعی ام براین بوده Ui های ساده بزنم چون زیبایی در سادگیه وهمیشه از طرح های Material استقبال کردم  </Tip>
                            </Col>
                            <Col className='col-6 flR dirL'>
                                <Tip title='تحلیل و تجزیه ایده ها' icon='fal fa-chart-network'>  بعد از اینکه ایده ی ناب رو پیدا کردید این مرحله مهم‌ترین کاره!اینکه شما تحلیل کنید واسه طراحی ایده تون به چه تخصص هایی نیاز دارید از چه تکنیک هایی باید استفاده کنید! اینکه آیا ایده تون میتونه موفق باشه یا نه و همچنین اینکه برای لانچ کردن ایده به چه قدرهزینه نیاز دارید ، و برای طراحی و برنامه نویسی اپلیکیشن به چه قدر زمان نیاز دارید !!!!‌</Tip>
                                <Tip title='برنامه نویسی نرم افزار با طعم های مختلف' icon='fal fa-laptop-code'>این مرحله هیجان انگیز ترین و پر چالش ترین مرحله تولید یک نرم‌افزار تحت وبه توی این مرحله باید با زبان‌ها و کتابخانه‌های مختلفی که توی FrontEnd و Back End  استفاده میشه با عشق سروکله بزنید! همیشه سعی کردم این مرحله رو با آخرین تکونولوژی هایی که موجودبوده انجام بدهم !! این اواخر شدیداً به نوشتن وب اپ های SPA علاقه پیدا کردم</Tip>
                            </Col>

                            <ClearBoth />
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}