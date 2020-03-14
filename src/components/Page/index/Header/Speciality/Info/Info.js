/*====   import Sctipt    ====*/
    import React from 'react';
    import Col from "../../../../../items/Col/Col";
    import InfoTitle from "./InfoTitle/InfoTitle";
    import InfoDescription from "./InfoDescription/InfoDescription";
/*====   import Sctipt    ====*/
export default class Info extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <Col className='col-6 disIB'>
                        <InfoTitle />
                        <InfoDescription />
                    </Col>
                </React.Fragment>
            );
        return result;
    }
}