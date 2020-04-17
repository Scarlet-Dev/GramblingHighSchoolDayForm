import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import * as faker from 'faker';
import { GeneralElements } from "../Components/components";

import About from '../About/About';
import Contact from '../Contact/Contact';
import Form from '../Form/Form';

import './App.scss';

const ge = new GeneralElements();

/**
 * @whatItDoes Application navigation form.
 */
const AppNav = () => {
    return(
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
    )
}

/**
 * @whatItDoes 
 */
const AppHome = () => {
    return(
        <div id="appHome">

            <section className="hero" id="hero">
                <h1 className="hero-title">Welcome</h1>
                <p className="hero-subtitle">
                    Greetings prospective students! Welcome to Grambling State University's bi-annual High School Day!
                </p>
            </section>

            <section>
                
            </section>
        </div>
    );
}


/**
 * @whatItDoes App entry point
 * 
 * Sent to index to be rendered in index class.
 */
export default function App(){
    return(
        <div className="container">
            <AppNav />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/register">
                    <Form />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <AppHome />
                </Route>
            </Switch>
            <ge.Footer />
        </div>
    )
}