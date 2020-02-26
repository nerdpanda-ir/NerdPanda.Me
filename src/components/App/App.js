/*====   import Sctipt    ====*/
    import React from 'react';
    import Index from '../Page/index/Index';
    import {BrowserRouter,Route,Switch} from 'react-router-dom';
/*====   import Sctipt    ====*/

/*====   import Styles    ====*/
    import '../../css/frameWorks/global/global.css';
/*====   import Styles    ====*/


export default class App extends React.Component {
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