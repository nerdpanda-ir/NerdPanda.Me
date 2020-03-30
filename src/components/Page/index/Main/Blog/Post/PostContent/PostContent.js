/*====   import Sctipt    ====*/
    import React from 'react';
    import PostContentHeader from "./PostContentHeader/PostContentHeader";
    import PostContentMain from "./PostContentMain/PostContentMain";
    import PostContentFooter from "./PostContentFooter/PostContentFooter";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../css/Page/index/Main/Blog/Post/PostContent/PostContent.css'
/*====   import Style    ====*/

export default class PostContent extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='articleContent boxSBB'>
                        <PostContentHeader />
                        <PostContentMain />
                        <PostContentFooter />
                    </section>
                </React.Fragment>
            );
        return result;
    }
}
