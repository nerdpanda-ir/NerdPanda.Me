/*====   import Sctipt    ====*/
    import React from "react";
    import GrayBig from "../../../../items/Title/GrayBig/GrayBig";
    import Container from "../../../../Container/Container";
    import Col from "../../../../items/Col/Col";
    import ClearBoth from "../../../../items/ClearBoth/ClearBoth";
    import VectorImg from "../../../../items/VectorImg/VectorImg";
    import DropDown from "../../../../../plugins/DropDown/DropDown";

/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../css/Page/index/Main/ContactMe/ContactMe.css';
/*====   import Style    ====*/

/*====   import Files   ====*/
    import contactImg from '../../../../../img/page/index/contactMe.svg'
/*====   import Files   ====*/
export default class ContactMe extends React.Component{
    constructor() {
        super();
        this.elements = {form : React.createRef()}
    }
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='contactMe'>
                        <GrayBig tagName='h2'>تماس با من </GrayBig>
                        <Container>
                            <Col className='col-6 flR'>
                                <form className='col-11' autoComplete='off' ref={this.elements.form}>
                                    <Col className='inputWrapper posRel col-10'>
                                        <input type="text" id='nickName' className='col-12 boxSBB'/>
                                        <label htmlFor='nickName' className='posAb'>
                                            <i className="fal fa-user"></i>
                                            <span className='contactLable'>
                                                نام
                                            </span>
                                        </label>
                                    </Col>
                                    <Col className='inputWrapper posRel col-10'>
                                        <input type="text" id='email' className='col-12 boxSBB'/>
                                        <label htmlFor='email' className='posAb'>
                                            <i className="fal fa-envelope-open"></i>
                                            <span className='contactLable'>
                                                ایمیل
                                            </span>
                                        </label>
                                    </Col>
                                    <Col className='inputWrapper col-10 posRel' id='optionsWrapper'>
                                        {/*                                      <label>
                                            <i className="fal fa-user"></i>
                                            <span className='contactLable'>
                                                موضوع
                                            </span>
                                        </label>*/}
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
                                    <Col className='inputWrapper posRel col-10'>
                                        <textarea id='msg' className='col-12 boxSBB'/>
                                        <label htmlFor='msg' className='posAb'>
                                            <i className="fal fa-comment-lines"></i>
                                            <span className='contactLable'>
                                                پیام
                                            </span>
                                        </label>
                                    </Col>
                                    <Col className='inputWrapper posRel col-10 textCenter'>
                                        <button className='btn bg-perple-dark color-white col-5 brN sh4'>
                                            <i className="fal fa-paper-plane"></i>
                                            ارسال پیام
                                        </button>
                                    </Col>

                                </form>
                            </Col>
                            <Col className='col-6 flR dirL' id='contactMedia'>
                                <VectorImg src={contactImg} alt='contactMe'/>
                            </Col>
                            <ClearBoth />
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
    componentDidMount() {
        this.elements.form.current.addEventListener('submit',this.submitEventHandler)
    }
    submitEventHandler(ev)
    {
        ev.preventDefault();
        window.alert('متاسفانه ارتباط با سرور برقرار نیست لطفا بعدا تلاش فرمایید ')

    }
}