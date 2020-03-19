/*====   import Sctipt    ====*/
    import React from "react";
    import Icon from "./Icon/Icon";
    import City from "./City/City";
    import Country from "./Country/Country";
/*====   import Sctipt    ====*/
export default class Location extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='localtion'>
                        <Icon />
                        <Country />
                        <City />
                    </section>
                </React.Fragment>
            );
        return result;
    }
}