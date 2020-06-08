export default class FixNav {
    constructor(userSetting) {
        this.userSetting =((userSetting!==undefined && userSetting!== null && typeof userSetting==="object" && !window.Array.isArray(userSetting)) ? userSetting : null );
        this.defaltSetting  ={elementSelector : null , fixClass : 'fixNav' , navIsTop : true , unfixZeroScroll : true , fixCallBack : null , unfixCallBack : null ,  fixCallBackOnce : null , unfixCallBackOnce : null ,  fixAnimation : null , unfixAnimation : null};
        this.status = {isFix : false };
        this.init();
    }
    init()
    {
        this.fetchSetting();
        this.element = this.elementGetter(this.userSetting.elementSelector);
        if (this.userSetting.fixAnimation!==null || this.userSetting.unfixAnimation!==null)
            this.element.addEventListener('animationend',this.endAnimationEventHandler)
        if (!this.userSetting.navIsTop)
            this.defaltPosition =this.element.offsetTop;
    }
    fetchSetting()
    {
        if (this.userSetting!==null)
        {
            for(let key in this.defaltSetting)
                if (!this.userSetting.hasOwnProperty(key))
                    this.userSetting[key] = this.defaltSetting[key];
        }
        else
            window.console.error(`Fetch Setting Error : Class -> [${this.constructor.name}] type of constructor argument most is Object !!! `);
    }
    elementGetter(selector)
    {
        let element = false;
        try
        {
            element = window.document.body.querySelector(selector);
            if (element===null)
                throw new Error(`NotFound Selector => ${selector}`)
        }
        catch (e) {
            window.console.error(e);
        }
        finally {
            return element;
        }
    }
    checkFix()
    {
        let scrollPos = window.pageYOffset;
        let elementPos = ((this.userSetting.navIsTop) ? this.element.offsetHeight : this.defaltPosition);
        if (scrollPos>=elementPos)
            this.fixMenu()
        else if (((this.userSetting.navIsTop) ? ((this.userSetting.unfixZeroScroll) ? scrollPos===0 : scrollPos<=(elementPos/2)) :  scrollPos<=(this.defaltPosition)))
            this.unFixMenu()
    }
    fixMenu()
    {
        if (window.document.body.querySelector("#freeSpace")===null)
            this.spaceCreate();
        this.element.classList.add(this.userSetting.fixClass);
        if (typeof this.userSetting.fixCallBack==="function")
            this.userSetting.fixCallBack(this.element);
        /* fix menu once running methods */
        if (!this.status.isFix)
            this.whenFixMenuOnceRunn();
        /* fix menu once running methods */
    }
    whenFixMenuOnceRunn()
    {
        this.status.isFix = true;
        if (this.userSetting.unfixAnimation!==null||this.userSetting.fixAnimation!==null)
            this.clearAnimation();
        if (this.userSetting.fixAnimation!==null)
            this.element.classList.add(this.userSetting.fixAnimation);
        if (typeof this.userSetting.fixCallBackOnce==="function")
            this.userSetting.fixCallBackOnce();
    }
    unFixMenu()
    {
        if (window.document.body.querySelector("#freeSpace")!==null)
            this.spaceRemove();
        this.element.classList.remove(this.userSetting.fixClass);
        if (typeof this.userSetting.unfixCallBack==="function")
            this.userSetting.unfixCallBack(this.element);
        /* un fix menu once running methods */
        if (this.status.isFix)
           this.whenUnFixMenuOnceRunn();
        /* un fix menu once running methods */
    }
    whenUnFixMenuOnceRunn()
    {
        this.status.isFix= false;
        if (this.userSetting.unfixAnimation!==null||this.userSetting.fixAnimation!==null)
            this.clearAnimation();
        if (this.userSetting.unfixAnimation!==null)
            this.element.classList.add(this.userSetting.unfixAnimation);
        if (typeof this.userSetting.unfixCallBackOnce==="function")
            this.userSetting.unfixCallBackOnce();
    }
    spaceCreate()
    {
            let space =window.document.createElement('div');
            space.id='freeSpace';
            space.style.marginTop = this.element.offsetHeight + 'px';
            this.element.after(space);
    }
    spaceRemove()
    {
        window.document.body.querySelector('#freeSpace').remove();
    }
    endAnimationEventHandler=()=>
    {
        this.clearAnimation();
    }
    clearAnimation()
    {
        if (this.element.classList.contains(this.userSetting.fixAnimation) && this.element.classList.contains(this.userSetting.unfixAnimation))
            this.element.classList.remove(this.userSetting.fixAnimation,this.userSetting.unfixAnimation);
        else if(this.element.classList.contains(this.userSetting.fixAnimation) && !this.element.classList.contains(this.userSetting.unfixAnimation))
            this.element.classList.remove(this.userSetting.fixAnimation)
        else if (!this.element.classList.contains(this.userSetting.fixAnimation) && this.element.classList.contains(this.userSetting.unfixAnimation))
            this.element.classList.remove(this.userSetting.unfixAnimation)
    }
}