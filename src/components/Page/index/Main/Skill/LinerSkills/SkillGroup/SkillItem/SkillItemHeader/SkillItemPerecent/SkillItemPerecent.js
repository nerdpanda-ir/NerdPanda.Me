/*====  import Script   ====*/
    import React from "react";
    import {GlobalContextConsumer} from "../../../../../../../../../GlobalContext/GlobalContext";
    import Text from "../../../../../../../../../items/Text/Text";

/*====  import Script   ====*/
export default class SkillItemPerecent extends React.Component{
    render() {
        let result =
            (
                <GlobalContextConsumer>
                    {value=><Text tagName='span' className='flR col-4 dirR skillItemPerecent'>{value.precent} </Text>}
                </GlobalContextConsumer>

            );
        return result;
    }
}