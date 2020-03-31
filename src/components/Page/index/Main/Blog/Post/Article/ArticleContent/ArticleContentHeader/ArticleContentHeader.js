/*====   import Sctipt    ====*/
    import React from "react";
    import PerpleSmall from "../../../../../../../../items/Title/PerpleSmall/PerpleSmall";
    import {GlobalContextConsumer} from "../../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../../../css/Page/index/Main/Blog/Post/Article/ArticleContent/ArticleContentHeader/ArticleContentHeader.css'
/*====   import Style    ====*/

export default class ArticleContentHeader extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <header className='disIB col-12'>
                        <PerpleSmall tagName='h3'>
                            <GlobalContextConsumer>
                                {
                                    value => value.title
                                }
                            </GlobalContextConsumer>
                        </PerpleSmall>
                    </header>
                </React.Fragment>
            );
        return result ;
    }
}