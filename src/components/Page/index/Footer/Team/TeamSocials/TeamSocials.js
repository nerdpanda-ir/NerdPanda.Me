/*====   import Sctipt    ====*/
    import React from 'react';
    import SocialItem from "./SocialItem/SocialItem";
    import {GlobalContextProvider} from "../../../../../GlobalContext/GlobalContext";
/*====   import Sctipt    ====*/

/*====   import Style    ====*/
    import '../../../../../../css/Page/index/Footer/Team/TeamSocials/TeamSocials.css'
/*====   import Style    ====*/
export default class TeamSocials extends React.Component
{
    render() {
        let result =
            (
                <React.Fragment>
                    <ul id='teamSocial' className='textCenter dirL'>
                        <GlobalContextProvider value={{icon :  'fab fa-facebook-f', link : 'https://www.facebook.com'}}>
                            <SocialItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon :  'fab fa-twitter', link : 'https://www.facebook.com'}}>
                            <SocialItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon :  'fab fa-instagram', link : 'https://www.facebook.com'}}>
                            <SocialItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon :  'fab fa-youtube', link : 'https://www.facebook.com'}}>
                            <SocialItem />
                        </GlobalContextProvider>
                        <GlobalContextProvider value={{icon :  'fab fa-twitch', link : 'https://www.facebook.com'}}>
                            <SocialItem />
                        </GlobalContextProvider>
                    </ul>
                </React.Fragment>
            );
        return result;
    }
}
