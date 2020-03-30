/*====   import Sctipt    ====*/
    import React from 'react';
    import PostImage from "./PostImage/PostImage";
    import PostContent from "./PostContent/PostContent";
/*====   import Sctipt    ====*/
export default class Post extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='col-6 flR'>
                        <article className='col-11 bg-white sh3 br5 posRel boxSBB'>
                            <PostImage />
                            <PostContent />
                        </article>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}