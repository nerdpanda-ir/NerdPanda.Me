/*====   import Script    ====*/
    import React from 'react';
    import Text from '../../Text/Text'
/*====  import Script    ====*/

/*====  import Style    ====*/
    import '../../../../css/components/items/Paragraph/BigParagraph/BigParagraph.css'
/*====  import Style    ====*/

 export default class BigParagraph extends React.Component
 {
     constructor()
     {
         super();
         this.state = {id : null , classList : null , body : null};
     }
     static getDerivedStateFromProps(props)
     {
         return {id :props.id , classList : ((props.className!==undefined) ? props.className : '') , body :props.children};
     }
    render()
    {
        let result = 
        (
            <React.Fragment>
                <Text tagName='p' id={this.state.id} className={'bigParagraph '+this.state.classList}>
                    {this.state.body}
                </Text>
            </React.Fragment>
        );
        return result; 
    }
 }