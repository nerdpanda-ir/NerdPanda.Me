// todo : کامپوننت محور کردن قسمت وبلاگ
// todo :  وبلاگ با کانتکست کار کند
// todo :  مرتب کردن استایل ها
// todo :  گذاشتن دکمه more btn برای وبلاگ
// todo :  ساخت کامپوننت small perple title برای پست ها
// todo :  استفاده از کامپوننت col در قسمت های قبلی برنامه
/*====   import Sctipt    ====*/
    import React from 'react'
    import GrayBig from "../../../../items/Title/GrayBig/GrayBig";
    import Container from "../../../../Container/Container";
    import Post from "./Post/Post";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../css/Page/index/Main/Blog/Blog.css';

/*====   import Style    ====*/

export default class Blog extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='blog' className='bg-white-light'>
                        <GrayBig tagName='h2' className='disIB col-12'>وبلاگ </GrayBig>
                        <Container>
                            <Post />
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}