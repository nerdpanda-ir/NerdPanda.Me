/*====   import Sctipt    ====*/
    import React from "react";
    import Icon from "./Icon/Icon";
    import City from "./City/City";
    import Country from "./Country/Country";
/*====   import Sctipt    ====*/

/*====   import Style   ====*/
    import '../../../../../../../../css/Page/index/Main/AboutMe/AboutContent/AboutInfo/Location/Location.css'
/*====   import Style   ====*/
export default class Location extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='location' className='boxSBB'>
                        <Icon />
                        <Country />
                        <City />
                    </section>
                </React.Fragment>
            );
        return result;
    }
}