## Code4Community Technical Assessment
This program is a chat application where users can log in using Google authentication, submit messages, and view their messages.

## Components explanaton
My application is split into two components, the frontend and backend.  The frontend is powered by react and the backend consists of NodeJS, Express and firbebase.  The frontend/app.js file has consists of all the code in the frontend.  This includes a form that when submitted will send a POST request to the backend, which will then upload to the database.  The frontend also shows all the previous messages by mapping through a list of the docs from the firestore database.  The signInWithGoogle function provides the option to sign in using a google account, which is powered by firebase authentication. 

When a user submits the form, the message and the email of the logged in account are sent to the backend with a POST request.  The backend, which is powered by NodeJS and express, will recieve the post request and log the message, email, and the time into the databse.  

## Fullfillment of requirements
User can submit a message using this form where I put a restriction of "required" and "maxLength="128" on the HTML input tag, to prevent empty message and  a max message length of 128.  
When a message is submitted in the form it is pushed to the database, where I keep track of the time the message was submitted.  Then, I sort the message in the database from most to least recent and map the list of messages along with their time and user.  Since messages are stored in a cloud database, anyone from any computer can send messages to that cloud database, and the message history from the database can be retrieved on any computer.  

## How to run
To start the front end run the commands
```sh
cd frontend
npm i
npm start
```

To start the back end run the commands
```sh
cd backend
npm i
node index.js
```
