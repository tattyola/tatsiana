import React from 'react';
import TatsianaPhoto from '../images/Tatsiana Astrouskaya.png'

const Home = () => {
    const handlePdfClick = () => {
        window.open('/FullStackDeveloper.pdf', '_blank');
    };
    const handleEmailClick = () => {
        window.location.href = 'mailto:tatty.astrouskaya@gmail.com';
    };
    return (
        <div className='container' id='home'>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6 pic">
                    <img src={TatsianaPhoto}
                         className="d-block mx-lg-auto img-fluid" alt="Tatsiana"
                         width="500" height="350" loading="lazy"
                    />
                </div>
                <div className="col-lg-6">
                    <div className='greetings'>
                        <h2>Hello</h2>
                        <div className="circle"></div>
                    </div>

                    <div id='name'>
                        <div className='rectangle'></div>
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 my-4">
                            I'm Tatsiana
                        </h1>
                    </div>

                    <h2 className='mt-4'>Software Developer</h2>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
                        <button onClick={handleEmailClick} type="button" className="btn btn-primary btn-lg px-4 me-md-2">Got a Project?</button>
                        <button onClick={handlePdfClick} type="button" className="btn btn-outline-secondary btn-lg px-4">My Resume</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;
