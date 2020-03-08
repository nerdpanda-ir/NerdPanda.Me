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
        window.console.log(props,state)
    }
}