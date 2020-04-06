/*====   import Sctipt    ====*/
import React from 'react';
/*====   import Sctipt    ====*/

/*====   import Style  ====*/
    import '../../../../../../../../css/Page/index/Main/AboutMe/AboutContent/AboutInfo/Favorits/Favorits.css';
    import '../../../../../../../../css/frameWorks/hint/hint.css'
    import '../../../../../../../../css/frameWorks/hint/thems/perple/perple.css'
/*====   import Style  ====*/
export default class Favorits extends React.Component {
    render() {
        let result =
            (
                <React.Fragment>
                    <ul className='dirL' id='favorits'>
                        <li  className="hint--bottom hint--perple hint--medium" aria-label="برنامه نویس ها همیشه به تایپ کردن و نوشتن کد علاقه دارن">
                                <i className="fal fa-code"></i>
                        </li>
                        <li className="hint--bottom hint--perple hint--medium"
                            aria-label="وقتی که عاشق نوشتن برنامه های کامپیوتری باشی هر روز چیز های جدید و تکنیک های جدید یاد میگیری">
                            <i className="fal fa-chalkboard-teacher"></i>
                        </li>
                        <li className="hint--bottom hint--perple hint--medium" aria-label="یکی از لذت بخش ترین کار های دنیا اینه که در هنگام کد نویسی موزیک گوش کنی ">
                            <a href='https://www.youtube.com/playlist?list=PLnXmz35qhLtKzEOmdpdYQtgQpj_PmuFBY'>
                                <i className="fal fa-list-music"></i>
                            </a>
                        </li>
                        <li className="hint--bottom hint--perple hint--medium" aria-label="برنامه نوشتن بدون نوشیدنی داغ امکان پذیر نیست ">
                            <i className="fal fa-mug-hot"></i>
                        </li>
                        <li className="hint--bottom hint--perple hint--medium" aria-label="ادم تا وقتی زندس باید از غذا های لذیذ لذت ببره‌">
                            <i className="fal fa-burger-soda"></i>
                        </li>
                        <li className="hint--bottom hint--perple hint--medium" aria-label="توی اوغات های فراغت به جای اینکه از خونه بری بیرون و خاک بخوری !!!‌گیم بهترین گزینس ">
                            <a href='https://steamcommunity.com/id/itonegamer'>
                                <i className="fal fa-gamepad-alt"></i>
                            </a>
                        </li>
                        <li className="hint--bottom hint--perple hint--medium" aria-label="کی رو میشناسید که پول دوست نداشته باشه ؟‌">
                            <a href='https://idpay.ir/nerdpanda'>
                                <i className="far fa-coin"></i>
                            </a>
                        </li>
                    </ul>
                </React.Fragment>
            );
        return result;
    }
}