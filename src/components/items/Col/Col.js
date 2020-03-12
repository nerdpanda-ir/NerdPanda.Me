/*====   import Sctipt    ====*/
    import React from "react";
/*====   import Sctipt    ====*/
export default class Col extends React.Component {
    constructor() {
        super();
        this.state = {body :'' ,classList : ''};
    }
    static getDerivedStateFromProps(props)
    {
        return {body : props.children , classList:   props.className };
    }
    render() {
        let result =
            (
                <React.Fragment>
                    <section className={this.state.classList}>
                        {
                            this.state.body
                        }
                    </section>
                </React.Fragment>
            );
        return result;
    }
}