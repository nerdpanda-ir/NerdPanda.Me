/*====   import Sctipt    ====*/
    import React from "react";
    import Col from "../../../../../../../items/Col/Col";
    import {GlobalContextConsumer} from "../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

/*====   import Style   ====*/
    import '../../../../../../../../css/Page/index/Main/ContactMe/ContactForm/Form/TextAreaElement/TextAreaElement.css'
/*====   import Style   ====*/

export default class TextAreaElement extends React.Component{
    render() {
        let result=
            (
                    <Col className='inputWrapper posRel col-10'>
                        <GlobalContextConsumer>
                            {
                                value=><React.Fragment><textarea id={value.input.id} className='brN col-12 boxSBB'/><label htmlFor={value.input.id} className='posAb'><i className={value.lable.icon}></i><span className='contactLable'>{value.lable.text}</span></label></React.Fragment>
                            }
                        </GlobalContextConsumer>
                    </Col>
            );
        return result;
    }
}