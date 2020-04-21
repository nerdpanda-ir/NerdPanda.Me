/*====   import Sctipt    ====*/
    import React from "react";
    import {GlobalContextConsumer} from "../../../../../../../../GlobalContext/GlobalContext";
    import GraySmall from "../../../../../../../../items/Title/GraySmall/GraySmall";
    import BigParagraph from "../../../../../../../../items/Paragraph/BigParagraph/BigParagraph";
/*====   import Sctipt    ====*/
export default class TipContent extends React.Component {
    render() {
        let result =
            (
                    <section className='tipContent'>
                        <GlobalContextConsumer>
                            {
                                value =><React.Fragment><GraySmall tagName='h4'>{value.title}</GraySmall> <BigParagraph className='textCenter'>{value.body}</BigParagraph></React.Fragment>
                            }
                        </GlobalContextConsumer>
                    </section>
            );
        return result;
    }
}