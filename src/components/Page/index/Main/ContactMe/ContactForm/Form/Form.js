/*====   import Sctipt    ====*/
    import React from "react";
    import InputElement from "./InputElement/InputElement";
    import {GlobalContextProvider} from "../../../../../../GlobalContext/GlobalContext";
    import TextAreaElement from "./TextAreaElement/TextAreaElement";
    import DropDownElement from "./DropDownElement/DropDownElement";
    import BtnElement from "./BtnElement/BtnElement";
/*====   import Sctipt    ====*/
export default class Form extends React.Component{
    constructor() {
        super();
        this.elements ={formElement : React.createRef()}
    }
    render() {
        let result =
            (
                <React.Fragment>
                    <form className='col-11' autoComplete='off' ref={this.elements.formElement}>
                        <GlobalContextProvider value={{lable : {icon :'fal fa-user', text :'نام' } , input : {id : 'nickName'}}}>
                            <InputElement />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{lable : {icon :'fal fa-envelope-open', text :'ایمیل' } , input : {id : 'email'}}}>
                            <InputElement />
                        </GlobalContextProvider>
                        <DropDownElement />
                        <GlobalContextProvider value={{lable : {icon :'fal fa-comment-lines', text :'پیام' } , input : {id : 'msg'}}}>
                            <TextAreaElement />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon :'fal fa-paper-plane' , text : 'ارسال'}}>
                            <BtnElement />
                        </GlobalContextProvider>
                    </form>
                </React.Fragment>
            );
        return result;
    }
    componentDidMount() {
        this.elements.formElement.current.addEventListener('submit',this.formSubmitHandler)
    }
    formSubmitHandler(ev)
    {
        ev.preventDefault();
        window.alert('متاسفانه ارتباط با سرور برقرار نیست لطفا بعدا تلاش کنید !!!!‌by')
    }
}