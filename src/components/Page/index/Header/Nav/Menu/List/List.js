/*====   import Sctipt    ====*/
    import React from 'react';
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
                    <ListIcon />
                    <ListText />
                </li>
            </React.Fragment>
        );
        return result ;
    }
}