/*====   import Sctipt    ====*/
    import React from 'react';
    import CountCell from "./CountCell/CountCell";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../css/Page/index/Footer/CountInfo/CountInfo.css'
/*====   import Style    ====*/

export default class CountInfo extends React.Component
{
    render() {
        let result =
            (
                <React.Fragment>
                    <ul className='sh2 bg-white br5 boxSBB' id='countInfo'>
                        <CountCell />
                    </ul>
                </React.Fragment>
            );
        return result;
    }
}