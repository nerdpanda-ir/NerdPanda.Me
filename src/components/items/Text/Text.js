/*====   import Sctipt    ====*/
import React from 'react';
/*====   import Sctipt    ====*/

export default class Text extends React.Component{
    constructor() {
        super();
        this.state = {tagName : '' , body : '' , classList : '' , id : ''}
    }
    static getDerivedStateFromProps(props)
    {
        return {tagName : props.tagName , classList:  props.className , body:  props.children , id : props.id };
    }
    render() {

        let Tag =this.state.tagName;
        let result =
            (
                <React.Fragment>
                    <Tag className={this.state.classList} id={this.state.id}> {this.state.body} </Tag>
                </React.Fragment>
            );
        return result;
    }
}