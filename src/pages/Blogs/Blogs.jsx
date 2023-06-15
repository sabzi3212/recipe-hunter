import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Tell us the differences between uncontrolled and controlled components.</Accordion.Header>
                <Accordion.Body>
                    Uncontrolled components in React have their state managed internally by the DOM, allowing them to directly access the DOM for retrieving input values or handling events. They require less code and are simpler to implement, making them suitable for simple forms or scenarios where data manipulation is not required. Value updates in uncontrolled components are asynchronous, as they rely on the DOM for updating the values.
                    On the other hand, controlled components have their state managed by React using component state variables, providing enhanced control, validation, and manipulation of form inputs before submission. They require more code compared to uncontrolled components but offer immediate value updates, allowing for real-time validation and manipulation. Controlled components are often used when more complex form handling is required.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How to validate React props using PropTypes</Accordion.Header>
                <Accordion.Body>
                    To validate React props using PropTypes, first, install the prop-types package using npm or yarn. Then, import the PropTypes module from the prop-types package in your component file. Define the prop types for your component by assigning them to the propTypes property of your component. Use the PropTypes validators provided by the module, such as string, number, bool, and more, to specify the expected types of your props. You can also mark certain props as required using .isRequired after the validator. When a prop fails validation, a warning will be displayed in the console during development.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Tell us the difference between nodejs and express js.</Accordion.Header>
                <Accordion.Body>
                    Node.js is a JavaScript runtime environment that allows running JavaScript code on the server-side, enabling server-side scripting and building network applications. Express.js, on the other hand, is a web application framework built on top of Node.js, providing a set of features and tools for building web applications and APIs. Express.js simplifies the process of handling HTTP requests, defining routes, and integrating middleware for handling various aspects of web development. While Node.js is the foundation, Express.js adds structure and additional functionality to streamline web development. Together, Node.js and Express.js provide a powerful combination for creating server-side applications with JavaScript.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>What is a custom hook, and why will you create a custom hook?</Accordion.Header>
                <Accordion.Body>
                    A custom hook in React is a reusable function that encapsulates common stateful logic and can be used across multiple components. It allows you to extract and share logic between different components without the need for duplication or complex inheritance patterns.

                    You would create a custom hook to promote code reusability and maintainability. It helps to organize and abstract complex logic into a separate function, making your code more modular and easier to understand. Custom hooks can encapsulate functionality like API calls, form handling, state management, or any other complex logic that needs to be reused across multiple components. By creating a custom hook, you can write the logic once and use it in multiple places, promoting code efficiency and reducing redundancy.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blogs;