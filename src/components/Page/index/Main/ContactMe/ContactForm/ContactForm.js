/*====   import Sctipt    ====*/
    import React from "react";
    import Col from "../../../../../items/Col/Col";
    import Form from "./Form/Form";
/*====   import Sctipt    ====*/
export default class ContactForm extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <Col className='col-6 flR'>
                        <Form />
                    </Col>
                </React.Fragment>
            );
        return result;
    }
}