/*====   import Sctipt    ====*/
    import React from 'react';
    import {ListInfoConsumer} from "../../ListInfoContext/ListInfo";
/*====   import Sctipt    ====*/
export default class ListIcon extends React.Component
{
    render()
    {
        let result = 
        (
            <React.Fragment>
                <ListInfoConsumer>
                    {(value)=><i className={"menuIcon "+value[1]}></i>}
                </ListInfoConsumer>
            </React.Fragment>
        )
        return result;
    }
}