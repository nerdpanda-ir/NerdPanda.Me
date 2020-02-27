/*====   import Sctipt    ====*/
    import React from "react";  
    import Container from '../../../../Container/Container'
    import Logo from '../../../../Logo/Logo'
/*====   import Sctipt    ====*/

/*====   import Styles  ====*/
    import '../../../../../css/Page/index/Header/Nav/Nav.css'
/*====   import Styles  ====*/


/*====   import Files  ====*/
    import LogoImg from '../../../../../img/global/Logo.svg'
/*====   import Files  ====*/
export default class Nav extends React.Component
{
    render()
    {
        let result = 
        (
            <React.Fragment>
                <nav id='topNav' className='sh1'>
                    <Container className='h100'>
                        <Logo id='NavLogoWrapper' className='h100 disIB col-1 boxSBB' imageSrc={LogoImg} alt='NerdPandaLogo'/>
                    </Container>
                </nav>
            </React.Fragment>
        );
        return result; 
    }
}