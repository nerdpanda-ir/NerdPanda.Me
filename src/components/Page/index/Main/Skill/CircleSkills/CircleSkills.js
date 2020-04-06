/*====   import Sctipt    ====*/
    import React from 'react';
    import CircleProgress from "../../../../../items/CircleProgress/CircleProgress";
    import {GlobalContextProvider} from "../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../css/Page/index/Main/Skill/CircleSkills/CircleSkills.css'
/*====   import Style    ====*/
export default class CircleSkills extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='circleProgressWrapper dirL textCenter'>
                        <GlobalContextProvider value={{title : 'Oop' , precent : '70%'}}>
                            <CircleProgress />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{title : 'Git' , precent : '50%'}}>
                            <CircleProgress />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{title : 'Seo' , precent : '30%'}}>
                            <CircleProgress />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{title : 'Regex' , precent : '50%'}}>
                            <CircleProgress />
                        </GlobalContextProvider>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}