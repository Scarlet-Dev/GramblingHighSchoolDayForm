import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { Header, Footer } from "../Components/components";

import About from '../About/About';
import Contact from '../Contact/Contact';
import Form from '../Form/Form';

import './App.scss';

/**
 * @whatItDoes Application navigation form.
 */
function AppNav(){
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

/**
 * @whatItDoes 
 */
function AppHome(){
    return(<div>

    </div>)
}


/**
 * @whatItDoes App entry point
 * 
 * Sent to index to be rendered in index class.
 */
export default function App(){
    return(
        <div>
            <AppNav />
            <Switch>
                <Route path="/">
                    <AppHome />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/register">
                    <Form />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </div>
    )
}