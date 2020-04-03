/*====   import Sctipt    ====*/
    import React from 'react';
    import CountIcon from "./CountIcon/CountIcon";
    import CountTitle from "./CountTitle/CountTitle";
    import CountNumber from "./CountNumber/CountNumber";
/*====   import Sctipt    ====*/
export default class CountCell extends React.Component{
    render() {
        let result =
            (
                <React.Fragment>
                    <li className='disIB countCell col-3 textCenter'>
                        <CountIcon />
                        <CountTitle />
                        <CountNumber />
                    </li>
                </React.Fragment>
            );
        return result;
    }
}