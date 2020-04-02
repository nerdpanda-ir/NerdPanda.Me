/*====   import Sctipt    ====*/
    import React from "react";
    import Col from "../../../../../items/Col/Col";
    import VectorImg from "../../../../../items/VectorImg/VectorImg";
/*====   import Sctipt    ====*/


/*====   import Files    ====*/
    import contactImg from "../../../../../../img/page/index/contactMe.svg";
/*====   import Files    ====*/
    export default class ContactMedia extends React.Component
    {
        render() {
            let result =
                (
                    <React.Fragment>
                        <Col className='col-6 flR dirL' id='contactMedia'>
                            <VectorImg src={contactImg} alt='contactMe'/>
                        </Col>
                    </React.Fragment>
                );
            return result;
        }
    }