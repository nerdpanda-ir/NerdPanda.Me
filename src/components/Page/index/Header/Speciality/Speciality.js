/*====   import Sctipt    ====*/
    import React from 'react';
    import Container from "../../../../Container/Container";
    import Info from "./Info/Info";
    import MediaItems from "./MediaItems/MediaItems";
/*====   import Sctipt    ====*/

/*====   import Styles    ====*/
    import '../../../../../css/Page/index/Header/Speciality/Speciality.css'
import ClearBoth from "../../../../items/ClearBoth/ClearBoth";
/*====   import Styles    ====*/
export default class Speciality extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='speciality' className='boxSBB'>
                        <Container>
                            <Info />
                            <MediaItems />
                            <ClearBoth />
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}