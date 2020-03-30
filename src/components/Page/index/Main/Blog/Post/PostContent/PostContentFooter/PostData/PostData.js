/*====   import Sctipt    ====*/
    import React from "react";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../../../css/Page/index/Main/Blog/Post/PostContent/PostContentFooter/PostData/PostData.css'
/*====   import Style    ====*/
export default class PostData extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <ul>
                        <li>
                            <i className="fal fa-calendar-edit"></i>
                            <span className='iconLable'>1398/10/02</span>
                        </li>
                        <li>
                            <i className="fal fa-comments-alt"></i>
                            <span className='iconLable'>50</span>
                        </li>
                        <li>
                            <i className="fal fa-heart"></i>
                            <span className='iconLable'>50</span>
                        </li>
                    </ul>
                </React.Fragment>
            );
        return result;
    }
}