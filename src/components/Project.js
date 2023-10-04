import React from "react";

const Project = () => {
    return (
        <>
            <section id="skills" className="skills section-bg mt-5">
                <div className="container">
                    <div className="section-title">
                        <h3 className="text-warning">Project 1: Progress Pulse</h3>
                        <h5>Overview:</h5>
                        <p>Progress Pulse is a comprehensive company management application designed to streamline and enhance the workflow and communication within an organization. This versatile platform accommodates multiple user roles, including Admin, Manager, HR, and Employee, each with specific functionalities tailored to their responsibilities. Progress Pulse empowers companies to efficiently manage employee work details, facilitate communication, and ensure a seamless working environment.</p>
                        <h5>User Roles:</h5>
                        <h6 className="text-primary">Admin:</h6>
                        <p>Admin holds the highest authority in the system.
                            Can access and oversee all functionalities and data within the application.
                            Responsible for maintaining the integrity and security of the platform.
                            Has the ability to add, modify, or remove users.</p>
                        <h6 className="text-primary"> Manager:</h6>
                        <p>Managers play a pivotal role in team management and work supervision.
                            Can create and manage teams by adding or removing team members.
                            Access to employee updates and the ability to approve or reject leave requests.
                            Monitors and tracks the progress of team members' work.</p>
                        <h6 className="text-primary">  HR (Human Resources):</h6>
                        <p> HR personnel can efficiently manage employee records.
                            Has the authority to add new members to the company.
                            Can oversee and assist with onboarding processes.</p>
                        <h6 className="text-primary"> Employee:</h6>
                        <p> Employees can use Progress Pulse to document their work updates.
                            Can access their previous updates to review their work history.
                            Submit leave requests for manager approval.
                            Collaborate with colleagues and supervisors.</p>
                        <h5>Key Features:</h5>
                        <p><span className="text-primary">Work Updates:</span> Employees can create and share updates on their work progress, fostering transparency and accountability.</p>
                        <p><sapn className="text-primary">Leave Management:</sapn> Managers can review and approve/reject leave requests from employees, ensuring efficient workforce management.</p>
                        <p><span className="text-primary">Team Management:</span>Managers have the capability to build and manage teams, assigning tasks and monitoring performance.</p>
                        <p><span className="text-primary">User Onboarding:</span>HR personnel can easily onboard new employees by adding them to the system.</p>
                        <p><span className="text-primary">Comprehensive Admin Dashboard:</span>Admins have access to a central dashboard displaying all system data and functionalities.</p>
                        <h4> Benefits:</h4>
                        <p><span className="text-primary">Enhanced Productivity:</span>Progress Pulse facilitates effective communication and collaboration, leading to increased productivity.</p>
                        <p><span className="text-primary">Streamlined Workflow:</span>The platform simplifies workflow management, from work updates to leave requests.
                            Data Security: Admins ensure data security and oversee the platform's integrity.</p>
                        <p>
                            <span className="text-primary">Efficient HR Operations:</span>HR personnel can efficiently handle employee onboarding and records.
                            Team Collaboration: Teams can collaborate seamlessly, enhancing overall efficiency.</p>
                        <p className="text-warning">
                            Progress Pulse is the ideal solution for companies seeking a user-friendly, multi-role application to optimize their operations, improve communication, and boost productivity. With its diverse functionalities, it caters to the specific needs of each user role, making it an invaluable asset in modern workplace management.</p>
                    </div>
                </div>
            </section>
            <section id="skills" className="skills section-bg mt-5">
                <div className="container">
                    <div className="section-title">
                        <h5>Overview:</h5>
                        <p>The Todo Application is a multi-user task management platform that empowers users to efficiently organize their tasks while providing administrators with comprehensive control over user management and task assignments. Developed using HTML, CSS, MongoDB, Node.js, and Express.js, this application offers a wide range of features to enhance task management and collaboration.</p>
                        <h3 className="text-warning">Project 2: Todo Application</h3>
                        <h5>User Registration and Authentication:</h5>
                        <p>Users can sign up and log in using Google authentication for a seamless and secure experience.</p>
                        <h5>Task Management:</h5>
                        <ul>
                            <li>Users can create, modify, delete, and mark tasks as completed or pending.</li>
                            <li>Prioritize tasks by assigning different priority levels.</li>
                            <li>Filter tasks based on priority and status (completed or pending).</li>
                            <li>Implement pagination for efficient task navigation.</li>
                            <li>
                                Search tasks by task names for quick retrieval.
                            </li>
                        </ul>
                        <h5>Admin Functionalities:</h5>
                        <h6 className="text-primary"> User Management:</h6>
                        <ul>
                            <li>Admin can view a list of all registered users.</li>
                            <li>Assign tasks to users, facilitating efficient task distribution.</li>
                            <li>Modify user details and delete user accounts as needed.</li>
                        </ul>
                        <h6 className="text-primary"> Task Management:</h6>
                        <ul>
                            <li>Admin has access to all tasks across the application.</li>
                            <li>Assign tasks to specific users, ensuring accountability.</li>
                            <li>Modify or delete tasks to maintain task accuracy and relevance.</li>
                        </ul>
                        <h5>Key Features:</h5>
                        <p><span className="text-primary">User-Friendly Interface: </span> The application offers an intuitive and user-friendly interface for seamless task management.</p>
                        <p><sapn className="text-primary">Google Authentication: </sapn>  Enhanced security through Google authentication for user registration and login.</p>
                        <p><span className="text-primary">Task Customization: </span>Users can prioritize tasks, filter by status and priority, and perform various task-related actions.</p>
                        <p><span className="text-primary">Efficient Search: </span>Quick task retrieval using task names for better organization.</p>
                        <p><span className="text-primary">Admin Control:</span>Administrators have comprehensive control over user and task management.</p>
                        <h4> Benefits:</h4>
                        <p><span className="text-primary">Enhanced Productivity:</span>Users can efficiently manage and organize their tasks, improving overall productivity.</p>
                        <p><span className="text-primary">Secure Authentication:</span>Google authentication ensures user data security.</p>
                        <p>
                            <span className="text-primary">Streamlined Task Management: </span>The application simplifies task tracking and modification..</p>
                        <p className="text-warning">
                            The Todo Application serves as a powerful tool for individuals and teams seeking an organized and efficient way to manage tasks. With its intuitive design and robust functionality, it provides a seamless task management experience, while administrators can maintain control over user accounts and task assignments for enhanced collaboration and productivity.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project;