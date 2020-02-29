/*====   import Sctipt    ====*/
    import React from 'react';
    import {NavLink} from 'react-router-dom';
    import ListIcon from './ListIcon/ListIcon';
    import ListText from './ListText/ListText';
/*====   import Sctipt    ====*/
export default class List extends React.Component
{
    constructor() {
        super();
        this.state  = {url : ''};
    }
    static getDerivedStateFromProps(props)
    {
        return {url : props.url}
    }
    render()
    {
        let result = 
        (
            <React.Fragment>
                <li>
                    <NavLink to={this.state.url} className='h100 disIB boxSBB posRel' activeClassName='listActive'>
                        <ListIcon />
                        <ListText />
                    </NavLink>
                </li>
            </React.Fragment>
        );
        return result ;
    }
}