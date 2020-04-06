import React from 'react'
import './styles/Form.css'


function FormHeader() {
    return(
        <div>
            <div>
                <span>Form Header</span>
            </div>
        </div>
    )
}

function getStatesList(): any{
    const states:[string] = [""]
    return(
        <div>
            <option></option>
        </div>
    )
}

function StateDropdownList(){
    return(
        <div>
            <select id="states_select">
                {getStatesList()}
            </select>
        </div>
    )
}

function FormBody(){
    return(
        <div>
            <form action="form.php" method="POST">
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
                       <StateDropdownList />
                    </div>
                </section>
                <section>

                    <div>
                        <input type="submit" id="submit" name="Submit"/>
                    </div>
                    <div>
                        <input type="button" id="cancell" name="Cancel"/>
                    </div>
                </section>
            </form>
        </div>
    )
}

function Form(){
    return(
        <FormBody />
    )
}

export default Form