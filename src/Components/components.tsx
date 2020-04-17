import React from "react";
import "./components.scss";


export class GeneralElements{
    constructor(){}

    /**
     * @whatItDoes
     * 
     * @param props 
     */
    Button(props: any){
        return(
            <button name={props.name} onClick={props.method || null}>
                {props.message}
            </button>
            )
    }

    /**
     * 
     * @param props 
     */
    Card (props: any){

    }

    /**
     * 
     * @param props 
     */
    Comments (props: any){

    }

    /**
     * 
     * @param props
     */
    Footer(props: any) {
        return(
            <footer>
                <span>
                    {props.children}
                </span>
            </footer>
            )
    }

    /**
     * 
     * @param props 
     */
    GridBasic(props: any){

    }
    
    /**
     * @whatItDoes Readily available header component
     * 
     * @param props 
     */
    Header(props: any){
        return(
            <header>
                <h1></h1>
            </header>
        )
    }

    /**
     * 
     * @param props 
     */
    Modal (props: any){
    
    }
    
    /**
     * 
     */
    Table (){

    }
}

export class FormElements{

    constructor(){}
    
    /**
     * 
     * @param props
     * 
     * @method handleChange - Used 
     * @property props.id (The id assigned to input)
     * @property props.type - The type of input being called
     * @property props.placeholder
     * @property props.pattern
     */
    Input(props: any): any{
        let handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
            let inputValue = event.target.value;
        }
        // @property 
        switch (props.type) {
            case 'text':
                return(
                    <input type={props.type} id={props.id} minLength={props.min || 1} maxLength={props.max || 100} 
                    placeholder={props.placeholder || ""}/>
                );
            case 'range':
            case 'number':
                return(
                    <input type={props.type} id={props.id} min={props.min || 1} max={props.max || 100} 
                    step={props.step || 1} />
                );
            case 'date':
            case 'datetime-local':
            case 'month':
            case 'week':
                return(
                    <input type={props.type} id={props.id} min={props.main || ""} max={props.max || ""}/>
                );
            case 'email':
            case 'tel':
                return(
                    <input type={props.type} id={props.id} pattern={props.pattern || "[0-9]{3}-[0-9]{3}-[0-9]{4}"} 
                    placeholder={props.placeholder || ""}/>
                );
            case 'password':
            case 'radio':
            case 'checkbox':
            case 'file':
            case 'reset':
            case 'url':
                default:
                return(
                    <input type={props.type} id={props.id}/>
                );
        }
    }


    /**
     * 
     * @param props 
     * @property props.id
     * @property props.for
     * @property props.text
     */
    Label(props: any){
        return(
            <label id={props.id} htmlFor={props.for}>
                {props.text}
            </label>
        )
    }

    /**
     * 
     * @param props
     * @property props.id 
     * @property props.rows 
     * @property props.cols 
     * @property props.placeholder 
     */
    TextArea(props: any){
        return(
            <textarea id={props.id} rows={props.row || 4} cols={props.cols || 50} placeholder={props.placeholder || ""}></textarea>
        )
    }

    /**
     * 
     * @param props 
     */
    Dropdown(props: any){

        let handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
            let selectedValue = event.target.value;
            props.onSelectChange(selectedValue);
        }

        let arrayOfData = props.arrayOfData;
        let options: React.FormEvent<HTMLOptionElement>[] = arrayOfData.map((data: any) =>{
            <option key={data.id} value={data.value}>
                {data.name}
            </option>
        });

        return(
            <select id={props.id} onChange={handleChange}>
                {options}
            </select>
        )
    }

}

export class SpecialComponents{
    constructor(){}
    
    Carousel (props: any){

    }

    Chart() {
        
    }

    GridExpanding (){

    }

    Lightbox (props: any){
        
    }

    Tile (){

    }
}
