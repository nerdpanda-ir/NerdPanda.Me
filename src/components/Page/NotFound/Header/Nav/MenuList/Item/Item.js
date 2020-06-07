/*====   import Sctipt    ====*/
import React from "react";
/*====   import Sctipt    ====*/
export default class Item extends React.Component{
    constructor() {
        super();
        this.state = {title : '' , icon : ''}
    }
    static getDerivedStateFromProps(props)
    {
        return {title : props.title , icon : props.icon};
    }
    render() {
        let result =
            (
                <li className='disIB'>
                    <i className={this.state.icon}></i>
                    {this.state.title}
                </li>
            );
        return result;
    }

}