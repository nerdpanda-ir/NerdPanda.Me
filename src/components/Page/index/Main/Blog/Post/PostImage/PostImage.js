/*====   import Sctipt    ====*/
    import React from "react";
/*====   import Sctipt    ====*/
export default class PostImage extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='articleImage'>
                        <img src="http://localhost:3000/static/media/port4.b22a9f42.jpg" alt="alt" className='col-9 posAb sh5 br5'/>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}