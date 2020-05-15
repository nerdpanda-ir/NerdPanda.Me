/*====   import Sctipt    ====*/
    import React from 'react';
    import {NavLink} from 'react-router-dom';
    import ListIcon from './ListIcon/ListIcon';
    import ListText from './ListText/ListText';
    import {GlobalContextConsumer} from "../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../css/Page/index/Header/Nav/menu/List/List.css'
/*====   import Style    ====*/
export default class List extends React.Component
{
    render()
    {
        let result = 
        (
            <React.Fragment>
                <li>
                    <GlobalContextConsumer>
                        {
                            value=>
                                <NavLink to={value.location} className='h100 disIB boxSBB posRel' activeClassName='listActive'>
                                    <ListIcon />
                                    <ListText />
                                </NavLink>
                        }
                    </GlobalContextConsumer>
                </li>
            </React.Fragment>
        );
        return result ;
    }
}