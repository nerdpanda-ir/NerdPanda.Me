/*====   import Sctipt    ====*/
    import React from "react";  
    import Container from '../../../../Container/Container'
/*====   import Sctipt    ====*/
export default class Nav extends React.Component
{
    render()
    {
        let result = 
        (
            <React.Fragment>
                <nav id='topNav'>
                    <Container className='h100'>
                        Container
                    </Container>
                </nav>
            </React.Fragment>
        );
        return result; 
    }
}