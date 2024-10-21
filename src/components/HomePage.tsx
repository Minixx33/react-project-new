import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage : React.FC = () => {
    const gif = `${process.env.PUBLIC_URL}/assets/club-penguin-dance.gif`;

    return (
    <div className="container bg-dark text-light">
        <header>
            <h1 className="mb-4 text-light text-center py-3">Home Page</h1>
        </header>
        <nav className="container text-center bg-indigo-100 py-3 mb-4 border-primary rounded-3">
            <div className="row">
                <div className="col"><Link to="/form">Form Validation App</Link></div>
                <div className="col"><Link to="/notes">Notes App</Link></div>
                <div className="col"><Link to="/todo">ToDo App</Link></div>
                <div className="col"><Link to="/weather">Weather App</Link></div>
            </div>
        </nav>
        <div className="container-sm">
            <p className="text-center">Welcome to the homepage of my first react project!</p>
            <figure className="text-center">
                    <img src={gif} alt="Just a fun little gif :)" className="img-fluid w-50 rounded-3" />
                    <figcaption className="mt-2">Just a fun little GIF :)</figcaption>
            </figure>            
            <h4 className="text-center py-5">Made by Yasmine Tohamy</h4>
        </div>
    </div>
    );
}
export default HomePage;
