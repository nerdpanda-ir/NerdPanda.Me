/*====  import Script   ====*/
    import React from "react";
import {GlobalContextConsumer} from "../../../../../../../../GlobalContext/GlobalContext";
/*====  import Script   ====*/


/*====  import Style  ====*/
    import '../../../../../../../../../css/Page/index/Main/Skill/LinerSkills/SkillGroup/SkillItem/SkillItemBody/SkillItemBody.css'
/*====  import Style  ====*/
export default class SkillItemBody extends React.Component{
    render() {
        let style = {width : ''};
        let result =
            (
                <React.Fragment>
                    <GlobalContextConsumer>
                        {value =>{ style.width  = value.precent  ; window.console.log(style)}}
                    </GlobalContextConsumer>
                    <section className='skillItemBody'>
                        <section className='skillItemAll bg-white-dark col-12 disIB'>
                            <section className='skillItemActive bg-perple-dark posRel disIB h100' style={style}>
                                   <span className='skillItemCheck posAb color-white br100 bg-perple-dark textCenter boxSBB'>
                                         <i className="fal fa-check"></i>
                                   </span>
                            </section>
                        </section>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}