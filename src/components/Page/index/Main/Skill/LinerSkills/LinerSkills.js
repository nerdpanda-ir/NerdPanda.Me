/*====   import Sctipt    ====*/
    import React from 'react';
    import SkillGroup from "./SkillGroup/SkillGroup";
    import {GlobalContextProvider} from "../../../../../GlobalContext/GlobalContext";
    import SkillItem from "./SkillGroup/SkillItem/SkillItem";
/*====   import Sctipt    ====*/

export default class LinerSkills extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
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
                </React.Fragment>
            );
        return result;
    }
}