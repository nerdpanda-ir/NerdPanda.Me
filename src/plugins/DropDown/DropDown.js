/*====   import Sctipt    ====*/
    import React from 'react';
/*====   import Sctipt    ====*/
export default class DropDown extends React.Component {
    constructor() {
        super();
        this.state  = {body : ''};
    }
    static getDerivedStateFromProps(props)
    {
        return {body : props.children};
    }
    render() {
        let result =
            (
                <React.Fragment>
                    {this.state.body}
                </React.Fragment>
            );
        return result;
    }
}