/*====   import Sctipt    ====*/
    import React from 'react';
    import List from './List/List';
    import {GlobalContextProvider} from "../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/


export default class Menu extends React.Component
{
    render()
    {
        let result = 
        (
            <React.Fragment>
                <ul id='PageMenu' className='disIB h100 col-9 flR'>
                    <GlobalContextProvider value={{title : 'خانه' , icon : 'fal fa-home-heart' , location : '/'}}>
                        <List/>
                    </GlobalContextProvider>
                    <GlobalContextProvider value={{title : 'درباره من' , icon : 'fal fa-bullhorn' , location : '/home'}}>
                        <List />
                    </GlobalContextProvider>
                    <GlobalContextProvider value={{title : 'مهارت ها' , icon : 'fal fa-head-side-brain' , location : '/home'}}>
                        <List/>
                    </GlobalContextProvider>
                    <GlobalContextProvider value={{title : 'نمونه کارها' , icon : 'fal fa-handshake' , location : '/home'}}>
                        <List/>
                    </GlobalContextProvider>
                    <GlobalContextProvider value={{title : 'وبلاگ' , icon : 'fal fa-newspaper' , location : '/home'}}>
                        <List/>
                    </GlobalContextProvider>
                    <GlobalContextProvider value={{title : 'تماس با من' , icon : 'fal fa-comments-dollar' , location : '/home'}}>
                        <List />
                    </GlobalContextProvider>
                </ul>
            </React.Fragment>
        );
        return result;
    }
}
