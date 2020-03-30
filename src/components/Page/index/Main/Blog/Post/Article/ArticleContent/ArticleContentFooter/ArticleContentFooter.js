/*====   import Sctipt    ====*/
    import React from "react";
    import MoreBtn from "../../../../../../../../items/MoreBtn/MoreBtn";
    import ArticleData from "./ArticleData/ArticleData";
/*====   import Sctipt    ====*/


/*====   import Style    ====*/
    import '../../../../../../../../../css/Page/index/Main/Blog/Post/Article/ArticleContent/ArticleContentFooter/ArticleContentFooter.css'
/*====   import Style    ====*/


export default class ArticleContentFooter extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <footer className='disIB dirL textLeft col-12'>
                        <ArticleData />
                        <MoreBtn />
                    </footer>
                </React.Fragment>
            );
        return result;
    }
}