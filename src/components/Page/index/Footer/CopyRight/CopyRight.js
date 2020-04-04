/*====   import Sctipt    ====*/
    import React from 'react';
    import CopyRightText from "./CopyRightText/CopyRightText";
    import CopyRightVersion from "./CopyRightVersion/CopyRightVersion";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../css/Page/index/Footer/CopyRight/CopyRight.css'
/*====   import Style    ====*/

export default class CopyRight extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='copyRight' className='textCenter posRel'>
                        <CopyRightText />
                        <CopyRightVersion />
                    </section>
                </React.Fragment>
            );
        return result;
    }
}
