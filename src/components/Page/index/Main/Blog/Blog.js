// todo :  ساخت کامپوننت small perple title برای پست ها
// todo :  استفاده از کامپوننت col در قسمت های قبلی برنامه
/*====   import Sctipt    ====*/
    import React from 'react'
    import GrayBig from "../../../../items/Title/GrayBig/GrayBig";
    import Container from "../../../../Container/Container";
    import Post from "./Post/Post";
    import {GlobalContextProvider} from "../../../../GlobalContext/GlobalContext";
    import ClearBoth from "../../../../items/ClearBoth/ClearBoth";
    import MoreBtn from "../../../../items/MoreBtn/MoreBtn";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../css/Page/index/Main/Blog/Blog.css';
/*====   import Style    ====*/

/*====   import Files    ====*/
    import post1 from '../../../../../img/page/index/Blog/post1.jpg'
    import post2 from '../../../../../img/page/index/Blog/post2.jpg'
/*====   import Files    ====*/

export default class Blog extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='blog' className='bg-white-light'>
                        <GrayBig tagName='h2' className='disIB col-12'>وبلاگ </GrayBig>
                        <Container className='posRel'>
                            <MoreBtn />
                            <ClearBoth />
                            <GlobalContextProvider value={{img : post1, alt : 'target',title : 'هدف' , content : 'توی زندگیتون هدف داشته باشید و برای اون تلاش کنید !!!!‌ برای ساعت به ساعت ، دقیقه به دقیقه ، برنامه داشته باشید و به هر چیزی و یا هر کسی که باعث خراب شدن یا به هم ریختن برنامه ریزیتون میشه نه بگید....'}}>
                                <Post />
                            </GlobalContextProvider>
                            <GlobalContextProvider value={{img :post2, alt : 'JustTime',title : 'اتلاف وقت' , content : 'اگه آدم توی زندگی هدفی رو دنبال کنه ، زمان یکی از پارامتر هایی هست که خیلی باید واسش ارزش قائل باشه و سعی کنه هر چیزی که باعث اتلاف وقتش میشه رو ازش دوری کنه.....'}}>
                                <Post />
                            </GlobalContextProvider>
                            <ClearBoth/>
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}