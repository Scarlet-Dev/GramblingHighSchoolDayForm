import React from "react";
import "./components.scss";

/**
 * @whatItDoes Readily available header component
 * 
 * @param props 
 */
export function Header(props: any){
    return(
        <header>
            <h1></h1>
        </header>
    )
}

/**
 * @whatItDoes
 * 
 * @param props 
 */
export function Button(props: any){
    return(
        <button name={props.name}></button>
    )
}

export function Input(props: any){
    let handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        let inputValue = event.target.value;
    }
    return(
        <input type={props.type} name={props.name} />
    );
}

/**
 * 
 * @param props 
 */
export function Label(props: any){
    return(
        <label id={props.id} >
            {props.message}
        </label>
    )
}

/**
 * 
 * @param props 
 */
export function TextArea(props: any){
    return(
        <textarea></textarea>
    )
}

/**
 * 
 * @param props 
 */
export function SelectList(props: any){

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

/**
 * 
 * @param props
 */
export function Footer(props: any) {
    return(
        <footer>
            <span>
                Footer Here
            </span>
        </footer>
    )
}
