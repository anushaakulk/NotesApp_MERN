# Notes Application README

Welcome to the documentation for our Notes Application! Below you'll find detailed information on setting up the project, running it, understanding its structure, and using it effectively.

## Introduction

The Notes Application is a web-based tool designed to help users organize their thoughts, ideas, and tasks effectively. Built using the MERN stack (MongoDB, Express.js, React, Node.js), the application allows users to perform CRUD operations (Create, Read, Update, Delete) on their notes while ensuring secure authentication using JWT (JSON Web Tokens).

## Setup and Installation

To set up and run the application locally, follow these steps:

- **Clone the Repository**: 
  - Clone this repository to your local machine using the following command:
    ```
    git clone https://github.com/your-username/notes-application.git
    ```

- **Backend Setup**:
  - Navigate to the `Notes_Backend` directory:
    ```
    cd Notes_Backend
    ```
  - Install backend dependencies:
    ```
    npm install
    ```
  - Start the backend server:
    ```
    npm run server
    ```

- **Frontend Setup**:
  - Open another terminal window/tab.
  - Navigate to the `Notes_Frontend` directory:
    ```
    cd Notes_Frontend
    ```
  - Install frontend dependencies:
    ```
    npm install
    ```
  - Start the frontend server:
    ```
    npm run start
    ```

## Usage

Once the backend server and frontend are running, you can access the application by navigating to `http://localhost:3000` in your web browser. 

- **Sign Up/Login**:
  - New users can sign up for an account, while existing users can log in using their credentials.

- **Adding Notes**:
  - After logging in, users can add new notes by clicking on the appropriate button or link and filling out the note details.

- **CRUD Operations**:
  - Users can perform CRUD operations on their notes: create, read, update, and delete.

## Code Structure

Our application follows a structured organization for both the backend and frontend:

- **Backend**:
  - Routes: Handles API endpoints for CRUD operations on notes and authentication.
  - Controllers: Implements logic for handling requests and interacting with the database.
  - Models: Defines MongoDB schemas for notes and users.
  - Middleware: Includes authentication middleware for protecting routes and error handling middleware.

- **Frontend**:
  - Components: Organized into folders based on functionality (e.g., notes, authentication).
  - Redux: Manages application state, actions, and reducers.
  - Services: Handles API requests and authentication.

## Authentication

Our application uses JWT (JSON Web Tokens) for authentication. Upon successful login, a JWT containing the user's information is generated and included in subsequent requests to authenticate the user's identity.

## Technologies Used

- MongoDB: NoSQL database for storing notes and user data.
- Express.js: Backend framework for building RESTful APIs.
- React: JavaScript library for building user interfaces.
- Node.js: Runtime environment for server-side JavaScript execution.
- Redux: State management library for managing application state.
- JWT: JSON Web Tokens for secure authentication.

## Hosted_Url: https://notes-app-front-end-mocha.vercel.app/
## Video Demo: 
https://www.loom.com/share/ba4b4393eed64845af802531db8dbcbc?sid=04193a9b-f644-4184-a03c-934db05a1744

Thank you for using my Notes Application! If you have any questions or feedback, please don't hesitate to reach out to us. Happy note-taking!
