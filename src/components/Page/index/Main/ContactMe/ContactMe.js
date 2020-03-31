/*====   import Sctipt    ====*/
    import React from "react";
    import GrayBig from "../../../../items/Title/GrayBig/GrayBig";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../css/Page/index/Main/ContactMe/ContactMe.css';

/*====   import Style    ====*/
export default class ContactMe extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='contactMe'>
                        <GrayBig tagName='h2'>تماس با من </GrayBig>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}