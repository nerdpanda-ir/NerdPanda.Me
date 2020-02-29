/*====   import Sctipt    ====*/
    import React from 'react';
    import {NavLink} from 'react-router-dom';
    import ListIcon from './ListIcon/ListIcon';
    import ListText from './ListText/ListText';
/*====   import Sctipt    ====*/
export default class List extends React.Component
{
    render()
    {
        let result = 
        (
            <React.Fragment>
                <li>
                    <NavLink to='/comp'>
                        <ListIcon />
                        <ListText />
                    </NavLink>
                </li>
            </React.Fragment>
        );
        return result ;
    }
}