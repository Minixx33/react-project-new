import React from "react";
import { Link } from "react-router-dom";
const HomePage : React.FC = () => {
    return (
    <div className="HomePage">
        <header>
            <h1>Home Page</h1>
        </header>
        <nav className="navigation">
            <li><Link to="/form">Form App</Link></li>
            <li><Link to="/notes">Notes App</Link></li>
            <li><Link to="/recipefinder">Recipe Finder</Link></li>
            <li><Link to="/todo">ToDo List</Link></li>
            <li><Link to="/weather">Weather App</Link></li>
        </nav>
        <body>
            <p>Welcome to the homepage of my first react project!</p>
        </body>
        <footer>
            <p>Made by Yasmine Tohamy</p>
        </footer>
    </div>
    );
}
export default HomePage;
