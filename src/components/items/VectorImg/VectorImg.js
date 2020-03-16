/*====   import Sctipt    ====*/
    import React from 'react';
/*====   import Sctipt    ====*/
export default class VectorImg extends React.Component{
    constructor() {
        super();
        this.state = {img : null , alt : null , id : null , classList : null  };
    }
    static getDerivedStateFromProps(props)
    {
        return {img : props.src , alt : props.alt , id : props.id , classList:((props.className!== undefined) ?props.className : '' )};
    }
    render() {
        let result =
            (
                <React.Fragment>
                    <img src={this.state.img} alt={this.state.alt} id={this.state.id} className={'vectorImg col-11 '+this.state.classList} />
                </React.Fragment>
            );
        return result;
    }
}