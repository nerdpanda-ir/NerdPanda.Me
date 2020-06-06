/*====   import Sctipt    ====*/
import React from 'react';
import Header from "./Header/Header";
/*====   import Sctipt    ====*/

/*====   import Style   ====*/
import '../../../css/Page/notFound/NotFound.css';
/*====   import Style   ====*/
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