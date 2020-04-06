/*====   import Sctipt    ====*/
    import React from 'react';
    import BigParagraph from "../../../../../../items/Paragraph/BigParagraph/BigParagraph";
/*====   import Sctipt    ====*/

/*====  import Style    ====*/
    import '../../../../../../../css/Page/index/Header/Speciality/Info/InfoDescription/InfoDescription.css';
/*====  import Style    ====*/
export default class InfoDescription extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <BigParagraph  className='textCenter'>
                        فول استک دولوپر برنامه نویسی هست که به تکنولوژی هایی که توی قسمت Front End و قسمت Back End یک وب اپلیکیشن استفاده میشه مهارت داره و میتونه یک وب اپلیکیشن  رو از صفر تا صد راه اندازی کنه . معمولاً Full Stack Developer ها افرادی هستند که مهارت نسباتا جامعی به برنامه نویسی و اسکریپت نویسی و پایگاه داده و  شبکه و هاستینگ و طراحی رابط کاربری را دارا هستند.
                    </BigParagraph>
                </React.Fragment>
            );
        return result;
    }
}