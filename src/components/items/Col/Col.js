/*====   import Sctipt    ====*/
    import React from "react";
/*====   import Sctipt    ====*/
export default class Col extends React.Component {
    constructor() {
        super();
        this.state = {body :'' ,classList : '' , id : ''};
    }
    static getDerivedStateFromProps(props)
    {
        return {body : props.children , classList:   props.className  , id :props.id};
    }
    render() {
        let result =
            (
                <React.Fragment>
                    <section className={this.state.classList} id={this.state.id}>
                        {
                            this.state.body
                        }
                    </section>
                </React.Fragment>
            );
        return result;
    }
}