/*====   import Sctipt    ====*/
    import React from "react";
    import Text from "../../Text/Text";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../css/components/items/Title/grayBig/grayBig.css'
/*====   import Style    ====*/
export default class GrayBig extends React.Component{
    constructor() {
        super();
        this.state = {body : null , tagName : null , id : null , classList : null } ;
    }
    static getDerivedStateFromProps(props)
    {
        return {body:  props.children , tagName: props.tagName , id : props.id , classList:  ((props.className!==undefined) ?props.className : '')};
    }
    render() {
        let result =
            (
                <React.Fragment>
                    <Text tagName={this.state.tagName} className={'grayBig color-main textCenter '+this.state.classList} id={this.state.id}>{this.state.body}</Text>
                </React.Fragment>
            );
        return result;
    }
}