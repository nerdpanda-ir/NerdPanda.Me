/*====   import Sctipt    ====*/
    import React from 'react';
    import GraySmall from "../../../../items/Title/GraySmall/GraySmall";
/*====   import Sctipt    ====*/
export default class CountInfo extends React.Component
{
    render() {
        let result =
            (
                <React.Fragment>
                    <ul className='sh2 bg-white' id='countInfo'>
                        <li className='disIB countCell'>
                            <section className="fal fa-laugh-wink"></section>
                            <GraySmall className='disB' tagName='strong'>مشتریان راضی </GraySmall>
                            <section className='countNumber color'>500</section>
                        </li>
                    </ul>
                </React.Fragment>
            );
        return result;
    }
}