import React from 'react'

// import { Input, Label, SelectList } from "../Components/components";
// import 'src/static/states';

import './Form.scss'


function FormBody(){
    return(
        <form action="/form.php" method="POST">
            <section>
                <div>
                    <label>Applicant Name: <input id="applicant_name" />
                    </label>
                </div>
                <div>
                    <label>Applicant's School Name: <input id="applicant_school" />
                    </label>
                </div>
                <div>
                </div>
            </section>
            <section>

                
            </section>
        </form>
    )
}

export default function Form(){
    return(
        <FormBody />
    );
}