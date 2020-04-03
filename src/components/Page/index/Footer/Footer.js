/*====   import Sctipt    ====*/
    import React from 'react';
    import Container from "../../../Container/Container";
    import CountInfo from "./CountInfo/CountInfo";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../css/Page/index/Footer/Footer.css'
/*====   import Style    ====*/
export default class Footer extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <footer id='pageFooter' className='bg-white-light'>
                        <Container>
                            <CountInfo />
                        </Container>
                    </footer>
                </React.Fragment>
            );
        return result;
    }
}