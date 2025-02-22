import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/topartistas" className="navbar-brand ">API de LastFM</Link>
            <Link to="/toptracks" className="navbar-brand">Top Tracks</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    </header>
)

export default Header;