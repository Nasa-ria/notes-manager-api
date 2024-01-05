# notes-manager-api
 built a RESTful API using the Express framework in Node.js.  create an  API that handles CRUD (Create, Read, Update, Delete) with user authentication, rate limiting, and request throttling features.

# My Awesome Note-taking App

This is a note-taking application with user authentication, rate limiting, and request throttling features.

## Framework and Third-party Dependencies

The application is built using Node.js with the Express framework . It uses mongoose atlas as the database for storing user and note data. The following third-party dependencies are used:

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `mongoose`: mongoose driver for Node.js.

## How to Run the Code

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
Install dependencies:

     npm install
  
Start the application:

     npm start
      This will start the server at http://localhost:3000.

How to Test
Run the tests:
bash
     code
    npm test
This will run the test suite and output the results.

Setup Files or Scripts
package.json: Contains the project's metadata and specifies its dependencies. It also includes scripts for running the application (npm start) and running tests (npm test).

.gitignore: Contains a list of files and directories to be ignored by Git, such as node_modules (which contains the installed dependencies) and any sensitive or environment-specific files.

app.js: Entry point of the application that sets up the Express server and defines routes and  Contains custom middleware functions, including the rate limiter and request throttling middleware.

databaseConection.js: Contains the mongoose  database setup and connection code.

notecontroller.js: Contains the controller functions for handling CRUD operations on notes.
usercontroller.js: Contains the controller functions for handling singin and signup operations on users.


lib: Contains custom middleware functions, including the authentication  middleware function.

tests/: Directory containing test files for the application.

README.md: The file you are currently reading, which provides information about the application, its dependencies, and how to run and test it.
