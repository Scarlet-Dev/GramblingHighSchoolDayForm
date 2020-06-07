import React from 'react';
import axios from "axios";
import './Contact.scss';

// Might change to three programs interests instead of one.
type Form = {
    name: string,
    phoneNumber: string,
    email: string,
    programs: number,
    additionalQuestion: string
}

interface IContactForm{
    programs: [],
    form: Form
}

class ContactForm extends React.Component<any, IContactForm> {
    constructor(props:any){
        super(props);
        this.state= {
            programs:[],
            form: {
                name: "",
                phoneNumber: "",
                email: "",
                programs: 0,
                additionalQuestion: ""
            }
        }
    }

    getPrograms () {
        return axios.get("").then( res => res.data)
    }

    componentDidMount(){
        Promise.all([this.getPrograms()])
        .then((results) => {
            this.setState({
                programs:results[0]
            })
        })
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
            <div>
                <h3></h3>
                <form onSubmit={this.onFormSubmit} >
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
                        <this.Dropdown data={this.state.programs}/>
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
}

export default function Contact(){
    return (
        <ContactForm />
    )
}