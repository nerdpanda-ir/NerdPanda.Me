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
                        <GlobalContextProvider value={{title : 'React',precent : '70%'}}>
                            <SkillItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{title : 'Jquery',precent : '50%'}}>
                            <SkillItem />
                        </GlobalContextProvider>
                    </SkillGroup>
                    <SkillGroup title='Back End ' icon='fal fa-sliders-h'>
                        <GlobalContextProvider value={{title : 'Php',precent : '70%'}}>
                            <SkillItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{title : 'MySql',precent : '70%'}}>
                            <SkillItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{title : 'Rest Api',precent : '49%'}}>
                            <SkillItem />
                        </GlobalContextProvider>
                    </SkillGroup>
                    <SkillGroup title='Cms ' icon='fad fa-rocket-launch'>
                        <GlobalContextProvider value={{title : 'WordPress',precent : '40%'}}>
                            <SkillItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{title : 'Prestashop',precent : '40%'}}>
                            <SkillItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{title : ' DataLife Engine',precent : '55%'}}>
                            <SkillItem />
                        </GlobalContextProvider>
                    </SkillGroup>
                    <SkillGroup title='Softwares ' icon='fad fa-window'>
                        <GlobalContextProvider value={{title : 'Php Strom',precent : '70%'}}>
                            <SkillItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{title : 'Liber Office',precent : '30%'}}>
                            <SkillItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{title : 'Microsoft Office',precent : '50%'}}>
                            <SkillItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{title : 'Gimp',precent : '30%'}}>
                            <SkillItem />
                        </GlobalContextProvider>
                    </SkillGroup>
                </React.Fragment>
            );
        return result;
    }
}