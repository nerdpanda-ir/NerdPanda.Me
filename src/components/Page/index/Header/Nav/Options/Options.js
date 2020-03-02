/*====   import Sctipt    ====*/
    import React from "react";
    import Language from "./Language/Language";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../css/Page/index/Header/Nav/Options/Options.css'
/*====   import Style    ====*/

export default class Options extends React.Component
{
    render() {
        let result =
            (
                <React.Fragment>
                    <section className='disIB h100 col-2 dirL boxSBB' id='navOption'>
                        <Language />
                    </section>
                </React.Fragment>
            );
        return result;
    }
}