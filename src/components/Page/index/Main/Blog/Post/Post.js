/*====   import Sctipt    ====*/
    import React from 'react';
import GraySmall from "../../../../../items/Title/GraySmall/GraySmall";
import BigParagraph from "../../../../../items/Paragraph/BigParagraph/BigParagraph";
import MoreBtn from "../../../../../items/MoreBtn/MoreBtn";
import Container from "../../../../../Container/Container";
/*====   import Sctipt    ====*/
export default class Post extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='col-6 disIB'>
                        <article className='col-11 bg-white sh3 br5 posRel boxSBB'>
                            <section className='articleImage'>
                                <img src="http://localhost:3000/static/media/port4.b22a9f42.jpg" alt="alt" className='col-9 posAb sh5 br5'/>
                            </section>
                            <section className='articleContent boxSBB'>
                                <header className='disIB col-12'>
                                    <GraySmall tagName='h3'>پست اول </GraySmall>
                                </header>
                                <main>
                                    <BigParagraph>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است....
                                    </BigParagraph>
                                </main>
                                <footer className='disIB dirL textLeft col-12 boxSBB'>
                                    <ul>
                                        <li>
                                            <i className="fal fa-calendar-edit"></i>
                                            <span className='iconLable'>1398/10/02</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-comments-alt"></i>
                                            <span className='iconLable'>50</span>
                                        </li>
                                        <li>
                                            <i className="fal fa-heart"></i>
                                            <span className='iconLable'>50</span>
                                        </li>
                                    </ul>
                                    <MoreBtn />
                                </footer>
                            </section>
                        </article>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}