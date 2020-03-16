/*====   import Sctipt    ====*/
    import React from 'react';
    import Text from "../../Text/Text";
/*====   import Sctipt    ====*/

/*====   import Style ====*/
    import '../../../../css/components/items/Title/PerpleBig/PerpleBig.css'
/*====   import Style ====*/
export default class PerpleBig extends React.Component{
    constructor() {
        super();
        this.state = {body : null , tagName : null , classList : null , id : null };
    }
    static getDerivedStateFromProps(props)
    {
        return {body : props.children , tagName: props.tagName , classList:  ((props.className!==undefined) ? props.className : '') , id: props.id}
    }
    render() {
        let result =
            (
                <React.Fragment>
                    <Text tagName={this.state.tagName} className={'color-secound perpleBig '+this.state.classList} id={this.state.id}> {this.state.body}</Text>
                </React.Fragment>
            );
        return result;
    }
}