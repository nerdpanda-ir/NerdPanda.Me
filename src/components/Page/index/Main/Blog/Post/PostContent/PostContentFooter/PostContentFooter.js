/*====   import Sctipt    ====*/
    import React from "react";
import MoreBtn from "../../../../../../../items/MoreBtn/MoreBtn";
/*====   import Sctipt    ====*/
export default class PostContentFooter extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <footer className='disIB dirL textLeft col-12 boxSBB'>
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
                        <MoreBtn />
                    </footer>
                </React.Fragment>
            );
        return result;
    }
}