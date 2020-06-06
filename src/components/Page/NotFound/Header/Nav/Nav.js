/*====   import Sctipt    ====*/
import React from 'react';
import Logo from "../../../../items/Logo/Logo";
/*====   import Sctipt    ====*/

/*====   import Files   ====*/
    import pandaLogo from '../../../../../img/global/Logo.svg';
/*====   import Files   ====*/

export default class Nav extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <nav id='topNav'>
                        <Logo imageSrc={pandaLogo} alt='pandaLogo' id='navLogo'/>
                    </nav>
                </React.Fragment>
            );
        return result;
    }

}