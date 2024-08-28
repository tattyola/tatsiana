import React from 'react';
import {HiOutlineMail} from "react-icons/hi";
import {BsGithub} from "react-icons/bs";
import {FaLinkedin} from "react-icons/fa";


const Footer = () => {

    const handleEmailClick = () => {
        window.location.href = 'mailto:tatty.astrouskaya@gmail.com';
    };

    return (
        <div className="container footer">
            <footer
                className="d-flex flex-column justify-content-center align-items-center py-3 my-4 border-top text-center">
                <a className="mb-1 text link" href="#home">Tatsiana Astrouskaya</a>
                <p className='text'>Designed with love, all rights reserved for Tatsiana Astrouskaya</p>

                <ul className="nav justify-content-center list-unstyled d-flex">
                    <li className="ms-3" >
                        <button className="text-body-secondary" onClick={handleEmailClick} >
                          <HiOutlineMail className="icon-color" />
                        </button>
                    </li>
                    <li className="ms-3"><a className="text-body-secondary" href="https://github.com/tattyola">
                        <BsGithub className="icon-color"/>
                    </a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="https://www.linkedin.com/in/tatsiana-astrouskaya/">
                        <FaLinkedin className="icon-color"/>
                    </a></li>
                </ul>
            </footer>
        </div>

    );
};

export default Footer;
