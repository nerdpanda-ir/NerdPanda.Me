/*====   import Sctipt    ====*/
    import React from "react";
    import PostData from "./PostData/PostData";
    import MoreBtn from "../../../../../../../items/MoreBtn/MoreBtn";
/*====   import Sctipt    ====*/
export default class PostContentFooter extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <footer className='disIB dirL textLeft col-12 boxSBB'>
                        <PostData />
                        <MoreBtn />
                    </footer>
                </React.Fragment>
            );
        return result;
    }
}