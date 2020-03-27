/*====  import Script   ====*/
    import React from 'react'
import GraySmall from "../../../../../../../../items/Title/GraySmall/GraySmall";
import {GlobalContextConsumer} from "../../../../../../../../GlobalContext/GlobalContext";
/*====  import Script   ====*/
export default class SkillItemTitle extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <GlobalContextConsumer>
                        {value=><GraySmall tagName='h5' className='flL col-8'>{value.title}</GraySmall>}
                    </GlobalContextConsumer>

                </React.Fragment>
            );
        return result;
    }
}
