/*====  Import Script   ====*/
    import React from "react";
/*====  Import Script   ====*/

/*====  Import Style   ====*/
    import '../../../css/components/items/CircleProgress/CircleProgress.css'
/*====  Import Style   ====*/
export default class CircleProgress extends React.Component{
        render() {
            let result =
                (
                    <React.Fragment>
                        <div className="progress-circle  p10 ">
                            <span>99%</span>
                            <div className="left-half-clipper">
                                <div className="first50-bar"></div>
                                <div className="value-bar"></div>
                            </div>
                        </div>
                    </React.Fragment>
                );
            return result;
        }
}