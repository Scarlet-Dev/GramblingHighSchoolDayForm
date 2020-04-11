import React from 'react'
import './Form.scss'
import { FormElements } from 'src/Components/components'
// import 'src/static/states';


function FormBody(){
    const fe = new FormElements();
    let today = new Date();
    let maxDate = new Date(today.getUTCFullYear(), today.getMonth(), today.getDate())
    return(
        <form action="/api/form.php" method="POST">
            <section>
                <div>
                    <fe.Label id="applicant_name_label" message="Applicant Name:">
                        <fe.Input id="" type="text"/>
                    </fe.Label>
                </div>
                <div>
                    <fe.Label id="applicant_school_label" message="Applicant's School Name:">
                        <fe.Input id="applicant_school" type="text"/>
                    </fe.Label>
                </div>
                <div>
                    <fe.Label id="applicant_dob_label" message="Applicant's Date of Birth: ">
                        <fe.Input id="applicant_dob" type="date" max={maxDate}/>
                    </fe.Label>
                </div>
                <div>
                    <fe.Label id="applicant_email" message="">
                        <fe.Input id="" type="email"/>
                    </fe.Label>
                </div>
            </section>
        </form>
    )
}

export default function Form(){
    return(
        <FormBody />
    );
}