/*====   import Sctipt    ====*/
    import React from 'react';
    import Col from "../../../../../../items/Col/Col";
    import Tip from "./Tip/Tip";
    import {GlobalContextProvider} from "../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/
export default class ProjectLunchContent extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <Col className='col-6 flR'>
                        <GlobalContextProvider value={{title : 'ایده پردازی' ,icon:'fal fa-lightbulb-on' , body : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،'}}>
                            <Tip />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{title : 'لورم ایپسوم متن ساختگی' ,icon:'fal fa-lightbulb-on' , body : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،'}}>
                            <Tip />
                        </GlobalContextProvider>
                    </Col>
                    <Col className='col-6 flR dirL'>
                        <GlobalContextProvider value={{title : 'ایده پردازی' ,icon:'fal fa-lightbulb-on' , body : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،'}}>
                            <Tip />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{title : 'لورم ایپسوم متن ساختگی' ,icon:'fal fa-lightbulb-on' , body : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،'}}>
                            <Tip />
                        </GlobalContextProvider>
                    </Col>
                </React.Fragment>
            );
        return result;
    }
}
