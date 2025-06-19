# Guestbook App

This repo represents a task provided by RoundCube. It is an implementation of a full stack application of a simple guestbook. Frontend - React, Backend - Node.js, Database - MySQL.

## Libraries used
There were several libraries used for this application both for the front and for the back.
To install them:
 * cd frontend
 * npm install date-fns //for formatting

 * cd backend
 * npm install mysql2
 * npm install cors
 * npm install dotenv


### Clone the repo

git clone https://github.com/your-username/guestbook-app.git

Note that your-username is not the route you should copy, but your actual username

#### Database

When you clone the repository, in the folder you can find .sql script. Run it in the MySQL Workbench.

##### Running the application
Position yourself in the frontend folder:
cd frontend
npm start

The frontend runs on http://localhost:3000/

Position yourself in the backend folder:
cd backend
tsc
npm run serve

The backend runs on http://localhost:4000/
