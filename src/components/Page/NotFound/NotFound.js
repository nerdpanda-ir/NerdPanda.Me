/*====   import Sctipt    ====*/
import React from 'react';
import Header from "./Header/Header";
/*====   import Sctipt    ====*/
export default class NotFound extends React.Component
{
    render()
    {
        let result = 
        (
            <section id='notFound'>
                <Header />
                <h1>گشتم نبود نگرد نیست !!!!‌ </h1>
            </section>
        );
        return result; 
    }
}