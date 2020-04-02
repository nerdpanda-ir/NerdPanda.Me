/*====   import Sctipt    ====*/
    import React from "react";
    import GrayBig from "../../../../items/Title/GrayBig/GrayBig";
    import Container from "../../../../Container/Container";
    import ClearBoth from "../../../../items/ClearBoth/ClearBoth";
    import ContactMedia from "./ContactMedia/ContactMedia";
    import ContactForm from "./ContactForm/ContactForm";
/*====   import Sctipt    ====*/



export default class ContactMe extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='contactMe'>
                        <GrayBig tagName='h2'>تماس با من </GrayBig>
                        <Container>
                            <ContactForm />
                            <ContactMedia/>
                            <ClearBoth />
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}