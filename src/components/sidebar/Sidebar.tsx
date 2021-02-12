import React, { MouseEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SidebarNavElement from './SidebarNavElement';

const Sidebar = () => {

    // labels and routes
    const routes = [
        {
            label: "Games",
            route: "/home/games",
        },
        {
            label: "Players",
            route: "/home/players",
        },
    ];


    /**************
     * Render
     **************/
    const sideBarLis = routes.map((r, i) => {
        return <SidebarNavElement
            key={i}
            label={r.label}
            route={r.route}
        />
    });

    return (
        <ul className="list-group list-group-flush">
            {sideBarLis}
        </ul>
    )
}

export default Sidebar;
