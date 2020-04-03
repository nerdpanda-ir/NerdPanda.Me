/*====   import Sctipt    ====*/
    import React from 'react';
    import TeamInfo from "./TeamInfo/TeamInfo";
    import TeamSocials from "./TeamSocials/TeamSocials";
    import Col from "../../../../items/Col/Col";
/*====   import Sctipt    ====*/

/*====   import Styles   ====*/
    import '../../../../../css/Page/index/Footer/Team/Team.css'
/*====   import Styles   ====*/

export default class Team extends React.Component
{
    render() {
        let result =
            (
                <React.Fragment>
                    <Col id='team'>
                        <TeamInfo />
                        <TeamSocials />
                    </Col>
                </React.Fragment>
            );
        return result;
    }
}