/*====   import Sctipt    ====*/
    import React from "react";
    import Col from "../../../../../../../items/Col/Col";
    import DropDown from "../../../../../../../../plugins/DropDown/DropDown";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
        import '../../../../../../../../css/Page/index/Main/ContactMe/ContactForm/Form/DropDownElement/DropDownElement.css'
/*====   import Style    ====*/
export default class DropDownElement extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <Col className='inputWrapper col-10 posRel' id='optionsWrapper'>
                        <DropDown setting={{selected : {id: "contactOptionSelect", defaltSelect :3, imgClass : 'contactOptionsIcon'}, arrow : {id : 'contactArrow'}, list : {id : 'contactOptions'  , lablelClass : 'contactOptionLable' , imgClass : 'contactOptionsIcon'}}}>
                            <section className='sh2 br5' id='contactOptionSelect'>
                                <i className="fal fa-sort-down color-secound flL" id="contactArrow"></i>
                            </section>
                            <ul id='contactOptions' className='disN col-12 sh6 bg-white boxSBB posAb'>
                                <li>
                                    <i className="fal fa-theater-masks  contactOptionsIcon"></i>
                                    <span className="contactOptionLable ">پیشنهادات و انتقادات </span>
                                </li>
                                <li>
                                    <i className="fal fa-lightbulb-on contactOptionsIcon"></i>
                                    <span className="contactOptionLable">پروژه</span>
                                </li>
                                <li>
                                    <i className="fal fa-comments-alt-dollar contactOptionsIcon"></i>
                                    <span className="contactOptionLable">مشورت</span>
                                </li>
                                <li>
                                    <i className="fal fa-handshake  contactOptionsIcon"></i>
                                    <span className="contactOptionLable">همکاری</span>
                                </li>
                            </ul>
                        </DropDown>
                    </Col>
                </React.Fragment>
            )
        return result;
    }
}