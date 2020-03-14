/*====   import Sctipt    ====*/
    import React from "react";
    import Col from "../../../../../items/Col/Col";
/*====   import Sctipt    ====*/

/*====   import Files    ====*/
    import  fullStackImg from '../../../../../../img/page/index/fullStack.svg';
/*====   import Files    ====*/

export default class MediaItems extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <Col className='disIB col-6'>
                        <img src={fullStackImg} alt='full stack developer'/>
                    </Col>
                </React.Fragment>
            );
        return result;
    }
}