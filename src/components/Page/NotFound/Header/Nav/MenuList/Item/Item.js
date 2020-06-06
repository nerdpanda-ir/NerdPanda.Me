/*====   import Sctipt    ====*/
import React from "react";
/*====   import Sctipt    ====*/
export default class Item extends React.Component{
    constructor() {
        super();
        this.state = {title : ''}
    }
    static getDerivedStateFromProps(props)
    {
        return {title : props.title};
    }
    render() {
        let result =
            (
                <li className='disIB'>
                    {this.state.title}
                </li>
            );
        return result;
    }

}