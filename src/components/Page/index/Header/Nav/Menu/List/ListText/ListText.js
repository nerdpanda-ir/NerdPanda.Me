/*====   import Sctipt    ====*/
    import React from 'react';
    import {GlobalContextConsumer} from "../../../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/
export default class ListText extends React.Component
{
    render()
    {
        let result = 
        (
            <React.Fragment>
                <span className='listText'>
                    <GlobalContextConsumer>
                        {
                            (value)=> value.title
                        }
                    </GlobalContextConsumer>
                </span>
            </React.Fragment>
        );
        return result;
    }


}