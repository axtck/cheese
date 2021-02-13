import React, { FunctionComponent } from 'react';

interface HeaderProps {
    title: string,
}

const Header: FunctionComponent<HeaderProps> = ({ title }) => {

    // labels and routes
    const routes = [
        {
            label: "home",
            route: "/home",
        },
        {
            label: "about",
            route: "/about",
        },
        {
            label: "contact",
            route: "/contact",
        },
    ];


    /************
     * Render
     ************/
    const navLis = routes.map((r, i) => {
        return <li key={i} className="nav-item"><a className="nav-link" href={r.route}>{r.label}</a></li>
    });

    return (
        <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-primary mb-3">
            <div className="container">
                <a className="navbar-brand ml-3" href="/home">{title}</a>
                <ul className="navbar-nav">
                    {navLis}
                </ul>
            </div>
        </nav>
    )
}

export default Header;

