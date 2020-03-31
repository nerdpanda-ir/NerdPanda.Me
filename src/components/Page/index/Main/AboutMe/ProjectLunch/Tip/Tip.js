/*====   import Sctipt    ====*/
    import React from 'react';
    import Col from "../../../../../../items/Col/Col";
    import BigParagraph from "../../../../../../items/Paragraph/BigParagraph/BigParagraph";
    import GraySmall from "../../../../../../items/Title/GraySmall/GraySmall";
    import TipCircleIcon from "../../../../../../items/TipCircleIcon/TipCircleIcon";
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
                    <Col className='tip br5 sh3 col-11 bg-white dirR posRel boxSBB'>
                        <TipCircleIcon>
                            <i className={this.state.icon}></i>
                        </TipCircleIcon>
                        <section className='tipContent'>
                            <GraySmall tagName='h4'>{this.state.title}</GraySmall>
                            <BigParagraph className='textCenter'>{this.state.body}</BigParagraph>
                        </section>
                    </Col>
                </React.Fragment>
            );
        return result;
    }
}
