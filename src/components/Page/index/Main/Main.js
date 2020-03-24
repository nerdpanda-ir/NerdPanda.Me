/*====   import Sctipt    ====*/
    import React from "react";
    import AboutMe from "./AboutMe/AboutMe";
import Skill from "./Skill/Skill";
/*====   import Sctipt    ====*/
export default class Main extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <main>
                        <AboutMe />
                        <Skill />
                    </main>
                </React.Fragment>
            );
        return result;
    }
}