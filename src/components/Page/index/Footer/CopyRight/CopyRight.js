/*====   import Sctipt    ====*/
    import React from 'react';
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../css/Page/index/Footer/CopyRight/CopyRight.css'
import CopyRightText from "./CopyRightText/CopyRightText";
/*====   import Style    ====*/

export default class CopyRight extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='copyRight' className='textCenter'>
                        <CopyRightText />
                    </section>
                </React.Fragment>
            );
        return result;
    }
}
