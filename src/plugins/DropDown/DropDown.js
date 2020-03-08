/*====  import Scripts  ====*/
    import React from 'react';
/*====  import Scripts  ====*/
export default class DropDown extends React.Component{
    constructor() {
        super();
        this.state = {};
        this.setting =
            {
                globalSetting : {openListEvent : 'click'},
                arrow : {id : 'arrow' , openClass : 'fa-sort-up' , closeClass : 'fa-sort-down'},
                selected : {id : 'select' , defaltSelect : 0},
                list : {id : 'list'} ,
                callBacks : {selecting : null}
            }
         this.elements = {
             selectElement : '' ,
             list : {listElement : '' , itemElements : ''}
         };
    }
    static getDerivedStateFromProps(props,state)
    {
        if (!state.hasOwnProperty('body') && !state.hasOwnProperty('setting') )
            return  {body : props.children , setting : ((props.setting!==undefined) ? props.setting : {})};
        else
            return false
    }
    render() {
        let result =
            (
                <React.Fragment>
                    {
                        this.state.body
                    }
                </React.Fragment>
            );
        return result;
    }
    /*====  lyfecycle Methods   ====*/
    componentDidMount() {
        this.fetchSetting();
    }
    componentDidUpdate() {
        window.console.log(this.state);
        this.elements.selectElement = this.getElement(this.state.setting.selected.id,this.setting.selected.id);
        this.elements.list.listElement  = this.getElement(this.state.setting.list.id,this.setting.list.id);
        this.elements.list.itemElements  = this.getElement(this.state.setting.list.id+' li', this.setting.list.id+' li',true);
        this.eventSetter()
    }
    /*====  lyfecycle Methods   ====*/

    /*====  fetch setting  ====*/
    fetchSetting()
    {
        let setting = {...this.state.setting};
        for (let settingKey in this.setting)
            if (!this.state.setting.hasOwnProperty(settingKey))
                setting[settingKey] =this.setting[settingKey];
         this.setState({setting})
    }
    /*====  fetch setting  ====*/


    /*====  getters ====*/
        getElement(query,secoundQuery,multiple = false)
        {
            let result ;
            try {
                query = `#${((query!==undefined && query.length !==0) ? query : secoundQuery)}`;
                result = ((!multiple)? window.document.body.querySelector(query) : window.document.body.querySelectorAll(query));
                if (result===null)
                    throw 'not Found Element -> '+query;
            }
            catch (e) {
                window.console.error(e);
                result = false;
            }
            finally {
                return result;
            }
        }
    /*====  getters ====*/



    /*====  setters ====*/
        eventSetter()
        {
            this.setOpenListEvent();
        }
        setOpenListEvent()
        {
            this.elements.selectElement.addEventListener( ((this.state.setting.globalSetting.openListEvent!==undefined && this.state.setting.globalSetting.openListEvent.length!==0) ? this.state.setting.globalSetting.openListEvent: this.setting.globalSetting.openListEvent) , this.listOpenEventHandler);
        }

    /*====  setters ====*/


    /*====  EventHandlers  ====*/
        listOpenEventHandler()
        {
            window.console.log('event handler ')
        }

    /*====  EventHandlers  ====*/


}