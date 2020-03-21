/*====   import Sctipt    ====*/
    import React from "react";
    import Container from "../../../../../Container/Container";
    import AboutInfo from "./AboutInfo/AboutInfo";
    import AboutMedia from "./AboutMedia/AboutMedia";
    import ClearBoth from "../../../../../items/ClearBoth/ClearBoth";
/*====   import Sctipt    ====*/
export default class AboutContent extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <Container>
                        <AboutInfo />
                        <AboutMedia />
                        <ClearBoth />
                    </Container>
                </React.Fragment>
            );
        return result;
    }
}