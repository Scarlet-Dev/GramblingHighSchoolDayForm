import React from 'react'
import axios from "axios";
import './Form.scss'

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

interface IForm{
    maxDate: Date,
    states:any[],
    interests:any[],
    form:{
        name:string
    }

}
class FormBody extends React.Component<any, IForm>{

    constructor(props:any){
        super(props);
        this.state = {
            maxDate: new Date(),
            states: [],
            interests: [],
            form:{
                name: ""
            }
        }
    }

    getStudentInterests () {
        return axios.get("").then(res => res.data);
    }
    
    getStates (){
        return axios.get("").then(res => { res.data });
    }
    
    
    onFormSubmit (data: any) {
        axios.post(data).then().catch().finally();
    }

    componentWillMount(){

        Promise.all([this.getStates(), this.getStudentInterests()])
        .then((results) => {
            this.setState({
                states: results[0],
                interests: results[1]
            })
        });
        
        let today = new Date();
        this.setState({ maxDate: new Date(today.getUTCFullYear(), today.getMonth(), today.getDate()) });
    }

    render(){
        return(
            <div className="form">
            <h1>Register Now!</h1>
            <form onSubmit={this.onFormSubmit} method="POST">
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
                        <input id="applicant_dob" type="date" max={this.state.maxDate.getTime()}/>
                    </div>
                    <div className="form form-group">
                        <div>
                            <label id="applicant_city_label" htmlFor="">Applicant's City: </label>
                            <input id="applicant_city" type="text"/>
                        </div>
                        <div>
                            <label>Applicant's State: </label>
                            <Dropdown id="applicant_state" data={this.state.states}>State</Dropdown>
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
                        <Dropdown id="applicant_interests" data={this.state.interests}>Please select an interests</Dropdown>
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
}

export default function Form(){
    return(
        <FormBody />
    );
}