/*====  import Scripts  ====*/
    import React from "react";
/*====  import Scripts  ====*/
export default class DropDown extends React.Component{
    constructor() {
        super();
        this.state = {body : '' , setting : ''};
        this.setting =
            {
                openEvent : 'click'
                ,
                selectid : 'select'
                ,
                listId : 'list'
                ,
                listShowClass : 'disIB'
                ,
                listHideClass : 'disN'
                ,
                arrowId : 'arrow'
                ,
                openArrowClass : 'fa-sort-up'
                ,
                closeArrowClass : 'fa-sort-down'
            }
            this.elements = {selectElement : '' , listElement : '', listItemElements : '', arrowElement : ''};
    }
    static getDerivedStateFromProps(props,state)
    {
        if (state.body.length===0 && state.setting.length===0)
            return {body : props.children , setting : props.setting};
        else
            return  null;

    }
    render() {
        let result =
            (
                <React.Fragment>
                    {this.state.body}
                </React.Fragment>
            );
        return result;
    }
    componentDidMount() {
        this.fetchSetting();
    }
    componentDidUpdate() {
        this.elements.selectElement = this.getSelectElement;
        this.elements.listElement = this.getListElement;
        this.elements.arrowElement = this.getArrowElement;
        this.elements.listItemElements = this.getListItemElements;
        this.setEvents()
    }
    fetchSetting()
    {
        let newState = {...this.state};
        let newSetting = {...this.state.setting};
        for(let settingKey in this.setting)
            if (!this.state.setting.hasOwnProperty(settingKey))
                newSetting[settingKey] = this.setting[settingKey];
        newState['setting']= newSetting;
        this.setState(newState);
    }
    setEvents()
    {
        this.setSelectElementEvent();
        this.setListItemEvent()
    }
    setListItemEvent()
    {
        this.elements.listItemElements.forEach(this.listItemElementsIteration,this);
    }
    listItemElementsIteration(element)
    {
        element.addEventListener('click',this.listItemsEventHandler,false)
    }
    setSelectElementEvent()
    {
        this.elements.selectElement.addEventListener(this.state.setting.openEvent,this.selectEventHandler,false)
    }
    listCheckShow()
    {
        return this.elements.listElement.classList.contains(this.state.setting.listShowClass)
    }
    listShow()
    {
        this.elements.listElement.classList.remove(this.state.setting.listHideClass);
        this.elements.listElement.classList.add(this.state.setting.listShowClass);
    }
    listHide()
    {
        this.elements.listElement.classList.remove(this.state.setting.listShowClass);
        this.elements.listElement.classList.add(this.state.setting.listHideClass);
    }
    upArrow()
    {
        this.elements.arrowElement.classList.remove(this.state.setting.closeArrowClass);
        this.elements.arrowElement.classList.add(this.state.setting.openArrowClass);
    }
    downArrow()
    {
        this.elements.arrowElement.classList.remove(this.state.setting.openArrowClass);
        this.elements.arrowElement.classList.add(this.state.setting.closeArrowClass);
    }
    toggleArrow(status)
    {
        if (!status)
            this.upArrow();
        else if (status)
            this.downArrow();
    }
    toggleList(status)
    {
        if (!status)
            this.listShow();
        else if (status)
            this.listHide();
    }
    /*  eventHandlers */
        selectEventHandler=()=>
        {
            let status =this.listCheckShow();
            this.toggleList(status);
            this.toggleArrow(status)

        }
        listItemsEventHandler=(ev)=>
        {
            let element = ev.path.find((element)=> element.tagName.toLowerCase()==='li');
            let info = {img : element.querySelector('img').src ,labele :  element.querySelector('.langName').innerText };
            let img = this.elements.selectElement.querySelector('img');
            let labele =  this.elements.selectElement.querySelector('.langName');
            img.src = info.img ;
            labele.innerText = info.labele;
            this.toggleList(this.listCheckShow())
        }
    /*  eventHandlers */

    /*  Element  getters */
        get getSelectElement()
        {
            let result ;
            try {
                result =  window.document.body.querySelector(`#${this.state.setting.selectid}`);
                if (result===null)
                    throw `element width id : #${this.state.setting.selectid} is not Found !!! `;
            }
            catch (e) {
                window.console.error(e);
                result = false;
            }
            finally {
                return result;
            }
        }
        get getListElement()
        {
            let result ;
            try {
                result =  window.document.body.querySelector(`#${this.state.setting.listId}`);
                if (result===null)
                    throw `element width id : #${this.state.setting.listId} is not Found !!! `;
            }
            catch (e) {
                window.console.error(e);
                result = false;
            }
            finally {
                return result;
            }
        }
        get getListItemElements()
        {
            let result ;
            try {
                result =  window.document.body.querySelectorAll(`#${this.state.setting.listId} li`);
                if (result===null)
                    throw `element width selector  : #${this.state.setting.listId} li =>  is not Found !!! `;
            }
            catch (e) {
                window.console.error(e);
                result = false;
            }
            finally {
                return result;
            }
        }
        get getArrowElement()
        {
            let result ;
            try {
                result =  window.document.body.querySelector(`#${this.state.setting.arrowId}`);
                if (result===null)
                    throw `element width id : #${this.state.setting.arrowId} is not Found !!! `;
            }
            catch (e) {
                window.console.error(e);
                result = false;
            }
            finally {
                return result;
            }
        }

    /*  Element  getters */
}