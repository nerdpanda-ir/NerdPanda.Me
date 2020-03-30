/*====   import Sctipt    ====*/
    import React from "react";
    import {GlobalContextConsumer} from "../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../../css/Page/index/Main/Blog/Post/Article/ArticleImage/ArticleImage.css'
/*====   import Style    ====*/
export default class ArticleImage extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='articleImage'>
                        <GlobalContextConsumer>
                            {
                                value=><img src={value.img} alt={value.alt} className='col-9 posAb sh5 br5'/>
                            }
                        </GlobalContextConsumer>

                    </section>
                </React.Fragment>
            );
        return result;
    }
}