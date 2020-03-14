/*====   import Sctipt    ====*/
    import React from 'react';
    import Container from "../../../../Container/Container";
    import Info from "./Info/Info";
/*====   import Sctipt    ====*/

/*====   import Styles    ====*/
    import '../../../../../css/Page/index/Header/Speciality/Speciality.css'
/*====   import Styles    ====*/
export default class Speciality extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section id='speciality' className='boxSBB'>
                        <Container>
                            <Info />
                        </Container>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}