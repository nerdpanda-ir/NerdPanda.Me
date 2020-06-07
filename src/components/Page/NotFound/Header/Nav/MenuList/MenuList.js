/*====   import Sctipt    ====*/
import React from 'react';
import Item from "./Item/Item";
/*====   import Sctipt    ====*/
export default class menuList extends React.Component{
    render() {
        let result =
            (
                <ul className='margCenter disB wfc'>
                    <Item title='خانه' icon='fal fa-home-heart'/>
                    <Item title='وبلاگ' icon='fal fa-newspaper'/>
                    <Item title='نمونه کار ها ' icon='fal fa-handshake'/>
                    <Item title='تماس با من' icon='fal fa-comments-dollar'/>
                    <Item title='پادکست ها ' icon='fal fa-microphone-alt'/>
                </ul>
            );
        return result;
    }
}