/*====   import Sctipt    ====*/
    import React from "react";
    import AboutMe from "./AboutMe/AboutMe";
    import Skill from "./Skill/Skill";
    import Portfolio from "./Portfolio/Portfolio";
    import Blog from "./Blog/Blog";
/*====   import Sctipt    ====*/
export default class Main extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <main>
                        <AboutMe />
                        <Skill />
                        <Portfolio />
                        <Blog />
                    </main>
                </React.Fragment>
            );
        return result;
    }
}