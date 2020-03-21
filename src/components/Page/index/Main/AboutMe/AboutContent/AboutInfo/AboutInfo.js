/*====   import Sctipt    ====*/
    import React from "react";
    import Col from "../../../../../../items/Col/Col";
    import Title from "./Title/Title";
    import Location from "./Location/Location";
    import Description from "./Description/Description";
    import Favorits from "./Favorits/Favorits";
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
                        <Favorits />
                    </Col>
                </React.Fragment>
            );
        return result;
    }
}
