import React from 'react';
import '../../css/frameWorks/global/global.css';
import Index from '../Page/index/Index';
export default class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        let element =
            (
                <React.Fragment>
                    <Index />
                </React.Fragment>
            );
        return element
    }
}