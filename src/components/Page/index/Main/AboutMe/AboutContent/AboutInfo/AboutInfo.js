/*====   import Sctipt    ====*/
    import React from "react";
    import Col from "../../../../../../items/Col/Col";
    import Title from "./Title/Title";
    import Location from "./Location/Location";
    import Description from "./Description/Description";
/*====   import Sctipt    ====*/
export default class AboutInfo extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <Col className='col-6 flR'>
                        <Title />
                        <Location />
                        <Description />
                    </Col>
                </React.Fragment>
            );
        return result;
    }
}
