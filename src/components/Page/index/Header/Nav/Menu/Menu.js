/*====   import Sctipt    ====*/
    import React from 'react';
    import List from './List/List';
    import {ListInfoProvider} from './ListInfoContext/ListInfo';
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
                <ul id='PageMenu' className='disIB h100 col-9'>
                    <ListInfoProvider value={['خانه','fal fa-home-heart']}>
                        <List />
                    </ListInfoProvider>
                    <ListInfoProvider value={['درباره من','fal fa-bullhorn']}>
                        <List />
                    </ListInfoProvider>
                    <ListInfoProvider value={['مهارت ها','fal fa-head-side-brain']}>
                        <List />
                    </ListInfoProvider>
                    <ListInfoProvider value={['نمونه کارها','fal fa-handshake']}>
                        <List />
                    </ListInfoProvider>
                    <ListInfoProvider value={['وبلاگ','fal fa-newspaper']}>
                        <List />
                    </ListInfoProvider>
                    <ListInfoProvider value={['تماس با من','fal fa-comments-dollar']}>
                        <List />
                    </ListInfoProvider>
                </ul>
            </React.Fragment>
        );
        return result;
    }
}
