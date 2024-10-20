import React from "react";
import { Link } from "react-router-dom";
const HomePage : React.FC = () => {
    return (
    <div className="container bg-dark text-light">
        <header>
            <h1 className="mb-4 text-light text-center">Home Page</h1>
        </header>
        <nav className="container text-center bg-indigo-100 py-3 mb-4 border-primary rounded-3">
            <div className="row">
                <div className="col"><Link to="/form">Form App</Link></div>
                <div className="col"><Link to="/notes">Notes App</Link></div>
                <div className="col"><Link to="/recipefinder">Recipe Finder</Link></div>
                <div className="col"><Link to="/todo">ToDo List</Link></div>
                <div className="col"><Link to="/weather">Weather App</Link></div>
            </div>
        </nav>
        <div className="container-sm">
            <p className="text-center">Welcome to the homepage of my first react project!</p>
            <p className="text-center">Made by Yasmine Tohamy</p>
        </div>
    </div>
    );
}
export default HomePage;
