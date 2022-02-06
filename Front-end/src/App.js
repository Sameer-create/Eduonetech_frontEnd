import React from 'react';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import './App.css';


function App() {
    return (
        <>
        <Navbar/>
        
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/profile">
            <Profile />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/signup">
            <Signup />
        </Route>
        </>
    )
}

export default App;
