
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
                        محمدرضام متولد 80 تنبل اما عاشق تکنولوژی ، برنامه نویسی رو واسه لانچ کردن ایده هام یاد گرفتم نه برای کارمند بودن توی شرکت خاصی ‌!!!!‌ ایده‌های خیلی خوبی در رابطه با انلاین شدن کسب و کار ها دارم شاید یه روزی به شما زنگ زدم و پیشنهاد کار دادم xd
                    </BigParagraph>
                </React.Fragment>
            );
        return result;
    }
}