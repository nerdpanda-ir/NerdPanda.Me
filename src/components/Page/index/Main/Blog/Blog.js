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
                            <GlobalContextProvider value={{img : 'http://localhost:3000/static/media/port4.b22a9f42.jpg' , alt : 'firstPost',title : 'پست اول' , content : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است....'}}>
                                <Post />
                            </GlobalContextProvider>
                            <GlobalContextProvider value={{img : 'http://localhost:3000/static/media/port3.96f126f5.png' , alt : 'firstPost',title : 'پست اول' , content : 'first'}}>
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