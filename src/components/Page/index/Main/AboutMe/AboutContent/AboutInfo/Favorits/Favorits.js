/*====   import Sctipt    ====*/
import React from 'react';
/*====   import Sctipt    ====*/

/*====   import Style  ====*/
    import '../../../../../../../../css/Page/index/Main/AboutMe/AboutContent/AboutInfo/Favorits/Favorits.css'
/*====   import Style  ====*/
export default class Favorits extends React.Component {
    render() {
        let result =
            (
                <React.Fragment>
                    <ul className='dirL' id='favorits'>
                        <li>
                            <i className="fal fa-code"></i>
                        </li>
                        <li>
                            <i className="fal fa-list-music"></i>
                        </li>
                        <li>
                            <i className="fal fa-mug-hot"></i>
                        </li>
                        <li>
                            <i className="far fa-coin"></i>
                        </li>
                        <li>
                            <i className="fal fa-burger-soda"></i>
                        </li>
                    </ul>
                </React.Fragment>
            );
        return result;
    }
}