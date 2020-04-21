/*====   import Sctipt    ====*/
    import React from 'react';
    import Col from "../../../../../../../items/Col/Col";
    import TipIcon from "./TipIcon/TipIcon";
    import TipContent from "./TipContent/TipContent";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../../../css/Page/index/Main/ProjectLunch/Tip/Tip.css'
/*====   import Style    ====*/
export default class Tip extends React.Component{

    render() {
        let result =
            (
                <React.Fragment>
                    <Col className='tip br5 sh3 col-11 bg-white dirR posRel boxSBB'>
                        <TipIcon />
                        <TipContent />
                    </Col>
                </React.Fragment>
            );
        return result;
    }
}
