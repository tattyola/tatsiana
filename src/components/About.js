import React from 'react';
import htmlIcon from '../images/HTML_icon.svg';
import cssIcon from '../images/css_ICON.svg';
import jsIcon from '../images/jsLOGO.svg';
import tsIcon from '../images/TS.svg';
import nodeIcon from '../images/nodejs-icon.svg';
import reactIcon from '../images/react_icon.svg';
import gitIcon from '../images/gitIcon.svg';
import gitHub from '../images/github.png'
import docker from '../images/docker.png'
import restApi from '../images/restApi.webp'



const About = () => {
    return (

        <div className="container my-5" id="about">

            <div className="container px-4 py-5" id="featured-3">

                <h2 className="pb-2 border-bottom">About me</h2>

                <p className="lead">
                    I started my software journey from love to solve complex things. Through that, I learned to love the
                    process of creating from scratch. Since then, this has led me to software development as
                    it <code>fulfills </code>
                    my love for learning and building things.
                </p>

                <div className="row g-4 py-5 row-cols-1 row-cols-lg-5" id='tools'>

                    <div className="feature col">
                        <div
                            className="feature-icon d-flex justify-content-center align-items-center bg-gradient fs-2 mb-3">
                            <img src={nodeIcon}
                                 className="bi" width="100px" height='100px' alt="Node Icon" loading="lazy"
                            />
                        </div>
                        <p className="fs-5 text-body-emphasis text-center">NodeJS</p>

                    </div>

                    <div className="feature col">
                        <div
                            className="feature-icon d-flex justify-content-center align-items-center bg-gradient fs-2 mb-3">
                            <img src={jsIcon}
                                 className="bi" width="100px" height='100px' alt="JavaScript Icon" loading="lazy"
                            />
                        </div>
                        <p className="fs-5 text-body-emphasis text-center">JavaScript</p>

                    </div>

                    <div className="feature col">
                        <div
                            className="feature-icon d-flex justify-content-center align-items-center bg-gradient fs-2 mb-3">
                            <img src={tsIcon}
                                 className="bi" width="100px" height='100px' alt="TypeScript Icon" loading="lazy"
                            />
                        </div>
                        <p className="fs-5 text-body-emphasis text-center">TypeScript</p>

                    </div>

                    <div className="feature col">
                        <div
                            className="feature-icon d-flex justify-content-center align-items-center bg-gradient fs-2 mb-3">
                            <img src={htmlIcon}
                                 className="bi" width="100px" height='100px' alt="HTML Icon" loading="lazy"
                            />
                        </div>
                        <p className="fs-5 text-body-emphasis text-center">HTML</p>

                    </div>

                    <div className="feature col">
                        <div
                            className="feature-icon d-flex justify-content-center align-items-center bg-gradient fs-2 mb-3">
                            <img src={cssIcon}
                                 className="bi" width="100px" height='100px' alt="CSS Icon" loading="lazy"
                            />
                        </div>
                        <p className="fs-5 text-body-emphasis text-center">CSS</p>

                    </div>

                    <div className="feature col">
                        <div
                            className="feature-icon d-flex justify-content-center align-items-center bg-gradient fs-2 mb-3">
                            <img src={reactIcon}
                                 className="bi" width="100px" height='100px' alt="React Icon" loading="lazy"
                            />
                        </div>
                        <p className="fs-5 text-body-emphasis text-center">React</p>

                    </div>

                    <div className="feature col">
                        <div
                            className="feature-icon d-flex justify-content-center align-items-center bg-gradient fs-2 mb-3">
                            <img src={gitIcon}
                                 className="bi" width="100px" height='100px' alt="Git Icon" loading="lazy"
                            />
                        </div>
                        <p className="fs-5 text-body-emphasis text-center">Git</p>

                    </div>

                    <div className="feature col">
                        <div
                            className="feature-icon d-flex justify-content-center align-items-center bg-gradient fs-2 mb-3">
                            <img src={restApi}
                                 className="bi" height="100px" alt="REST APIs Icon" loading="lazy"
                            />
                        </div>
                        <p className="fs-5 text-body-emphasis text-center">REST APIs</p>
                    </div>

                    <div className="feature col">
                        <div
                            className="feature-icon d-flex justify-content-center align-items-center bg-gradient fs-2 mb-3">
                            <img src={gitHub}
                                 className="bi" width="100px" height='100px' alt="GitHub Icon" loading="lazy"
                            />
                        </div>
                        <p className="fs-5 text-body-emphasis text-center">GitHub</p>
                    </div>

                    <div className="feature col">
                        <div
                            className="feature-icon d-flex justify-content-center align-items-center bg-gradient fs-2 mb-3">
                            <img src={docker}
                                 className="bi" width="100px" height='100px' alt="Docker Icon" loading="lazy"
                            />
                        </div>
                        <p className="fs-5 text-body-emphasis text-center">Docker</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default About;
