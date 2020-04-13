import React from 'react';
import './Contact.scss';
import { FormElements } from '../Components/components';

export default function Contact(){
    const fe = new FormElements();
    return(
        <div>
        <h3></h3>
        <form action="/api/contact.php" >
            <div>
                <fe.Input type="text" placeholder="Enter Full Name"/>
            </div>
            <div>
                <fe.Input type="tel" placeholder="Enter Phone Number"/>
            </div>
            <div>
                <fe.Input type="email" placeholder="Enter Email Address"/>
            </div>
            <div>
                <fe.TextArea placeholder="Please enter any questions or comments" />
            </div>
            <div>
                <fe.Input type="submit" message="Submit" />
            </div>
        </form>
        </div>
    )
}