import React from 'react'
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Watchlist</Link>
                    </div>

                    <ul className="nav-1inks">
                        <li>
                            <Link to="/">Watch List</Link>
                        </li>

                        <li>
                            <Link to="/watched">Watched</Link>
                        </li>

                        <li>
                            <Link to="/add" className="btn">
                                + Add
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
