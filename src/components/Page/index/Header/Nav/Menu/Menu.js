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
                </ul>
            </React.Fragment>
        );
        return result;
    }
}
