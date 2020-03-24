/*====   import Sctipt    ====*/
    import React from 'react';
    import BigParagraph from "../../../../../../items/Paragraph/BigParagraph/BigParagraph";
    import GraySmall from "../../../../../../items/Title/GraySmall/GraySmall";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../css/Page/index/Main/ProjectLunch/Tip/Tip.css'

/*====   import Style    ====*/
export default class Tip extends React.Component{
    constructor() {
        super();
        this.state = {body : null , title : null , icon : null };
    }
    static getDerivedStateFromProps(props)
    {
        return {body : props.children , title : props.title , icon : props.icon }
    }
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='tip br3 sh3 col-11 bg-white dirR posRel boxSBB'>
                        <section className='tipBtn posAb bg-perple-dark color-white sh3 textCenter boxSBB br100'>
                            <i className={this.state.icon}></i>
                        </section>
                        <section className='tipContent'>
                            <GraySmall tagName='h4'>{this.state.title}</GraySmall>
                            <BigParagraph className='textCenter'>{this.state.body}</BigParagraph>
                        </section>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}
