/*====   import Sctipt    ====*/
    import React from 'react';
    import ArticleContentHeader from "./ArticleContentHeader/ArticleContentHeader";
    import ArticleContentMain from "./ArticleContentMain/ArticleContentMain";
    import ArticleContentFooter from "./ArticleContentFooter/ArticleContentFooter";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../../css/Page/index/Main/Blog/Post/Article/ArticleContent/ArticleContent.css'

/*====   import Style    ====*/

export default class ArticleContent extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='articleContent boxSBB'>
                        <ArticleContentHeader />
                        <ArticleContentMain />
                        <ArticleContentFooter />
                    </section>
                </React.Fragment>
            );
        return result;
    }
}
