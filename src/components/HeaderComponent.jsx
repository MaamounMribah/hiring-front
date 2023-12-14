import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-mauve"style={{ height: '80px' }}>
                        <a  className="navbar-brand">
                            <img
                                src="/logo.png" // Remplacez par le chemin de votre logo
                                alt="Logo"
                                height="100"
                                style={{ maxHeight: '80px' }}
                                className="d-inline-block align-top"
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/users">
                                        Users
                                    </a>
                                </li>
                                {/* Ajoutez d'autres liens selon vos besoins */}
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
