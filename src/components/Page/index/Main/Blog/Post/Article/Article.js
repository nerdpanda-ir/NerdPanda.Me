/*====   import Sctipt    ====*/
    import React from "react";
    import ArticleImage from "./ArticleImage/ArticleImage";
    import ArticleContent from "./ArticleContent/ArticleContent";
/*====   import Sctipt    ====*/

/*====   import Style   ====*/
    import '../../../../../../../css/Page/index/Main/Blog/Post/Article/Article.css'
/*====   import Style   ====*/


export default class Article extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <article className='col-11 bg-white sh3 br5 posRel'>
                        <ArticleImage/>
                        <ArticleContent />
                    </article>
                </React.Fragment>
            );
        return result;
    }
}