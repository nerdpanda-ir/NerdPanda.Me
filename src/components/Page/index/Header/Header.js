/*====   import Sctipt    ====*/
    import React from 'react';
    import Nav from './Nav/Nav';
    import Speciality from "./Speciality/Speciality";
/*====   import Sctipt    ====*/

/*====   import Styles    ====*/
    import '../../../../css/Page/index/Header/header.css'
/*====   import Styles    ====*/
export default class Header extends React.Component
{
    render()
    {
        let result = 
        (
            <React.Fragment>
                <header id='pageHeader'> 
                    <Nav />
                    <Speciality />
                </header>
            </React.Fragment>
        );
        return result; 
    }
}
