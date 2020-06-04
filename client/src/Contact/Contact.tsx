import React from 'react';
import axios from "axios";
import './Contact.scss';

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

interface IContactForm{
    programs: []
}

class ContactForm extends React.Component<any, IContactForm> {
    constructor(props:any){
        super(props);
        this.state= {
            programs:[]
        }
    }

    getPrograms () {
        return axios.get("").then( res => res.data)
    }

    componentWillMount(){
        Promise.all([this.getPrograms()])
        .then((results) => {
            this.setState({
                programs:results[0]
            })
        })
    }

    onFormSubmit(){
        axios.post("").then().catch().finally()
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
                        <Dropdown data={this.state.programs}/>
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