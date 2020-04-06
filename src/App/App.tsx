import React from 'react'
import Form from '../Form/Form';
import './App.scss'

/**
 * 
 */
function AppHeader(){
    return(
        <div>
            <header></header>
        </div>
    )
}

/**
 * 
 */
function AppFooter() {
    return(
        <div>
            <footer>

            </footer>
        </div>
    )
}


/**
 * Where Form and Header are rendered
 */
function App(){
    return(
        <div>
            <div>
                <AppHeader />
            </div>

            <Form></Form>

            <div>
                <AppFooter />
            </div>
        </div>
    )
}

/**
 * Sent to index to be rendered in index.html
 */
export default App;