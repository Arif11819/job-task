import React from 'react';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer class="flex justify-center items-center w-full h-24 bg-gray-300">
            <p><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> All Right Reserved By Ariful Islam-{year}</p>
        </footer>
    );
};

export default Footer;