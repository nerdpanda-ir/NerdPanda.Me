/*====   import Sctipt    ====*/
    import React from "react";
    import Container from "../../../../../Container/Container";
    import AboutInfo from "./AboutInfo/AboutInfo";
    import AboutMedia from "./AboutMedia/AboutMedia";
/*====   import Sctipt    ====*/
export default class AboutContent extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <Container>
                        <AboutInfo />
                        <AboutMedia />
                    </Container>
                </React.Fragment>
            );
        return result;
    }
}