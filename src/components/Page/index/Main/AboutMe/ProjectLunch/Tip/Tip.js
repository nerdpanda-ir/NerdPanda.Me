/*====   import Sctipt    ====*/
    import React from 'react';
    import BigParagraph from "../../../../../../items/Paragraph/BigParagraph/BigParagraph";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../css/Page/index/Main/ProjectLunch/Tip/Tip.css'

/*====   import Style    ====*/
export default class Tip extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='tip br3 sh3 col-11 bg-white dirR posRel boxSBB'>
                        <section className='tipBtn posAb bg-dark-perple color-white sh3 textCenter boxSBB br100'>
                            <i className="fal fa-lightbulb-on"></i>
                        </section>
                        <section className='tipContent'>
                            <h4>لورم ایپسوم متن ساختگی </h4>
                            <BigParagraph className='textCenter'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،</BigParagraph>
                        </section>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}
