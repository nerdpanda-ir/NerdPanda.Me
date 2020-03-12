/*====   import Sctipt    ====*/
    import React from 'react';
/*====   import Sctipt    ====*/
export default class Logo extends React.Component
{
    constructor()
    {
        super();
        this.state = {imageSrc : '' , classList : '' , id: '' ,alt : ''};
    }
    static getDerivedStateFromProps(props)
    {
        return {imageSrc :props.imageSrc , id : props.id , classList : props.className , alt : props.alt}
    }
    render()
    {
        let result = 
        (
            <React.Fragment>
                <section className={this.state.classList} id={this.state.id}>
                    <img src={this.state.imageSrc} alt={this.state.alt}/>
                </section>
            </React.Fragment>
        );
        return result;
    }
}
