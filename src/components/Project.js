import React from 'react';
import {Badge, Stack} from "react-bootstrap";
import kanban1 from "../images/projects/kanban1.png";
import kanban2 from "../images/projects/kanban2.png";
import onlineStore1 from "../images/projects/online-store-1.png";
import onlineStore2 from "../images/projects/online-store-2.png";
import weatherApp from "../images/projects/weatherApp.png";
import booking1 from "../images/projects/booking1.png";
import booking2 from "../images/projects/booking2.png";
import dragGrop from "../images/projects/dragDrop.png";
import memory from "../images/projects/memory.png";
import puzzle from "../images/projects/puzzle.png";
import ticTacToe from "../images/projects/tic-tac-toe.png";
import toDo from "../images/projects/toDo.png";

const Project = () => {
    return (
        <div className="container my-5" id="projects">

            <div className="container px-4 py-5" id="featured-3">

                <h2 className="pb-2 border-bottom">Projects</h2>
                {/* kanban*/}
                <div className="row align-items-md-stretch mb-3 py-4">
                    <div className="col-md-5">
                        <div className="h-100 p-1 rounded-3">
                            <img src={kanban1}
                                 className="d-block mx-lg-auto img-fluid" alt="Kanban dashboard pic"
                                 width="700" height="500" loading="lazy"
                            />
                            <img src={kanban2}
                                 className="d-block mx-lg-auto img-fluid" alt="Kanban form pic"
                                 width="700" height="500" loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="h-100">
                            <h2>Kanban Client & Server</h2>
                            <Stack direction="horizontal" className='d-block my-4' id='badges'>
                                <Badge pill id='pill' className="large-badge">
                                    JavaScript
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    HTML/CSS
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    React
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    Axios
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    Bootstrap
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    React-redux
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    Redux-thunk
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    ExpressJS
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    MongoDB
                                </Badge>
                            </Stack>

                            <p className='my-4'>A Kanban Board is a app designed to help users organize tasks and manage
                                projects
                                visually. It feature a board with columns that represent different stages of a workflow,
                                such as 'To Do', 'In Progress', 'Review' and 'Done'. Users can create, update or delete
                                task. User can also move cards between columns to track the progress of tasks and change
                                their priority.
                            </p>

                            <div direction="horizontal" gap={2} className='d-flex flex-wrap gap-3 my-4'>

                                <button className="btn btn-outline-secondary" type="button">View Github Client</button>
                                <button className="btn btn-outline-secondary" type="button">View Github Server</button>

                                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" id='link'>
                                    View Project
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                {/* online store*/}
                <div className="row align-items-md-stretch mb-3 py-4">
                    <div className="col-md-5">
                        <div className="h-100 p-1 rounded-3">
                            <img src={onlineStore1}
                                 className="d-block mx-lg-auto img-fluid" alt="online store dashboard pic"
                                 width="700" height="500" loading="lazy"
                            />
                            <img src={onlineStore2}
                                 className="d-block mx-lg-auto img-fluid" alt="online store cart form pic"
                                 width="700" height="500" loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="h-100 ">
                            <h2>Online Store App</h2>
                            <Stack direction="horizontal" className='d-block my-4' id='badges'>
                                <Badge pill id='pill' className="large-badge">
                                    JavaScript
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    HTML/CSS
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    React
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    Bootstrap
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    Context
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    Router
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    LocalStorage
                                </Badge>
                            </Stack>

                            <p className='my-4'>Online store app is a digital platform that enables users to browse,
                                purchase, and manage products. This app provides a streamlined shopping experience,
                                allowing users to search for products, add them to carts, and change their quantities if
                                necessary. The app also allows users to navigate to the cart, where items can be added,
                                viewed, and modified.
                            </p>

                            <div direction="horizontal" gap={2} className='d-flex flex-wrap gap-3 my-4'>

                                <button className="btn btn-outline-secondary" type="button">View Github</button>

                                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" id='link'>
                                    View Project
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
                {/*weather app*/}
                <div className="row align-items-md-stretch mb-3 py-4">
                    <div className="col-md-5">
                        <div className="h-100 p-1 rounded-3">
                            <img src={weatherApp}
                                 className="d-block mx-lg-auto img-fluid" alt="Weather App dashboard pic"
                                 width="700" height="500" loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="h-100 ">
                            <h2>Weather App</h2>
                            <Stack direction="horizontal" className='d-block my-4' id='badges'>
                                <Badge pill id='pill' className="large-badge">
                                    JavaScript
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    HTML/CSS
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    React
                                </Badge>
                            </Stack>

                            <p className='my-4'>Weather app provides users with current weather information based on
                                open API services. Weather App has clean and intuitive layout, making it easy for users
                                of all ages to navigate. It allows manual entry of a city or zip code for weather
                                updates. In addition to searching for the desired city, the user is able to adjust the
                                F/C measurement.
                            </p>

                            <div direction="horizontal" gap={2} className='d-flex flex-wrap gap-3 my-4'>

                                <button className="btn btn-outline-secondary" type="button">View Github</button>

                                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" id='link'>
                                    View Project
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                {/*booking App*/}
                <div className="row align-items-md-stretch mb-3 py-4">
                    <div className="col-md-5">
                        <div className="h-100 p-1 rounded-3">
                            <img src={booking1}
                                 className="d-block mx-lg-auto img-fluid" alt="Booking app login pic"
                                 width="700" height="500" loading="lazy"
                            />
                            <img src={booking2}
                                 className="d-block mx-lg-auto img-fluid" alt="Booking app dashboard pic"
                                 width="700" height="500" loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="h-100 ">
                            <h2>Booking App</h2>
                            <Stack direction="horizontal" className='d-block my-4' id='badges'>
                                <Badge pill id='pill' className="large-badge">
                                    JavaScript
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    HTML/CSS
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    React
                                </Badge>
                            </Stack>

                            <p className='my-4'>A booking app is a digital tool that allows users to browse and reserve
                                accommodations with ease. It includes core listing feature which allows to displays
                                available services, appointments, or accommodations, along with details such as
                                descriptions, images, and prices.
                            </p>

                            <div direction="horizontal" gap={2} className='d-flex flex-wrap gap-3 my-4'>

                                <button className="btn btn-outline-secondary" type="button">View Github</button>

                                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" id='link'>
                                    View Project
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                {/*dragdrop*/}
                <div className="row align-items-md-stretch mb-3 py-4">
                    <div className="col-md-5">
                        <div className="h-100 p-1 rounded-3">
                            <img src={dragGrop}
                                 className="d-block mx-lg-auto img-fluid" alt="drugDrop app pic"
                                 width="700" height="500" loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="h-100 ">
                            <h2>Drug & Drop App</h2>
                            <Stack direction="horizontal" className='d-block my-4' id='badges'>
                                <Badge pill id='pill' className="large-badge">
                                    JavaScript
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    HTML/CSS
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    React
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    MUI
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    React DnD
                                </Badge>
                            </Stack>

                            <p className='my-4'>A Drag & Drop Table app allows users to interactively organize and manipulate table data by dragging and dropping rows, columns. Additionally, the user has the option of adding columns, rows and updating data.
                            </p>

                            <div direction="horizontal" gap={2} className='d-flex flex-wrap gap-3 my-4'>

                                <button className="btn btn-outline-secondary" type="button">View Github</button>

                                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" id='link'>
                                    View Project
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                {/*memory*/}
                <div className="row align-items-md-stretch mb-3 py-4">
                    <div className="col-md-5">
                        <div className="h-100 p-1 rounded-3">
                            <img src={memory}
                                 className="d-block mx-lg-auto img-fluid" alt="memory app pic"
                                 width="700" height="500" loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="h-100 ">
                            <h2>Memory Game</h2>
                            <Stack direction="horizontal" className='d-block my-4' id='badges'>
                                <Badge pill id='pill' className="large-badge">
                                    JavaScript
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    HTML/CSS
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    React
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    MUI
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    React DnD
                                </Badge>
                            </Stack>

                            <p className='my-4'>A Memory Game app is designed to challenge and improve a player's memory skills by matching pairs of cards or tiles.
                            </p>

                            <div direction="horizontal" gap={2} className='d-flex flex-wrap gap-3 my-4'>

                                <button className="btn btn-outline-secondary" type="button">View Github</button>

                                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" id='link'>
                                    View Project
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                {/*15 puzzle*/}
                <div className="row align-items-md-stretch mb-3 py-4">
                    <div className="col-md-5">
                        <div className="h-100 p-1 rounded-3">
                            <img src={puzzle}
                                 className="d-block mx-lg-auto img-fluid" alt="puzzle app pic"
                                 width="700" height="500" loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="h-100 ">
                            <h2>15 Puzzle Game</h2>
                            <Stack direction="horizontal" className='d-block my-4' id='badges'>
                                <Badge pill id='pill' className="large-badge">
                                    TypeScript
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    HTML/CSS
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    React
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    Zustand
                                </Badge>
                            </Stack>

                            <p className='my-4'>A 15 Puzzle Game App is a classic sliding puzzle game where players aim to arrange numbered tiles in sequential order.
                            </p>

                            <div direction="horizontal" gap={2} className='d-flex flex-wrap gap-3 my-4'>

                                <button className="btn btn-outline-secondary" type="button">View Github</button>

                                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" id='link'>
                                    View Project
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                {/*tic-tac-toe*/}
                <div className="row align-items-md-stretch mb-3 py-4">
                    <div className="col-md-5">
                        <div className="h-100 p-1 rounded-3">
                            <img src={ticTacToe}
                                 className="d-block mx-lg-auto img-fluid" alt="tic-tac-toe app pic"
                                 width="700" height="500" loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="h-100 ">
                            <h2>Tic-Tac-Toe Game</h2>
                            <Stack direction="horizontal" className='d-block my-4' id='badges'>
                                <Badge pill id='pill' className="large-badge">
                                    JavaScript
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    HTML/CSS
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    React
                                </Badge>
                            </Stack>

                            <p className='my-4'>A Tic-Tac-Toe Game App offers the classic 3x3 grid-based game where two players compete to get three of their marks in a row.
                            </p>

                            <div direction="horizontal" gap={2} className='d-flex flex-wrap gap-3 my-4'>

                                <button className="btn btn-outline-secondary" type="button">View Github</button>

                                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" id='link'>
                                    View Project
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                {/*to-do*/}
                <div className="row align-items-md-stretch mb-3 py-4">
                    <div className="col-md-5">
                        <div className="h-100 p-1 rounded-3">
                            <img src={toDo}
                                 className="d-block mx-lg-auto img-fluid" alt="to do app pic"
                                 width="700" height="500" loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="h-100 ">
                            <h2>To Do Add</h2>
                            <Stack direction="horizontal" className='d-block my-4' id='badges'>
                                <Badge pill id='pill' className="large-badge">
                                    JavaScript
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    HTML/CSS
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    React
                                </Badge>
                                <Badge pill id='pill' className="large-badge">
                                    Chakra-UI
                                </Badge>
                            </Stack>

                            <p className='my-4'>A To-Do List app helps users organize and manage their tasks efficiently with a clean and user-friendly interface. It allows you to add, edit, delete tasks, as well as mark them as completed.
                            </p>

                            <div direction="horizontal" gap={2} className='d-flex flex-wrap gap-3 my-4'>

                                <button className="btn btn-outline-secondary" type="button">View Github</button>

                                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" id='link'>
                                    View Project
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
