import React from 'react';
import {HiOutlineMail} from "react-icons/hi";
import {BsGithub} from "react-icons/bs";
import {FaLinkedin} from "react-icons/fa";


const Footer = () => {
    return (
        <div className="container footer">
            <footer
                className="d-flex flex-column justify-content-center align-items-center py-3 my-4 border-top text-center">
                <a className="mb-1 text link" href="#home">Tatsiana Astrouskaya</a>
                <p className='text'>Designed with love, all rights reserved for Tatsiana Astrouskaya</p>

                <ul className="nav justify-content-center list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="/">
                        <HiOutlineMail className="icon-color"/>
                    </a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="/">
                        <BsGithub className="icon-color"/>
                    </a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="/">
                        <FaLinkedin className="icon-color"/>
                    </a></li>
                </ul>
            </footer>
        </div>

    );
};

export default Footer;
