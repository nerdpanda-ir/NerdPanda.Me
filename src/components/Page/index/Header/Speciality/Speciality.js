/*====   import Sctipt    ====*/
    import React from 'react';
    import Container from "../../../../Container/Container";
    import Col from "../../../../items/Col/Col";
    import Text from "../../../../items/Text/Text";
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
                                <Text className='color-secound' tagName='h1'>
                                    فول استک دولوپر
                                </Text>
                            </Col>
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}