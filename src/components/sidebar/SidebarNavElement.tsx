import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

type SidebarNavElementProps = {
    label: string,
    route: string,
}

const SidebarNavElement = ({ label, route }: SidebarNavElementProps) => {
    const history = useHistory();

    const handleClicked = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        history.push(route);
    }


    return (
        <a className="list-group-item" onClick={handleClicked}>{label}</a>
    )
}

export default SidebarNavElement;
