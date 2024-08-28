import React from 'react';

const Contact = () => {
    return (
        <div className="container my-5" id="contacts">
            <h2 className="pb-2 border-bottom">Contacts</h2>
            <div className="row my-5">

                <div className="col-lg-6 col-md-12 p-5" id="connect">
                    <p className="fs-2 m-5">Have a Project?</p>
                    <p className="fs-2 m-5">Let's Talk!</p>
                </div>

                <div className="col-lg-6 col-md-12" id="form">
                    <form action="https://formsubmit.co/d80f801c7e2feb5d0f3cfdd4d3c33f95" method="POST" className="needs-validation" noValidate="">
                        <div className="row g-3">
                            <div className="col-12 text">
                                <label htmlFor="firstName" className="form-label">Your name</label>
                                <input type="name" name="name" className="form-control" id="name" required
                                       placeholder=""/>
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label text">Your email
                                </label>
                                <input type="email" name="email" placeholder="Email Address" className="form-control" id="email" required/>
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label text">Message</label>
                                <input style={{height: '200px', padding: '10px'}} type="text" className="form-control"
                                       id="message" name="message"
                                       placeholder="Please enter your message here ..."
                                       required/>
                            </div>

                            <div className="d-inline-flex gap-2 my-5">
                                <button
                                    className="btn btn-primary btn-lg px-4 rounded-pill d-flex align-items-center justify-content-center"
                                    type="submit">
                                    Send
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
};

export default Contact;
