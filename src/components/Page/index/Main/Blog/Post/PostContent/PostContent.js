/*====   import Sctipt    ====*/
    import React from 'react';
import GraySmall from "../../../../../../items/Title/GraySmall/GraySmall";
import BigParagraph from "../../../../../../items/Paragraph/BigParagraph/BigParagraph";
import MoreBtn from "../../../../../../items/MoreBtn/MoreBtn";
/*====   import Sctipt    ====*/
export default class PostContent extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
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
                </React.Fragment>
            );
        return result;
    }
}
