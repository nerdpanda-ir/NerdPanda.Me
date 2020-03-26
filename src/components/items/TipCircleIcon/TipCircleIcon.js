/*====   import Sctipt    ====*/
    import React from "react";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../css/components/items/TipCircleIcon/TipCircleIcon.css'
/*====   import Style    ====*/
export default class TipCircleIcon extends React.Component{
    constructor() {
        super();
        this.state = {classList : null , body : null};
    }
    static getDerivedStateFromProps(props)
    {
        return {classList : ((props.className!==undefined) ? props.className : '' ) , body : props.children};
    }
    render() {
        let result =
            (
                <React.Fragment>
                    <section className={"tipBtn posAb bg-perple-dark color-white sh3 textCenter boxSBB br100 "+this.state.classList}>
                        {this.state.body}
                    </section>
                </React.Fragment>
            );
         return result;
    }
}