import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return (
        <div>
            
            <div className="main-grid">
        <header>
        <nav className="nav">
            
        </nav>
        </header>

        <main>
            <h1 className="title">Mern project</h1>
            <p className="location">Features - Login Signup Profile</p>
            
            <p className="description">Eduonetech front end intern project, with the help of this you can signup and login and even see your Profile.</p>
            <NavLink className="btn" to="/signup">Start Now</NavLink>
            <br></br>
        </main>
    </div>
        </div>
        );
    }
}
export default Home