/*====   import Sctipt    ====*/
    import React from "react";
    import GrayBig from "../../../../../items/Title/GrayBig/GrayBig";
/*====   import Sctipt    ====*/

/*====   import Style   ====*/
    import '../../../../../../css/Page/index/Main/ProjectLunch/ProjectLunch.css'
/*====   import Style   ====*/

export default class ProjectLunch extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='lunch' className='bg-white-light'>
                        <GrayBig tagName='h2' className='disIB col-12'>
                            یک پروژه چگونه لانچ می شود
                        </GrayBig>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}