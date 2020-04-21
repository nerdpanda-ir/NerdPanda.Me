/*====   import Sctipt    ====*/
    import React from 'react';
    import {GlobalContextProvider} from "../../../../../../../GlobalContext/GlobalContext";
    import SocialItem from "./SocialItem/SocialItem";
/*====   import Sctipt    ====*/
export default class SocialContainer extends React.Component {
    render() {
        let result =
            (
                <React.Fragment>
                    <ul className='flR col-9 h100 boxSBB dirL' id='SpecialSocialNetworkWrapper'>
                        <GlobalContextProvider value={{icon : 'fab fa-twitter' , href : 'https://www.google.com'}}>
                            <SocialItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon : 'fab fa-telegram-plane' , href : 'https://www.google.com'}}>
                            <SocialItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon : 'fab fa-instagram' , href : 'https://www.google.com'}}>
                            <SocialItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon : 'fab fa-steam-symbol' , href : 'https://www.google.com'}}>
                            <SocialItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon : 'fab fa-linkedin-in' , href : 'https://www.google.com'}}>
                            <SocialItem />
                        </GlobalContextProvider>
                    </ul>
                </React.Fragment>
            );
        return result;
    }
}