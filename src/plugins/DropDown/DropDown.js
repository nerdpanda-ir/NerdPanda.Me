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
                selected : {id : 'select' , defaltSelect : 0 },
                list : {id : 'list' , closeClass : 'disN' , openClass : 'disIB' , lablelClass : 'langName' , imgClass : 'langIcon'} ,
                callBacks : {selecting : null}
            }
         this.elements = {
             selectElement : null ,
             list : {listElement : null, itemElements : null },
             arrow : null ,
             clickedElement : {element : null , index : null}
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
        this.elements.selectElement = this.getElement(this.getRealValue(this.state.setting.selected.id,this.setting.selected.id));
        this.elements.list.listElement  = this.getElement(this.getRealValue(this.state.setting.list.id,this.setting.list.id));
        this.elements.list.itemElements  = this.getElement(this.getRealValue(this.state.setting.list.id,this.setting.list.id)+' li',true);
        if (this.state.setting.arrow)
            this.elements.arrow = this.getElement(this.getRealValue(this.state.setting.arrow.id,this.setting.arrow.id));
        if (this.elements.clickedElement.index===null)
            this.doSelectItem(this.state.setting.selected.defaltSelect);
        this.eventSetter();
    }
    /*====  lyfecycle Methods   ====*/

    /*====  fetch setting  ====*/
    fetchSetting()
    {
        let setting = {...this.state.setting};
        for (let settingKey in this.setting)
            if (!this.state.setting.hasOwnProperty(settingKey))
                setting[settingKey] =this.setting[settingKey];
         if (!setting.selected.hasOwnProperty('defaltSelect'))
             setting.selected.defaltSelect = this.setting.selected.defaltSelect;
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
                    throw new Error('not Found Element -> '+query);
            }
            catch (e) {
                window.console.error(e);
                result = false;
            }
            finally {
                return result;
            }
        }
        getElementNumberOfParent()
        {
           return  window.Object.values(this.elements.list.itemElements).findIndex(this.findIndexElement, this);
        }
        findIndexElement(item)
        {
            return this.elements.clickedElement.element===item;
        }
        getRealValue(query, secondQuery)
        {
            return ((query!==undefined && query.length!==0)  ? query : secondQuery);
        }
        get getListOpenStatus()
        {
            return this.elements.list.listElement.classList.contains(((this.state.setting.list.openClass !==undefined && this.state.setting.list.openClass.length!==0 ) ? this.state.setting.list.openClass : this.setting.list.openClass));
        }
        getListLable(element)
        {
            return element.querySelector('.'+this.getRealValue(this.state.setting.list.lablelClass,this.setting.list.lablelClass));
        }
        getListIcon(element)
        {
            return element.querySelector('.'+this.getRealValue(this.state.setting.list.imgClass,this.setting.list.imgClass));
        }
        get getSectedNumberOfChilds()
        {
            return this.elements.selectElement.children.length
        }
    /*====  getters ====*/



    /*====  setters ====*/
        eventSetter()
        {
            this.setOpenListEvent();
            this.setListItemEvent();
        }
        setOpenListEvent()
        {
            this.elements.selectElement.addEventListener( ((this.state.setting.globalSetting.openListEvent!==undefined && this.state.setting.globalSetting.openListEvent.length!==0) ? this.state.setting.globalSetting.openListEvent: this.setting.globalSetting.openListEvent) , this.listOpenEventHandler);
        }
        setListItemEvent()
        {
            this.elements.list.itemElements.forEach(this.listItemIteration,this);
        }
        listItemIteration(element)
        {
            element.addEventListener('click',this.itemEventHandler);
        }
    /*====  setters ====*/


    /*====  EventHandlers  ====*/
        listOpenEventHandler=()=>
        {
           this.doToggle(this.getListOpenStatus)
        }
        itemEventHandler=(ev)=>
        {
            this.elements.clickedElement.element = ev.currentTarget;
            this.elements.clickedElement.index = this.getElementNumberOfParent(this.elements.clickedElement.element);
            if (this.state.setting.selected.defaltSelect!==this.elements.clickedElement.index)
                this.doSelectItem(this.elements.clickedElement.index);
            this.doToggle(this.getListOpenStatus);
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
        this.elements.list.listElement.classList.remove(this.getRealValue(this.state.setting.list.closeClass,this.setting.list.closeClass));
        this.elements.list.listElement.classList.add(this.getRealValue(this.state.setting.list.openClass,this.setting.list.openClass));

    }
    closeList()
    {
        this.elements.list.listElement.classList.remove(this.getRealValue(this.state.setting.list.openClass,this.setting.list.openClass));
        this.elements.list.listElement.classList.add(this.getRealValue(this.state.setting.list.closeClass,this.setting.list.closeClass));
    }
    openArrow()
    {
        this.elements.arrow.classList.remove(this.getRealValue(this.state.setting.arrow.closeClass, this.setting.arrow.closeClass));
        this.elements.arrow.classList.add(this.getRealValue(this.state.setting.arrow.openClass, this.setting.arrow.openClass));
    }
    closeArrow()
    {
        this.elements.arrow.classList.remove(this.getRealValue(this.state.setting.arrow.openClass, this.setting.arrow.openClass));
        this.elements.arrow.classList.add(this.getRealValue(this.state.setting.arrow.closeClass, this.setting.arrow.closeClass));
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
    doSelectItem(key)
    {
        if (this.getSectedNumberOfChilds>1)
            this.doEmptySelect();
        let element = this.elements.list.itemElements[key];
        let lable = this.getListLable(element).cloneNode(true);
        let icon = this.getListIcon(element).cloneNode(true);
        this.elements.selectElement.prepend(lable);
        this.elements.selectElement.prepend(icon);
        if (this.elements.clickedElement.index!==null)
        {
            let setting = {...this.state.setting};
            setting.selected.defaltSelect = key;
            this.setState({...this.state,setting});
        }
        if(typeof this.state.setting.callBacks.selecting==='function')
            this.state.setting.callBacks.selecting();
    }
    doEmptySelect()
    {
        let icon =this.getListIcon(this.elements.selectElement);
        let lable =this.getListLable(this.elements.selectElement);
        icon.remove();
        lable.remove();
    }

    /*====  DoWorks  ====*/
}