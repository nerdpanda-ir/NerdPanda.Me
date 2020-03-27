/*====   import Sctipt    ====*/
    import React from "react";
    import GrayBig from "../../../../items/Title/GrayBig/GrayBig";
    import Container from "../../../../Container/Container";
    import LinerSkills from "./LinerSkills/LinerSkills";
    import CircleProgress from "../../../../items/CircleProgress/CircleProgress";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../css/Page/index/Main/Skill/Skill.css';
/*====   import Style    ====*/
export default class Skill extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='skill'>
                        <GrayBig tagName='h2'> مهارت های من </GrayBig>
                        <Container className='boxSBB'>
                            <LinerSkills />
                            <CircleProgress />
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}