import React from 'react'
import axios from "axios";
import './Form.scss'

// Might include multiple interests instead of single.
type Form = {
    name:string,
    schoolName:string,
    classification:number,
    dob:Date,
    city:string,
    state:number,
    zipcode:string,
    email:string,
    interests:number
}

interface IForm {
    maxDate: Date,
    states:any[],
    interests:any[],
    classification:any[],
    form: Form

}
class RegisterForm extends React.Component<any, IForm>{

    constructor(props:any){
        super(props);
        // this.state = {
        //     maxDate: new Date(),
        //     states: [],
        //     interests: [],
        //     classification:[],
        //     form:{
        //         name: "",
        //         schoolName: "",
        //         dob: new Date(),
        //         city:"",
        //         state: 0,

        //     }
        // };
    }

    getStudentInterests () {
        return axios.get("").then(res => res.data);
    }
    
    getStates (){
        return axios.get("").then(res => res.data );
    }

    getStudentClassification (){
        return axios.get("").then(res => res.data);
    }
    
    handleChange(event: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>){
        var target = event.target;
        var name = target.name;

        var value = target.type == 'select' ? target.checked : target.value
        
    }

    handleSubmit (event: any) {
        this.postRegistrationForm(this.state.form);
    }

    componentDidMount(){

        Promise.all([this.getStates(), this.getStudentInterests(), this.getStudentClassification()])
        .then((results) => {
            this.setState({
                states: results[0],
                interests: results[1],
                classification: results[2]
            })
        });
        
        let today = new Date();
        this.setState({ maxDate: new Date(today.getUTCFullYear(), today.getMonth(), today.getDate()) });
    }

    Dropdown = (props: any) => {

        let handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
            console.log(`Value change to ${event.target.value}`)
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
            <select id={props.id} className="form-group dropdown" onChange={handleChange || props.handleChange}>
                <option>Select a value</option>
                {options}
            </select>
        );
    }
    
    render(){
        return(
            <div className="form">
            <h1>Register Now!</h1>
            <form onSubmit={this.handleSubmit} method="POST">
                    <div className="form form-group">
                        <label id="applicant_name_label" htmlFor="applicant_name">Applicant Name:</label>
                        <input id="applicant_name" type="text" onChange={this.handleChange}/>
                    </div>
                    <div className="form form-group">
                        <label id="applicant_school_label" htmlFor="applicant_school">Applicant's School Name: </label>
                        <input id="applicant_school" type="text"/>
                    </div>
                    <div className="form form-group">
                        <label id="applicant_classification" htmlFor="applicant_classification">Applicant's Current Year: </label>
                        <this.Dropdown data={this.state.classification}></this.Dropdown>
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
                            <this.Dropdown id="applicant_state" data={this.state.states}>State</this.Dropdown>
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
                        <this.Dropdown id="applicant_interests" data={this.state.interests}>Please select an interests</this.Dropdown>
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

export default function Registration(){
    return(
        <RegisterForm />
    );
}