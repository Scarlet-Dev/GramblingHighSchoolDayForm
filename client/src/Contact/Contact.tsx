import React from 'react';
import './Contact.scss';

import programs from "../../public/json/programs.json";

const submitForm = () => {

}

const Dropdown = (props: any) => {

    let handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        let selectedValue = event.target.value;
        props.onSelectChange(selectedValue);
    }

    let arrayOfData = props.data;
    let options= arrayOfData.map((obj: any) =>
        {
            return(
                <option key={obj.id} value={obj.value}>
                    {obj.id}
                </option>
                )
        });

    return(
        <select id={props.id} className="form-group dropdown" onChange={handleChange}>
            <option>Select a value</option>
            {options}
        </select>
    );
}

export default function Contact(){
    return(
        <div>
        <h3></h3>
        <form onSubmit={submitForm} >
            <div>
                <input type="text" placeholder="Enter Full Name"/>
            </div>
            <div>
                <input type="tel" placeholder="Enter Phone Number"/>
            </div>
            <div>
                <input type="email" placeholder="Enter Email Address"/>
            </div>
            <div>
                <Dropdown data={programs}/>
            </div>
            <div>
                <textarea placeholder="Please enter any questions or comments" cols={100} rows={5}></textarea>
            </div>
            <div>
                <input type="submit" name="Submit" />
            </div>
        </form>
        </div>
    )
}