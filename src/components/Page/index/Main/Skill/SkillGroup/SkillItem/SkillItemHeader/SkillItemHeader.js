/*====  import Script   ====*/
    import React from "react";
    import ClearBoth from "../../../../../../../items/ClearBoth/ClearBoth";
    import SkillItemTitle from "./SkillItemTitle/SkillItemTitle";
    import SkillItemPerecent from "./SkillItemPerecent/SkillItemPerecent";
/*====  import Script   ====*/


/*====  import Style   ====*/
    import '../../../../../../../../css/Page/index/Main/Skill/SkillGroup/SkillItem/SkillItemHeader/SkillItemHeader.css'
/*====  import Style   ====*/

export default class SkillItemHeader extends React.Component{
    render() {
        let result =
            (
                <section className='skillItemHeader'>
                    <SkillItemTitle />
                    <SkillItemPerecent />
                    <ClearBoth />
                </section>
            );
        return result;
    }
}