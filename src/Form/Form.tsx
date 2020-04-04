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

function FormBody(){
    return(
        <div>
            <form action="form.php" method="POST">
                <section>
                    <div>
                        <input></input>
                    </div>
                    <div>
                        <input></input>
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