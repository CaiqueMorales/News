import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './NavBar'
import Home from './pages/Home';
import Animes from './pages/Animes';
import Mangas from './pages/Mangas';
import Jogos from './pages/Jogos';

import './App.css';

function App () {   

    return(

        <Router>

            <NavBar />
            
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/Animes">
                    <Animes />
                </Route>

                <Route path="/Mangas">
                    <Mangas />
                </Route>

                <Route path="/Jogos">
                    <Jogos />
                </Route>
                
            </Switch>    
            
            
        </Router>            

    )


}

export default App
