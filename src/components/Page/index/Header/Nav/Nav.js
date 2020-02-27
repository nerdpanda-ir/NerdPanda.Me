/*====   import Sctipt    ====*/
    import React from "react";  
    import Container from '../../../../Container/Container'
    import Logo from '../../../../Logo/Logo'
/*====   import Sctipt    ====*/

/*====   import Styles  ====*/
    import '../../../../../css/Page/index/Header/Nav/Nav.css'
/*====   import Styles  ====*/
export default class Nav extends React.Component
{
    render()
    {
        let result = 
        (
            <React.Fragment>
                <nav id='topNav' className='sh1'>
                    <Container className='h100'>
                        <Logo id='NavLogo' className='h100 disIB col-1' imageSrc='image' alt='NerdPandaLogo'/>
                    </Container>
                </nav>
            </React.Fragment>
        );
        return result; 
    }
}