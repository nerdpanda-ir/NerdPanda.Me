/*====   import Sctipt    ====*/
import React from 'react';
import Nav from "./Nav/Nav";
/*====   import Sctipt    ====*/
export default class Header extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <header>
                        <Nav />
                    </header>
                </React.Fragment>
            );
        return result;
    }

}