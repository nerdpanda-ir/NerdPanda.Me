/*====  import Scripts  ====*/
    import React from 'react';
/*====  import Scripts  ====*/
export default class DropDown extends React.Component{
    constructor() {
        super();
        this.state = {};
        this.setting =
            {
                arrow : {id : 'arrow' , openClass : 'fa-sort-up' , closeClass : 'fa-sort-down'},
                selected : {id : 'select' , defaltSelect : 0},
                list : {id : 'list'} ,
                callBacks : {selecting : null}
            }
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
                    {
                        this.state.body
                    }
                </React.Fragment>
            );
        return result;
    }

}