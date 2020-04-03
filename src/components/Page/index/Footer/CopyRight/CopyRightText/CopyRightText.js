/*====   import Sctipt    ====*/
    import React from "react";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../css/Page/index/Footer/CopyRight/CopyRightText/CopyRightText.css'
/*====   import Style    ====*/
    export default class CopyRightText extends React.Component{
        render() {
            let result =
                (
                    <React.Fragment>
                        <a className='teamWrapper color-main' href='https://luxapps.ir'>
                            طراحی شده توسط
                            <span className='teamName'>
                                LuxApps.ir
                            </span>
                        </a>
                    </React.Fragment>
                );
            return result;
        }
    }
