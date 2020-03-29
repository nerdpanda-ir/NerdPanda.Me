/*====   import Sctipt    ====*/
    import React from 'react'
import GrayBig from "../../../../items/Title/GrayBig/GrayBig";
import Container from "../../../../Container/Container";
/*====   import Sctipt    ====*/
export default class Blog extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='blog' className='bg-white-light'>
                        <GrayBig tagName='h2'>وبلاگ </GrayBig>
                        <Container>
                            hello im blog
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}