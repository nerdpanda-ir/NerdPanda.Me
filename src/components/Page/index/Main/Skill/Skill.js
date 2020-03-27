/*====   import Sctipt    ====*/
    import React from "react";
    import GrayBig from "../../../../items/Title/GrayBig/GrayBig";
    import Container from "../../../../Container/Container";
    import SkillGroup from "./SkillGroup/SkillGroup";
    import SkillItem from "./SkillGroup/SkillItem/SkillItem";
    import {GlobalContextProvider} from "../../../../GlobalContext/GlobalContext";
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

                            <SkillGroup icon='fal fa-pencil-paintbrush ' title='Front End'>
                                <GlobalContextProvider value={{title : 'Html5',precent : '80%'}}>
                                    <SkillItem />
                                </GlobalContextProvider>
                                <GlobalContextProvider value={{title : 'Css3',precent : '60%'}}>
                                    <SkillItem />
                                </GlobalContextProvider>
                                <GlobalContextProvider value={{title : 'Java Script',precent : '70%'}}>
                                    <SkillItem />
                                </GlobalContextProvider>
                                <GlobalContextProvider value={{title : 'React',precent : '65%'}}>
                                    <SkillItem />
                                </GlobalContextProvider>
                                <GlobalContextProvider value={{title : 'Jquery',precent : '50%'}}>
                                    <SkillItem />
                                </GlobalContextProvider>
                            </SkillGroup>
                            <SkillGroup title='Back End ' icon='fal fa-lightbulb-on'>
                                <GlobalContextProvider value={{title : 'Php',precent : '70%'}}>
                                    <SkillItem />
                                </GlobalContextProvider>
                                <GlobalContextProvider value={{title : 'MySql',precent : '70%'}}>
                                    <SkillItem />
                                </GlobalContextProvider>
                            </SkillGroup>
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}