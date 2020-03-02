/*====   import Sctipt    ====*/
    import React from 'react';
    import List from './List/List';
    import {GlobalContextProvider} from "../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../css/Page/index/Header/Nav/menu/Menu.css'
/*====   import Style    ====*/
export default class Menu extends React.Component
{
    render()
    {
        let result = 
        (
            <React.Fragment>
                <ul id='PageMenu' className='disIB h100 col-9 flR'>
                    <GlobalContextProvider value={['خانه','fal fa-home-heart']}>
                        <List url='/'/>
                    </GlobalContextProvider>
                    <GlobalContextProvider value={['درباره من','fal fa-bullhorn']}>
                        <List url='/home'/>
                    </GlobalContextProvider>
                    <GlobalContextProvider value={['مهارت ها','fal fa-head-side-brain']}>
                        <List url='/home'/>
                    </GlobalContextProvider>
                    <GlobalContextProvider value={['نمونه کارها','fal fa-handshake']}>
                        <List url='/home'/>
                    </GlobalContextProvider>
                    <GlobalContextProvider value={['وبلاگ','fal fa-newspaper']}>
                        <List url='/home'/>
                    </GlobalContextProvider>
                    <GlobalContextProvider value={['تماس با من','fal fa-comments-dollar']}>
                        <List url='/home'/>
                    </GlobalContextProvider>
                </ul>
            </React.Fragment>
        );
        return result;
    }
}
