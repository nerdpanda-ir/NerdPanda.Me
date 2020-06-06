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
                    <nav id='topNav' className='sh1 posRel'>
                        <Logo imageSrc={pandaLogo} alt='pandaLogo' id='navLogo' className='posAb'/>
                    </nav>
                </React.Fragment>
            );
        return result;
    }

}