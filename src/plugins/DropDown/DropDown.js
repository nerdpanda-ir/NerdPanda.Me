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
             selectElement : null ,
             list : {listElement : null, itemElements : null},
             arrow : null
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
        this.elements.selectElement = this.getElement(this.getTrueQuery(this.state.setting.selected.id,this.setting.selected.id));
        this.elements.list.listElement  = this.getElement(this.getTrueQuery(this.state.setting.list.id,this.setting.list.id));
        this.elements.list.itemElements  = this.getElement(this.getTrueQuery(this.state.setting.list.id,this.setting.list.id)+' li',true);
        if (this.state.setting.arrow)
            this.elements.arrow = this.getElement(this.getTrueQuery(this.state.setting.arrow.id,this.setting.arrow.id));
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
           this.doToggle(this.getListOpenStatus)

        }

    /*====  EventHandlers  ====*/

    /*====  DoWorks  ====*/
    doToggle(status)
    {
        this.toggleOpenList(status);
        if (this.elements.arrow!==null)
            this.toggleOpenArrow(status);
    }
    openList()
    {
        this.elements.list.listElement.classList.remove(this.getTrueQuery(this.state.setting.list.closeClass,this.setting.list.closeClass));
        this.elements.list.listElement.classList.add(this.getTrueQuery(this.state.setting.list.openClass,this.setting.list.openClass));

    }
    closeList()
    {
        this.elements.list.listElement.classList.remove(this.getTrueQuery(this.state.setting.list.openClass,this.setting.list.openClass));
        this.elements.list.listElement.classList.add(this.getTrueQuery(this.state.setting.list.closeClass,this.setting.list.closeClass));
    }
    openArrow()
    {
        this.elements.arrow.classList.remove(this.getTrueQuery(this.state.setting.arrow.closeClass, this.setting.arrow.closeClass));
        this.elements.arrow.classList.add(this.getTrueQuery(this.state.setting.arrow.openClass, this.setting.arrow.openClass));
    }
    closeArrow()
    {
        this.elements.arrow.classList.remove(this.getTrueQuery(this.state.setting.arrow.openClass, this.setting.arrow.openClass));
        this.elements.arrow.classList.add(this.getTrueQuery(this.state.setting.arrow.closeClass, this.setting.arrow.closeClass));
    }
    toggleOpenArrow(status)
    {
        if (status!==undefined && status!==null)
        {
            if (!status)
                this.openArrow();
            else if (status)
                this.closeArrow();
        }
        else
            window.console.error('argument is not valid !!! ');
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