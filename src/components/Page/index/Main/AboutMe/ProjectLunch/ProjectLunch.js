/*====   import Sctipt    ====*/
    import React from "react";
    import GrayBig from "../../../../../items/Title/GrayBig/GrayBig";
    import Container from "../../../../../Container/Container";
    import ProjectLunchContent from "./ProjectLunchContent/ProjectLunchContent";
    import ClearBoth from "../../../../../items/ClearBoth/ClearBoth";
/*====   import Sctipt    ====*/

/*====   import Style   ====*/
    import '../../../../../../css/Page/index/Main/ProjectLunch/ProjectLunch.css'
/*====   import Style   ====*/

export default class ProjectLunch extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='lunch' className='bg-white-light'>
                        <GrayBig tagName='h2' className='disIB col-12'>
                            یک پروژه چگونه لانچ می شود
                        </GrayBig>
                        <Container>
                            <ProjectLunchContent />
                            <ClearBoth />
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}