/*====   import Sctipt    ====*/
    import React from "react";
    import GraySmall from "../../../../../../items/Title/GraySmall/GraySmall";
    import ClearBoth from "../../../../../../items/ClearBoth/ClearBoth";
    import TipCircleIcon from "../../../../../../items/TipCircleIcon/TipCircleIcon";

/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../css/Page/index/Main/Skill/LinerSkills/SkillGroup/SkillGroup.css'
/*====   import Style    ====*/
export default class SkillGroup extends React.Component{
    constructor() {
        super();
        this.state = {body  : null , title : null , icon : null , skillAv : 0 };
        this.elements  = { skillItemWrapperElement : React.createRef() , precentElements : null}
    }
    static getDerivedStateFromProps(props)
    {
        return {body : props.children , title : props.title , icon : props.icon};
    }
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='skillGroup posRel bg-white br5 sh3'>
                        <TipCircleIcon className='skillBtn'>
                            <i className={this.state.icon+" disN"}></i>
                            <section className='skillPrecent dirL disIB'>{this.state.skillAv}</section>
                        </TipCircleIcon>


                        <GraySmall tagName='h4' className='skillTitle col-2 flR textCenter posAb'>
                            {this.state.title}
                        </GraySmall>
                        <section className='skillItemWrapper col-10 flL h100 dirL boxSBB' ref={this.elements.skillItemWrapperElement}>
                            {this.state.body}
                        </section>
                        <ClearBoth />
                    </section>
                </React.Fragment>
            );
        return result;
    }
    componentDidMount() {
        this.elements.precentElements = this.elements.skillItemWrapperElement.current.querySelectorAll('.skillItemPerecent');
        this.elements.precentElements.forEach(this.precentsIteration , this);

    }
    componentDidUpdate() {

        if (this.state.skillAv>0)
            this.setState({skillAv : window.Math.trunc(this.state.skillAv / this.elements.precentElements.length) + '%'});
    }
    precentsIteration(element)
    {
        this.setState(
           (ps)=>
           {
               let newState ={skillAv:  ps.skillAv + this.precentToNumber(element.innerText)};
                return newState;
           }
            );
    }
    precentToNumber(precent)
    {
        return window.Number(precent.replace('%',''));
    }

}