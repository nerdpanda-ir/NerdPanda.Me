/*====   import Sctipt    ====*/
    import React from 'react';
/*====   import Sctipt    ====*/
export default class SocialContainer extends React.Component {
    render() {
        let result =
            (
                <React.Fragment>
                    <ul className='flR col-9 h100 boxSBB dirL' id='SpecialSocialNetworkWrapper'>
                        <li><a href='https://www.google.com' className='btn' ><i className="fab fa-twitter"></i></a></li>
                        <li><a href='https://www.google.com' className='btn' ><i className="fab fa-telegram-plane"></i></a></li>
                        <li><a href='https://www.google.com' className='btn' ><i className="fab fa-instagram"></i></a></li>
                        <li><a href='https://www.google.com' className='btn'><i className="fab fa-steam-symbol"></i></a></li>
                    </ul>
                </React.Fragment>
            );
        return result;
    }
}