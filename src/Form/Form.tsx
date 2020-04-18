import React from 'react'
import './Form.scss'

const states = require('../static/states');
const interests = require('../static/interests');


const Dropdown = (props: any) => {

    let handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        let selectedValue = event.target.value;
        props.onSelectChange(selectedValue);
    }

    let arrayOfData = props.data;
    console.log(...arrayOfData);
    let options= arrayOfData.map((data: any) =>
        {
                <option key={data.id} value={data.value}>
                    {data.name}
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
    let maxDate = new Date(today.getUTCFullYear(), today.getMonth(), today.getDate())
    return(
        <form action="/api/form.php" method="POST">
                <div>
                    <fe.Label id="applicant_name_label" text="Applicant Name:" for="applicant_name"/>
                    <fe.Input id="applicant_name" type="text"/>
                </div>
                <div>
                    <fe.Label id="applicant_school_label" text="Applicant's School Name:" for="applicant_school"/>
                    <fe.Input id="applicant_school" type="text"/>
                </div>
                <div>
                    <fe.Label id="applicant_dob_label" text="Applicant's Date of Birth: "  for="applicant_dob"/>
                    <fe.Input id="applicant_dob" type="date" max={maxDate}/>
                </div>
                <div>
                    <fe.Label id="applicant_email_label" text="Applicant Email" for="applicant_email"/>
                    <fe.Input id="applicant_email" type="email"/>
                </div>

                <div>
                    <span>
                        <ge.Button id="applicant_cancel" message="Cancel" />
                    </span>
                
                    <span>
                        <fe.Input id="applicant_submit" message="Submit" type="submit" />
                    </span>
                </div>
            
        </form>
    )
}

export default function Form(){
    return(
        <FormBody />
    );
}