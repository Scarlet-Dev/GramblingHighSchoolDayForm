import React from 'react';
import './Contact.scss';

import programs from "../../public/json/programs.json";

export default function Contact(){
    return(
        <div>
        <h3></h3>
        <form action="/api/contact.php" >
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
                
            </div>
            <div>
                <textarea placeholder="Please enter any questions or comments" cols={3}></textarea>
            </div>
            <div>
                <input type="submit" name="Submit" />
            </div>
        </form>
        </div>
    )
}