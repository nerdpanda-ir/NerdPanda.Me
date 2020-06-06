/*====   import Sctipt    ====*/
import React from 'react';
import Item from "./Item/Item";
/*====   import Sctipt    ====*/
export default class menuList extends React.Component{
    render() {
        let result =
            (
                <ul className='margCenter disB wfc'>
                    <Item title='خانه'/>
                    <Item title='وبلاگ'/>
                    <Item title='نمونه کار ها '/>
                    <Item title='پادکست ها '/>
                </ul>
            );
        return result;
    }
}