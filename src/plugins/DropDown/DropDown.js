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
                list : {id : 'list' , closeClass : 'disN' , openClass : 'disIB'} ,
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
/*        this.elements.selectElement = this.getElement(((this.state.setting.selected.id!==undefined && this.state.setting.selected.id.length !==0) ? this.state.setting.selected.id : this.setting.selected.id));
        this.elements.list.listElement  = this.getElement(((this.state.setting.list.id!==undefined && this.state.setting.list.id.length !==0) ? this.state.setting.list.id :this.setting.list.id));
        this.elements.list.itemElements  = this.getElement(((this.state.setting.list.id!==undefined && this.state.setting.list.id !==0) ?this.state.setting.list.id+' li' :this.setting.list.id+' li'),true);*/
        this.elements.selectElement = this.getElement(this.getTrueQuery(this.state.setting.selected.id,this.setting.selected.id));
        this.elements.list.listElement  = this.getElement(this.getTrueQuery(this.state.setting.list.id,this.setting.list.id));
        this.elements.list.itemElements  = this.getElement(this.getTrueQuery(this.state.setting.list.id,this.setting.list.id)+' li',true);
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
        getElement(query,multiple = false)
        {
            let result ;
            try {
                query = `#${query}`;
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
        getTrueQuery(query,secondQuery)
        {
            return ((query!==undefined && query.length!==0)  ? query : secondQuery);
        }
        get getListOpenStatus()
        {
            return this.elements.list.listElement.classList.contains(((this.state.setting.list.openClass !==undefined && this.state.setting.list.openClass.length!==0 ) ? this.state.setting.list.openClass : this.setting.list.openClass));
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
        listOpenEventHandler=()=>
        {
            this.toggleOpenList(this.getListOpenStatus)

        }

    /*====  EventHandlers  ====*/

    /*====  DoWorks  ====*/
    openList()
    {
        this.elements.list.listElement.classList.remove(((this.state.setting.list.closeClass !==undefined && this.state.setting.list.closeClass.length!==0 ) ? this.state.setting.list.closeClass : this.setting.list.closeClass));
        this.elements.list.listElement.classList.add(((this.state.setting.list.openClass !==undefined && this.state.setting.list.openClass.length!==0 ) ? this.state.setting.list.openClass : this.setting.list.openClass))
    }
    closeList()
    {
        this.elements.list.listElement.classList.remove(((this.state.setting.list.openClass !==undefined && this.state.setting.list.openClass.length!==0 ) ? this.state.setting.list.openClass : this.setting.list.openClass));
        this.elements.list.listElement.classList.add(((this.state.setting.list.closeClass !==undefined && this.state.setting.list.closeClass.length!==0 ) ? this.state.setting.list.closeClass : this.setting.list.closeClass))
    }
    toggleOpenList(status)
    {
        if (status!==undefined && status!==null)
        {
            if (!status)
                this.openList();
            else if (status)
                this.closeList();
        }
        else
            window.console.error('argument is not valid !!! ');
    }
    /*====  DoWorks  ====*/
}