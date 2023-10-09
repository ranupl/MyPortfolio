import React, { useState } from "react";

const Project = () => {
    const [progress, setProgress] = useState(false);
    const [todo, setTodo] = useState(false);

    const handleProgress = () => {
        setProgress(true);
        setTodo(false);
    };

    const handleTodo = () => {
        setTodo(true);
        setProgress(false);
    };

    return (
        <>
            <section id="skills" className="skills section-bg mt-5">
                <div className="container">
                    <div className="mb-5 card-show">
                        <div className="col">
                            <div className="text-center card-style scale-up-center" onClick={handleProgress}>
                                <h1 className="fontHeading">Progress Pulse</h1>
                                <p className="text-white font">Full Stack Application</p>
                                <p className="text-white font">Company collaboration and team management</p>
                                <p className="text-white font">(Built with React.js, Node.js, and MySQL.)</p>
                                <p className="pb-5 text-warning font">(click me)</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="text-center card-style scale-up-center" onClick={handleTodo}>
                                <h1 className="fontHeading">Todo Application</h1>
                                <p className="text-white font">Full Stack Application</p>
                                <p className="text-white font">Track and manage your tasks with ease.</p>
                                <p className="text-white font">(Built with HTML, CSS, Node.js, and MongoDB.)</p>
                                <p className="pb-5 text-warning font">(click me)</p>
                            </div>
                        </div>
                    </div>

                    {progress && (
                        <div className="card-details border card-padding mb-5">
                            <h4 className="projectHeading mb-2">Progress Pulse</h4>
                            <h5>Frontend :- </h5>
                            <p className="para"><span className="para-color">Browser Routing:</span> Implemented client-side routing, allowing users to navigate different sections of the application without requiring full page reloads.</p>
                            <p className="para"><span className="para-color"> Local Storage for Token Management:</span> JWT tokens are stored in the client-side local storage, ensuring persistent user authentication between sessions.</p>
                            <p className="para"><span className="para-color">Responsive Dashboard for Multiusers:</span> Application features a responsive dashboard that adapts to different screen sizes and is accessible to multiple users. Users can log in and access specific features based on their roles.</p>
                            <p className="para"><span className="para-color"> Axios and JWT Decode:</span> Axios is used for making asynchronous HTTP requests to backend API. JWT decoding is used to extract user information from JWT tokens for authentication and authorization.</p>
                            <p className="para"><span className="para-color">Component-Based Design:</span>  Structured frontend using reusable components, passing props between them to build a modular and maintainable codebase.</p>
                            <h5>Backend :- </h5>
                            <p className="para"><span className="para-color">Three-Layer Architecture:</span> Structured Node.js backend using a three-layer architecture, which typically consists of the presentation layer, business logic layer, and data access layer. This helps in maintaining a clean and organized codebase.</p>
                            <p className="para"><span className="para-color">Middleware for Authentication:</span> Implemented middleware functions for user authentication, ensuring that only authorized users can access certain parts of your application.</p>
                            <p className="para"><span className="para-color">Authentication by Session and JWT Token Management:</span>  Provided two methods for user authentication: session-based authentication and JWT token-based authentication. This gives users flexibility in how they log in and access the application.</p>
                            <p className="para"><span className="para-color">Ethereal Email for Forgot Password Functionality:</span> Integrated Ethereal email for the "forgot password" functionality, allowing users to reset their passwords securely.</p>
                            <p className="para"><span className="para-color">Role-Based Functionality:</span>  Depending on a user's role, they have access to different functionalities within the application. This role-based access control enhances security and ensures that users can perform tasks relevant to their roles.</p>
                            <p className="para"><span className="para-color">Calendar Filtering:</span>  Implemented a calendar filtering feature that allows users to filter data based on dates, enhancing the user experience.</p>
                            <p className="para"><span className="para-color">User Search:</span>   Users can search for other team members by their names, making it easy to find and collaborate with colleagues.</p>
                            <p className="para"><span className="para-color">CRUD Operations (Create, Read, Update, Delete):</span>  Provided functionality for adding, updating, and deleting team members. This allows for efficient management of user data within the application.</p>
                            <p className="para"><span className="para-color"> RESTful APIs:</span> Backend exposes RESTful APIs that allow for the retrieval and manipulation of data, enhancing the interactivity of application.</p>
                            <p className="para"><span className="para-color"> Transaction Handling:</span> Used database transactions to maintain data consistency, ensuring that multiple database operations either succeed together or fail together.</p>
                            <p className="para"><span className="para-color"> Nodemailer for Sending Messages:</span> Integrated the Nodemailer module to send messages via email, facilitating communication within the application.</p>
                            <h5>Database Design :- </h5>
                            <p className="para"><span className="para-color"> MySQL Database:</span>  Designed a MySQL database that uses mapping, foreign keys, and primary keys for efficient data storage and retrieval.</p>
                            <p className="para"><span className="para-color"> Schema with Multiple Tables: </span>Database schema includes multiple tables with well-defined data types, relationships, and constraints, ensuring data integrity and organization.</p>
                            <h6 className="projectHeading border bg-color">Overall, "Progress Pulse" project showcases a robust and well-structured application with a range of features and technologies, making it a valuable tool for company collaboration and team management. The combination of React.js, Node.js, Express.js, and MySQL provides a powerful foundation for application functionality and user experience.</h6>
                        </div>
                    )}

                    {todo && (
                        <div className="card-details border card-padding mb-5">
                            <h4 className="projectHeading mb-2">Todo Application</h4>
                            <h5>Frontend :- </h5>
                            <p className="para"><span className="para-color">Responsive Dashboard:</span>
                                The frontend features a responsive dashboard that adapts to different screen sizes, ensuring a consistent user experience across devices.
                            </p>
                            <p className="para"><span className="para-color">HTML, CSS, and Bootstrap:</span>
                                Utilized HTML and CSS, along with Bootstrap, to create an aesthetically pleasing and user-friendly interface.
                            </p>
                            <h5>Backend :</h5>
                            <p className="para"><span className="para-color">  User Authentication:</span>
                                Implemented user authentication using both cookies and sessions to securely manage user sessions.
                                Google authentication is also supported, allowing users to log in with their Google accounts.
                            </p>
                            <p className="para"><span className="para-color"> Forgot Password Functionality:</span>
                                Integrated Ethereal email and Nodemailer to enable users to reset their passwords when they forget them, enhancing security and user convenience.
                            </p>
                            <p className="para"><span className="para-color">Task Management:</span>
                                Users can perform various task management actions, such as creating, updating, and deleting tasks.
                                Tasks can be searched, paginated, and filtered by priority and status, providing a streamlined task management experience.
                            </p>
                            <h5>Database :</h5>
                            <p className="para"><span className="para-color"> MongoDB Database:</span>
                                Chosen MongoDB as your database system for storing task and user data.
                            </p>
                            <p className="para"><span className="para-color"> Schema Design:</span>
                                Designed a database schema that enforces proper constraints, relationships, and data types to maintain data integrity and organization.
                            </p>
                            <h6 className="projectHeading border bg-color">Application supports multiple users, allowing each user to have their own set of tasks.
                                Administrators have the ability to assign tasks to specific users and view all tasks, including the tasks of other users.
                                Admins can also delete user accounts as needed, which is essential for user management.</h6>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Project;