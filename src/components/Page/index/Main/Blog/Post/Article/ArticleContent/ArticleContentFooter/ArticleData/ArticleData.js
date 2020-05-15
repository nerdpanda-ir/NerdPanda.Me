/*====   import Sctipt    ====*/
    import React from "react";
    import {GlobalContextProvider} from "../../../../../../../../../GlobalContext/GlobalContext";
    import ArticleDataItem from "./ArticleDataItem/ArticleDataItem";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../../../../css/Page/index/Main/Blog/Post/Article/ArticleContent/ArticleContentFooter/ArticleData/ArticleData.css'
/*====   import Style    ====*/
export default class ArticleData extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <ul>
                        <GlobalContextProvider value={{icon : 'fal fa-calendar-edit' , value : '1398/10/02'}}>
                            <ArticleDataItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon : 'fal fa-comments-alt' , value : '50'}}>
                            <ArticleDataItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon : 'fal fa-heart' , value : '55'}}>
                            <ArticleDataItem />
                        </GlobalContextProvider>
                    </ul>
                </React.Fragment>
            );
        return result;
    }
}