/*====   import Sctipt    ====*/
    import React from 'react';
/*====   import Sctipt    ====*/

/*====   import Styles   ====*/
    import '../../../../../css/Page/index/Footer/Team/Team.css'
    import TeamLogo from "./TeamLogo/TeamLogo";
    import TeamSocials from "./TeamSocials/TeamSocials";
/*====   import Styles   ====*/

export default class Team extends React.Component
{
    render() {
        let result =
            (
                <React.Fragment>
                    <TeamLogo />
                    <TeamSocials />
                </React.Fragment>
            );
        return result;
    }
}