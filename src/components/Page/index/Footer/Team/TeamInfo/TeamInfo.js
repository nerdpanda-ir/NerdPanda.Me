/*====   import Sctipt    ====*/
    import React from 'react';
    import Logo from "../../../../../items/Logo/Logo";
    import GraySmall from "../../../../../items/Title/GraySmall/GraySmall";
/*====   import Sctipt    ====*/

/*====   import files    ====*/
    import teamLogo from "../../../../../../img/global/luxappsLogo.svg";
/*====   import files    ====*/

export default class TeamInfo extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <figure className='textCenter'>
                        <Logo imageSrc={teamLogo} className='col-1 disIB' alt='luxApps.ir'/>
                        <GraySmall tagName='h2' id='teamTitle'> Lux Apps</GraySmall>
                        <figcaption>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</figcaption>
                    </figure>
                </React.Fragment>
            );
        return result;
    }
}