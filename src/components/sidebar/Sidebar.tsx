import React, { FunctionComponent } from 'react';

interface SidebarProps { };

const Sidebar: FunctionComponent<SidebarProps> = () => {

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
        {
            label: "Submit game",
            route: "/home/games/create",
        },

    ];


    /**************
     * Render
     **************/
    const sideBarLis = routes.map((r, i) => {
        return <a className="list-group-item" key={i} href={r.route}>{r.label}</a>
    });

    return (
        <ul className="list-group list-group-flush">
            {sideBarLis}
        </ul>
    )
}

export default Sidebar;
