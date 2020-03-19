
/*====   import Sctipt    ====*/
    import React from "react";
    import Col from "../../../../../../items/Col/Col";
    import VectorImg from "../../../../../../items/VectorImg/VectorImg";

/*====   import Sctipt    ====*/


/*====   import Files    ====*/
    import aboutImg from "../../../../../../../img/page/index/about.svg";
/*====   import Files    ====*/


export default class AboutMedia extends React.Component{
    render() {
        let result =
            (
                <Col className='col-6 flR  dirL'>
                    <VectorImg src={aboutImg} alt='aboutMe' />
                </Col>
            );
        return result;
    }
}