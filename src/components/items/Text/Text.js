/*====   import Sctipt    ====*/
import React from 'react';
/*====   import Sctipt    ====*/

export default class Title extends React.Component{
    constructor() {
        super();
        this.state = {tagName : '' , body : '' , classList : ''}
    }
    static getDerivedStateFromProps(props)
    {
        return {tagName : props.tagName , classList:  props.className , body:  props.children};
    }
    render() {

        let Tag =this.state.tagName;
        let result =
            (
                <React.Fragment>
                    <Tag className={this.state.classList}> {this.state.body} </Tag>
                </React.Fragment>
            );
        return result;
    }
}