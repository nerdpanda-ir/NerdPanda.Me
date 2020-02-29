/*====   import Sctipt    ====*/
    import React from 'react';
    import List from './List/List';
/*====   import Sctipt    ====*/
export default class Menu extends React.Component
{
    render()
    {
        let result = 
        (
            <React.Fragment>
                <ul id='PageMenu' className='disIB h100 col-9'>
                    <List />
                </ul>
            </React.Fragment>
        );
        return result;
    }
}
