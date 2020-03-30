/*====   import Sctipt    ====*/
    import React from 'react';
    import Article from "./Article/Article";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../css/Page/index/Main/Blog/Post/Post.css'

/*====   import Style    ====*/
export default class Post extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='col-6 flR'>
                        <Article />
                    </section>
                </React.Fragment>
            );
        return result;
    }
}