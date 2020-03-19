
/*====   import Sctipt    ====*/
    import React from "react";
    import BigParagraph from "../../../../../../../items/Paragraph/BigParagraph/BigParagraph";
/*====   import Sctipt    ====*/

export default class Description extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <BigParagraph className='textCenter'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                    </BigParagraph>
                </React.Fragment>
            );
        return result;
    }
}