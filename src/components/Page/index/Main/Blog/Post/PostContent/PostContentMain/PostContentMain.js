/*====   import Sctipt    ====*/
    import React from "react";
    import BigParagraph from "../../../../../../../items/Paragraph/BigParagraph/BigParagraph";
/*====   import Sctipt    ====*/
export default  class PostContentMain extends React.Component
{
    render() {
        let result =
            (
                <React.Fragment>
                    <main>
                        <BigParagraph>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است....
                        </BigParagraph>
                    </main>
                </React.Fragment>
            );
         return result;
    }
}
