/*====   import Sctipt    ====*/
    import React from "react";
    import GraySmall from "../../../../../items/Title/GraySmall/GraySmall";
    import ClearBoth from "../../../../../items/ClearBoth/ClearBoth";
    import TipCircleIcon from "../../../../../items/TipCircleIcon/TipCircleIcon";

/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../css/Page/index/Main/Skill/SkillGroup/SkillGroup.css'
/*====   import Style    ====*/
export default class SkillGroup extends React.Component{
    constructor() {
        super();
        this.state = {body  : null , title : null , icon : null};
    }
    static getDerivedStateFromProps(props)
    {
        return {body : props.children , title : props.title , icon : props.icon};
    }
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='skillGroup posRel bg-white br3 sh3'>
                        <TipCircleIcon className={'skillBtn'}>
                            <i className={this.state.icon+" disN"}></i>
                            <section className='skillPrecent dirL disIB'> 60% </section>
                        </TipCircleIcon>


                        <GraySmall tagName='h4' className='skillTitle h100 col-2 flR textCenter posAb'>
                            {this.state.title}
                        </GraySmall>

                        <section className='skillItemWrapper col-10 flL h100 dirL boxSBB'>
                            {this.state.body}
                        </section>
                        <ClearBoth />
                    </section>
                </React.Fragment>
            );
        return result;
    }
}