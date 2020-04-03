/*====   import Sctipt    ====*/
    import React from 'react';
    import CountCell from "./CountCell/CountCell";
    import {GlobalContextProvider} from "../../../../GlobalContext/GlobalContext";
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
                    <ul className='sh2 bg-white br5 boxSBB posAb col-12 t0' id='countInfo'>
                        <GlobalContextProvider value={{icon : 'fal fa-laugh-wink' , title : 'مشتریان راضی', number : '20'}}>
                            <CountCell />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon : 'fal fa-project-diagram' , title : 'پروژه ها', number : '20'}}>
                            <CountCell />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon : 'fal fa-alarm-clock' , title : 'ساعات کاری', number : '1527'}}>
                            <CountCell />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon : 'fal fa-camera-retro  ' , title : 'اسکرین شات ها', number : '400'}}>
                            <CountCell />
                        </GlobalContextProvider>
                    </ul>
                </React.Fragment>
            );
        return result;
    }
}