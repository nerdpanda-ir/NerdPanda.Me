/*====   import Sctipt    ====*/
    import React from 'react';
    import Index from '../Page/index/Index';
    import NotFound from '../Page/NotFound/NotFound';
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
                    <BrowserRouter>
                        <Switch>
                            <Route path='/' exact component={Index} />
                            <Route component={NotFound} />
                        </Switch>
                    </BrowserRouter>
                </React.Fragment>
            );
        return element
    }
}