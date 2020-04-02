/*====   import Sctipt    ====*/
    import React from "react";
    import Col from "../../../../../../../items/Col/Col";
    import {GlobalContextConsumer} from "../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/
export default class InputElement extends React.Component{
    render() {
        let result =
            (
                    <Col className='inputWrapper posRel col-10'>
                        <GlobalContextConsumer>
                            {
                                value => <React.Fragment><input type='text' className='brN col-12 boxSBB' id={value.input.id}/><label htmlFor={value.input.id} className='posAb'><i className={value.lable.icon}></i><span className='contactLable'>{value.lable.text}</span></label></React.Fragment>
                            }
                        </GlobalContextConsumer>

                    </Col>
            );
        return result;
    }
}