import React from 'react';
import { Navbar } from 'react-bootstrap';

type HeaderProps = {
    title: String,
}

const Header = ({ title }: HeaderProps) => {
    return (
        <Navbar sticky="top" bg="primary" variant="dark">
            <Navbar.Brand href="/home">
                {title}
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header;

