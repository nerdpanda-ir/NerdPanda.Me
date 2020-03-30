/*====   import Sctipt    ====*/
    import React from "react";
    import BigParagraph from "../../../../../../../items/Paragraph/BigParagraph/BigParagraph";
    import {GlobalContextConsumer} from "../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../../css/Page/index/Main/Blog/Post/PostContent/PostContentMain/PostContentMain.css'
/*====   import Style    ====*/

export default  class PostContentMain extends React.Component
{
    render() {
        let result =
            (
                <React.Fragment>
                    <main>
                        <BigParagraph>
                            <GlobalContextConsumer>
                                {
                                    value=>value.content
                                }
                            </GlobalContextConsumer>
                        </BigParagraph>
                    </main>
                </React.Fragment>
            );
         return result;
    }
}
