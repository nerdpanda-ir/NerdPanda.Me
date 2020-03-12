/*====   import Sctipt    ====*/
    import React from "react";  
    import Container from '../../../../Container/Container'
    import Logo from "../../../../items/Logo/Logo";
    import Menu from './Menu/Menu';
    import Options from "./Options/Options";

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
                        <Logo id='NavLogoWrapper' className='h100 disIB col-1 boxSBB flR' imageSrc={LogoImg} alt='NerdPandaLogo'/>
                        <Menu />
                        <Options />
                    </Container>
                </nav>
            </React.Fragment>
        );
        return result; 
    }
}