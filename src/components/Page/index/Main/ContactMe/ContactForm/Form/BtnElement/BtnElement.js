/*====   import Sctipt    ====*/
    import React from "react";
    import Col from "../../../../../../../items/Col/Col";
    import {GlobalContextConsumer} from "../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../../css/Page/index/Main/ContactMe/ContactForm/Form/BtnElement/BtnElement.css'
/*====   import Style    ====*/

export default class BtnElement extends React.Component{
    render() {
        let result =
            (
                <Col className='inputWrapper posRel col-10 textCenter'>
                    <button className='btn bg-perple-dark color-white col-5 brN sh4'>
                        <GlobalContextConsumer>
                            {
                                value=> <React.Fragment><i className={value.icon}></i>{value.text}</React.Fragment>
                            }
                        </GlobalContextConsumer>
                    </button>
                </Col>
            );
        return result;
    }
}
/*
*/
