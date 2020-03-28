/*====   import Sctipt    ====*/
    import React from 'react';
    import GrayBig from "../../../../items/Title/GrayBig/GrayBig";
    import Container from "../../../../Container/Container";
/*====   import Sctipt    ====*/
export default class Portfolio extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='Portfolio'>
                        <GrayBig tagName='h2'> نمونه کار ها  </GrayBig>
                        <Container>
                            
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}