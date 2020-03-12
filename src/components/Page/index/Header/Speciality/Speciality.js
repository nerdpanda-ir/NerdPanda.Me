/*====   import Sctipt    ====*/
    import React from 'react';
    import Container from "../../../../Container/Container";
    import Col from "../../../../items/Col/Col";
/*====   import Sctipt    ====*/

/*====   import Styles    ====*/
    import '../../../../../css/Page/index/Header/Speciality/Speciality.css'
/*====   import Styles    ====*/
export default class Speciality extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='speciality' className='boxSBB'>
                        <Container>
                            <Col className='col-6'>
                                hello im content
                            </Col>
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}