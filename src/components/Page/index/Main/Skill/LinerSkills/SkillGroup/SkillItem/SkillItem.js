/*====  import Script   ====*/
    import React from "react";
    import SkillItemHeader from "./SkillItemHeader/SkillItemHeader";
    import SkillItemBody from "./SkillItemBody/SkillItemBody";
/*====  import Script   ====*/

/*====  import Style  ====*/
    import '../../../../../../../../css/Page/index/Main/Skill/LinerSkills/SkillGroup/SkillItem/SkillItem.css'
/*====  import Style  ====*/
export default class SkillItem extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='skillItem'>
                        <SkillItemHeader />
                        <SkillItemBody />
                    </section>
                </React.Fragment>
            );
        return result;

    }
}