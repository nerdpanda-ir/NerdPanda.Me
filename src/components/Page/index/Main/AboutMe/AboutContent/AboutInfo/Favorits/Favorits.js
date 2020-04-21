/*====   import Sctipt    ====*/
    import React from 'react';
    import {GlobalContextProvider} from "../../../../../../../GlobalContext/GlobalContext";
    import FavoritsItem from "./FavoritsItem/FavoritsItem";
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
                        <GlobalContextProvider value={{icon : 'fal fa-code' , description : 'برنامه نویس ها همیشه به تایپ کردن و نوشتن کد علاقه دارن'}}>
                            <FavoritsItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon : 'fal fa-chalkboard-teacher' , description : 'وقتی که عاشق نوشتن برنامه های کامپیوتری باشی هر روز چیز های جدید یاد میگیری '}}>
                            <FavoritsItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon : 'fal fa-list-music' , description :'یکی از لذت بخش ترین کار های دنیا اینه که در هنگام کد نویسی موزیک گوش کنی ' , href :'https://www.youtube.com/playlist?list=PLnXmz35qhLtKzEOmdpdYQtgQpj_PmuFBY'}}>
                            <FavoritsItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon : 'fal fa-mug-hot' , description :'برنامه نوشتن بدون نوشیدنی داغ امکان پذیر نیست ' }}>
                            <FavoritsItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon : 'fal fa-burger-soda' , description :'ادم تا وقتی زندس باید از غذا های لذیذ لذت ببره ' }}>
                            <FavoritsItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon : 'fal fa-gamepad-alt' , description :'توی اوغات های فراغت به جای اینکه از خونه بری بیرون و خاک بخوری !!!‌گیم بهترین گزینس ' , href : 'https://steamcommunity.com/id/itonegamer'}}>
                            <FavoritsItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon : 'far fa-coin' , description :'کی رو میشناسید که پول دوست نداشته باشه ؟' , href : 'https://idpay.ir/nerdpanda'}}>
                            <FavoritsItem />
                        </GlobalContextProvider>
                    </ul>
                </React.Fragment>
            );
        return result;
    }
}