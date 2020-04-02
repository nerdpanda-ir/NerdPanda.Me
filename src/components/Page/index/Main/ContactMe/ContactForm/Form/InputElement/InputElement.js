/*====   import Sctipt    ====*/
    import React from "react";
    import Col from "../../../../../../../items/Col/Col";
/*====   import Sctipt    ====*/
export default class InputElement extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <Col className='inputWrapper posRel col-10'>
                        <input type="text" id='nickName' className='col-12 boxSBB'/>
                        <label htmlFor='nickName' className='posAb'>
                            <i className="fal fa-user"></i>
                            <span className='contactLable'>
                                نام
                             </span>
                        </label>
                    </Col>
                </React.Fragment>
            );
        return result;
    }
}