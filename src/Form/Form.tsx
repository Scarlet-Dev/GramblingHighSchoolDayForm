import React from 'react'
import './Form.scss'

import states from "../../public/json/states.json";
import interests from "../../public/json/interests.json";

const submit = () => {

}

const Dropdown = (props: any) => {

    let handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        let selectedValue = event.target.value;
        props.onSelectChange(selectedValue);
    }

    let arrayOfData = props.data;
    let options= arrayOfData.map((obj: any) =>
        {
            <option key={obj.id} value={obj.value}>
                {obj.name}
                </option>
        });

    return(
        <select id={props.id} className="form-group dropdown" onChange={handleChange}>
            {options}
        </select>
    );
}


function FormBody(){

    let today = new Date();
    let maxDate = new Date(today.getUTCFullYear(), today.getMonth(), today.getDate());
    


    return(
        <div className="form">
        <h1>Register Now!</h1>
        <form onSubmit={submit} method="POST">
                <div className="form form-group">
                    <label id="applicant_name_label" htmlFor="applicant_name">Applicant Name:</label>
                    <input id="applicant_name" type="text"/>
                </div>
                <div className="form form-group">
                    <label id="applicant_school_label" htmlFor="applicant_school">Applicant's School Name: </label>
                    <input id="applicant_school" type="text"/>
                </div>
                <div className="form form-group">
                    <label id="applicant_dob_label" htmlFor="applicant_dob">Applicant's Date of Birth: </label>
                    <input id="applicant_dob" type="date" max={maxDate.getTime()}/>
                </div>
                <div className="form form-group">
                    <div>
                        <label id="applicant_city_label" htmlFor="">Applicant's City: </label>
                        <input id="applicant_city" type="text"/>
                    </div>
                    <div>
                        <label>Applicant's State: </label>
                        <Dropdown id="applicant_state" data={states}>State</Dropdown>
                    </div>
                    <div>
                        <label id="applicant_zip_code_label" htmlFor="applicant_zip_code">Applicant's ZIP Code: </label>
                        <input id="applicant_zip_code" type="text" maxLength={5}/>
                    </div>
                </div>
                <div className=" form form-group">
                    <label id="applicant_email_label" htmlFor="applicant_email">Applicant Email: </label>
                    <input id="applicant_email" type="email"/>
                </div>
                <div className="form form-group">
                    <label id="" htmlFor="applicant_interests">Please select an interests: </label>
                    <Dropdown id="applicant_interests" data={interests}>Please select an interests</Dropdown>
                </div>

                <div className="form form-group">
                    <span>
                        <button id="applicant_cancel">Cancel</button>
                    </span>
                
                    <span>
                        <input id="applicant_submit" name="Submit" type="submit" />
                    </span>
                </div>
            
        </form>
        </div>
    )
}

export default function Form(){
    return(
        <FormBody />
    );
}