/*====   import Sctipt    ====*/
    import React from 'react';
    import Container from "../../../Container/Container";
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
                            this is footer
                        </Container>
                    </footer>
                </React.Fragment>
            );
        return result;
    }
}