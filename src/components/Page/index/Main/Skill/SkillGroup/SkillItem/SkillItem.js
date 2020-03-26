/*====  import Script   ====*/
    import React from "react";
    import SkillItemHeader from "./SkillItemHeader/SkillItemHeader";
    import SkillItemBody from "./SkillItemBody/SkillItemBody";
/*====  import Script   ====*/
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