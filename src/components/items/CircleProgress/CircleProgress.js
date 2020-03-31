/*====  Import Script   ====*/
    import React from "react";
    import Col from "../Col/Col";
    import GraySmall from "../Title/GraySmall/GraySmall";
    import {GlobalContextConsumer} from "../../GlobalContext/GlobalContext";
/*====  Import Script   ====*/

/*====  Import Style   ====*/
    import '../../../css/components/items/CircleProgress/CircleProgress.css'
/*====  Import Style   ====*/
export default class CircleProgress extends React.Component{
        render() {
            let result =
                (
                    <React.Fragment>
                        <GlobalContextConsumer>
                            {
                                value =>
                                {
                                    let precent = value.precent.replace('%','');
                                    precent = precent+' '+((precent>50) ? 'over50' : '');
                                    let result =
                                        (
                                            <React.Fragment>
                                                <Col  className='circleProgress col-2 disIB'>
                                                    <div className={"margCenter progress-circle  p"+precent}>
                                                        <span>{value.precent}</span>
                                                        <div className="left-half-clipper">
                                                            <div className="first50-bar"></div>
                                                            <div className="value-bar"></div>
                                                        </div>
                                                    </div>
                                                    <GraySmall tagName='h4' className='circleProgressTitle col-12 '> {value.title}</GraySmall>
                                                </Col>
                                            </React.Fragment>
                                        );
                                    return result;

                                }
                            }
                        </GlobalContextConsumer>

                    </React.Fragment>
                );
            return result;
        }
}