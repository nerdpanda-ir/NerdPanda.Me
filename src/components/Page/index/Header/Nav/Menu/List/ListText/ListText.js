/*====   import Sctipt    ====*/
    import React from 'react';
    import  {ListInfoConsumer} from "../../ListInfoContext/ListInfo";
/*====   import Sctipt    ====*/
export default class ListText extends React.Component
{
    render()
    {
        let result = 
        (
            <React.Fragment>
                <span className='listText'>
                    <ListInfoConsumer>
                        {
                            (value)=> value[0]
                        }
                    </ListInfoConsumer>
                </span>
            </React.Fragment>
        );
        return result;
    }


}