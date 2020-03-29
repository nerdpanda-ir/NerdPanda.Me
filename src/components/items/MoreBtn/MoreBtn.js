/*====   import Script    ====*/
    import React from 'react';
/*====  import Script    ====*/

/*====  import Style    ====*/
    import '../../../css/components/items/MoreBtn/MoreBtn.css'
/*====  import Style    ====*/
export default class MoreBtn extends React.Component
{
    constructor() {
        super();
        this.state = {classList : null };
    }
    static getDerivedStateFromProps(props)
    {
        return {classList: ((props.className!== undefined )? props.className : '')};
    }
    render() {
        let result =
            (
                <React.Fragment>
                    <section className={this.state.classList+' posAb l0 moreBtn bg-perple-dark sh3 white color-white disIB br100 boxSBB textCenter'}>
                        <i className="fal fa-plus-circle"></i>
                    </section>
                </React.Fragment>
            );
        return result;
    }
}
