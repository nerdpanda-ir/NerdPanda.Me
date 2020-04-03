/*====   import Sctipt    ====*/
    import React from 'react';
    import Container from "../../../Container/Container";
/*====   import Sctipt    ====*/
export default class Footer extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <footer>
                        <Container>
                            this is footer
                        </Container>
                    </footer>
                </React.Fragment>
            );
        return result;
    }
}