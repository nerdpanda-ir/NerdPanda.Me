/*====   import Sctipt    ====*/
    import React from 'react';
    import Col from "../../../../../items/Col/Col";
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
                    <Col className='col-6 flR'>
                        <Article />
                    </Col>
                </React.Fragment>
            );
        return result;
    }
}