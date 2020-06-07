import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import * as faker from 'faker';

import About from '../About/About';
import Contact from '../Contact/Contact';
import Registration from '../Register/Register';

import './App.scss';


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

            <section className="carousel">
                
            </section>
            <section className="info">
                <div className="entry">
                    <h1>Title 1</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum deleniti soluta, labore reprehenderit iure doloribus aliquid 
                        consectetur unde dignissimos. Non, nihil hic atque natus impedit libero, voluptatum obcaecati iusto enim eveniet totam pariatur 
                        magni temporibus adipisci quae, repudiandae unde repellendus eius quaerat? Omnis vero exercitationem autem quidem quo, molestias animi.
                    </p>
                </div>
                <div className="entry">
                    <h1>Title 2</h1>
                    <img src={faker.image.cats(200, 200)} alt="Image here"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vitae facere quia placeat veritatis consectetur et labore minima. 
                        Culpa cum velit nihil earum! Non a dolore autem doloribus doloremque! Sequi hic possimus atque explicabo ipsum vitae doloribus alias ad, 
                        recusandae illum? Fugit quo obcaecati quibusdam omnis culpa inventore totam dolorem rerum expedita! Placeat molestias laudantium, mollitia
                        veritatis quas iste aspernatur optio labore? Numquam corrupti voluptatem animi debitis aliquid placeat beatae, eaque asperiores 
                        voluptatum veniam, sint nihil hic facilis libero minima.
                    </p>
                </div>
                <div className="entry">
                    <h1>Title 2</h1>
                    <img src={faker.image.cats(200, 200)} alt="Image here"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vitae facere quia placeat veritatis consectetur et labore minima. 
                        Culpa cum velit nihil earum! Non a dolore autem doloribus doloremque! Sequi hic possimus atque explicabo ipsum vitae doloribus alias ad, 
                        recusandae illum? Fugit quo obcaecati quibusdam omnis culpa inventore totam dolorem rerum expedita! Placeat molestias laudantium, mollitia
                        veritatis quas iste aspernatur optio labore? Numquam corrupti voluptatem animi debitis aliquid placeat beatae, eaque asperiores 
                        voluptatum veniam, sint nihil hic facilis libero minima.
                    </p>
                </div>
                <div className="entry">
                    <h1>Title 2</h1>
                    <img src={faker.image.cats(200, 200)} alt="Image here"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vitae facere quia placeat veritatis consectetur et labore minima. 
                        Culpa cum velit nihil earum! Non a dolore autem doloribus doloremque! Sequi hic possimus atque explicabo ipsum vitae doloribus alias ad, 
                        recusandae illum? Fugit quo obcaecati quibusdam omnis culpa inventore totam dolorem rerum expedita! Placeat molestias laudantium, mollitia
                        veritatis quas iste aspernatur optio labore? Numquam corrupti voluptatem animi debitis aliquid placeat beatae, eaque asperiores 
                        voluptatum veniam, sint nihil hic facilis libero minima.
                    </p>
                </div>
                <div className="entry">
                    <h1>Title 3</h1>
                    <img src={faker.image.cats(200, 200)} alt="Image here"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vitae facere quia placeat veritatis consectetur et labore minima. 
                        Culpa cum velit nihil earum! Non a dolore autem doloribus doloremque! Sequi hic possimus atque explicabo ipsum vitae doloribus alias ad, 
                        recusandae illum? Fugit quo obcaecati quibusdam omnis culpa inventore totam dolorem rerum expedita! Placeat molestias laudantium, mollitia
                        veritatis quas iste aspernatur optio labore? Numquam corrupti voluptatem animi debitis aliquid placeat beatae, eaque asperiores 
                        voluptatum veniam, sint nihil hic facilis libero minima.
                    </p>
                </div>
                <div className="entry">
                    <h1>Title 4</h1>
                    <img src={faker.image.cats(200, 200)} alt="Image here"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vitae facere quia placeat veritatis consectetur et labore minima. 
                        Culpa cum velit nihil earum! Non a dolore autem doloribus doloremque! Sequi hic possimus atque explicabo ipsum vitae doloribus alias ad, 
                        recusandae illum? Fugit quo obcaecati quibusdam omnis culpa inventore totam dolorem rerum expedita! Placeat molestias laudantium, mollitia
                        veritatis quas iste aspernatur optio labore? Numquam corrupti voluptatem animi debitis aliquid placeat beatae, eaque asperiores 
                        voluptatum veniam, sint nihil hic facilis libero minima.
                    </p>
                </div>
                <div className="entry">
                    <h1>Title 5</h1>
                    <img src={faker.image.cats(200, 200)} alt="Image here"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vitae facere quia placeat veritatis consectetur et labore minima. 
                        Culpa cum velit nihil earum! Non a dolore autem doloribus doloremque! Sequi hic possimus atque explicabo ipsum vitae doloribus alias ad, 
                        recusandae illum? Fugit quo obcaecati quibusdam omnis culpa inventore totam dolorem rerum expedita! Placeat molestias laudantium, mollitia
                        veritatis quas iste aspernatur optio labore? Numquam corrupti voluptatem animi debitis aliquid placeat beatae, eaque asperiores 
                        voluptatum veniam, sint nihil hic facilis libero minima.
                    </p>
                </div>
                <div className="entry">
                    <h1>Title 6</h1>
                    <img src={faker.image.cats(200, 200)} alt="Image here"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vitae facere quia placeat veritatis consectetur et labore minima. 
                        Culpa cum velit nihil earum! Non a dolore autem doloribus doloremque! Sequi hic possimus atque explicabo ipsum vitae doloribus alias ad, 
                        recusandae illum? Fugit quo obcaecati quibusdam omnis culpa inventore totam dolorem rerum expedita! Placeat molestias laudantium, mollitia
                        veritatis quas iste aspernatur optio labore? Numquam corrupti voluptatem animi debitis aliquid placeat beatae, eaque asperiores 
                        voluptatum veniam, sint nihil hic facilis libero minima.
                    </p>
                </div>
                <div className="entry">
                    <h1>Title 7</h1>
                    <img src={faker.image.cats(200, 200)} alt="Image here"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vitae facere quia placeat veritatis consectetur et labore minima. 
                        Culpa cum velit nihil earum! Non a dolore autem doloribus doloremque! Sequi hic possimus atque explicabo ipsum vitae doloribus alias ad, 
                        recusandae illum? Fugit quo obcaecati quibusdam omnis culpa inventore totam dolorem rerum expedita! Placeat molestias laudantium, mollitia
                        veritatis quas iste aspernatur optio labore? Numquam corrupti voluptatem animi debitis aliquid placeat beatae, eaque asperiores 
                        voluptatum veniam, sint nihil hic facilis libero minima.
                    </p>
                </div>
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
                    <Registration />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <AppHome />
                </Route>
            </Switch>
            <footer className="footer">
                <hr></hr>
                <p>
                    Created by Akane Simpson &copy; 2020
                </p>
                <p>
                    Visit the <a href="https://www.gram.edu">univeristy homepage</a> and register today!
                </p>
            </footer>
        </div>
    )
}