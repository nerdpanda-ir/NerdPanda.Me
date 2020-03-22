/*====   import Sctipt    ====*/
    import React from 'react';
    import GrayBig from "../../../../items/Title/GrayBig/GrayBig";
    import AboutContent from "./AboutContent/AboutContent";
    import ProjectLunch from "./ProjectLunch/ProjectLunch";
/*====   import Sctipt    ====*/
export default class AboutMe extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='aboutMe'>
                        <GrayBig tagName='h2'>
                           درباره من
                        </GrayBig>
                        <AboutContent />
                        <ProjectLunch />
                    </section>
                </React.Fragment>
            );
        return result;
    }

}