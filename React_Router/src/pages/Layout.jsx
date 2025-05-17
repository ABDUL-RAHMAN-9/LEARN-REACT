import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css'; // Link to external CSS

const Layout = () =>
{
    return (
        <>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/blog" className="nav-link">Blog</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
            </nav>
            <main className="main-content p-6">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
