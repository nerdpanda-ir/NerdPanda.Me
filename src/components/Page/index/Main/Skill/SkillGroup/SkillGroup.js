/*====   import Sctipt    ====*/
    import React from "react";
    import GraySmall from "../../../../../items/Title/GraySmall/GraySmall";
    import ClearBoth from "../../../../../items/ClearBoth/ClearBoth";
    import Text from "../../../../../items/Text/Text";

/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../css/Page/index/Main/Skill/SkillGroup/SkillGroup.css'
/*====   import Style    ====*/
export default class SkillGroup extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='skillGroup posRel bg-white br3 sh3'>
                        <section className='skillBtn bg-perple-dark color-white posAb br100 textCenter boxSBB'>
                            <i className="fal fa-pencil-paintbrush disN"></i>
                            <section className='skillPrecent dirL disIB'> 60% </section>
                        </section>
                        <GraySmall tagName='h4' className='skillTitle h100 col-2 flR textCenter posAb'>
                            فرانت اند
                        </GraySmall>

                        <section className='skillItemWrapper col-10 flL h100 dirL boxSBB'>

                            <section className='skillItem'>
                                <section className='skillItemHeader'>
                                    <GraySmall tagName='h5' className='flL col-8'>Java Script</GraySmall>
                                    <Text tagName='span' className='flR col-4 dirR'>90 % </Text>
                                    <ClearBoth />
                                </section>
                                <section className='skillItemBody'>
                                    <section className='skillItemAll bg-white-light col-12 disIB'>
                                        <section className='skillItemActive bg-perple-dark col-5 posRel disIB h100'>
                                            <span className='skillItemCheck posAb color-white br100 bg-perple-dark textCenter boxSBB'>
                                                <i className="fal fa-check"></i>
                                            </span>
                                        </section>
                                    </section>
                                </section>
                            </section>

                        </section>
                        <ClearBoth />
                    </section>
                </React.Fragment>
            );
        return result;
    }
}