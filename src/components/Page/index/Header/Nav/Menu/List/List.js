/*====   import Sctipt    ====*/
    import React from 'react';
    import ListIcon from './ListIcon/ListIcon';
/*====   import Sctipt    ====*/
export default class List extends React.Component
{
    render()
    {
        let result = 
        (
            <React.Fragment>
                <li>
                    <ListIcon />
                </li>
            </React.Fragment>
        );
        return result ;
    }
}