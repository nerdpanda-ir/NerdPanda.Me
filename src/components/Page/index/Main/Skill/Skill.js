/*====   import Sctipt    ====*/
    import React from "react";
import GrayBig from "../../../../items/Title/GrayBig/GrayBig";
import Container from "../../../../Container/Container";
/*====   import Sctipt    ====*/
export default class Skill extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='skill'>
                        <GrayBig tagName='h2'> مهارت های من </GrayBig>
                        <Container>
                            container 
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}