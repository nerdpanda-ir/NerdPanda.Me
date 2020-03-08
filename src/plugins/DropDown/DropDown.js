/*====  import Scripts  ====*/
    import React from 'react';
/*====  import Scripts  ====*/
export default class DropDown extends React.Component{
    constructor() {
        super();
        this.state = {};
    }
    static getDerivedStateFromProps(props,state)
    {
        if (!state.hasOwnProperty('body') && !state.hasOwnProperty('setting'))
            return  {body : props.children , setting : props.setting};
        else
            return false
    }
    render() {
        let result =
            (
                <React.Fragment>

                </React.Fragment>
            );
        return result;
    }

}