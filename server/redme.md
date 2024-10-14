# User Management App (Backend)

## This documentation outlines the backend for a User Management application built with Node.js, Express, and MongoDB. The backend handles user registration, authentication, and CRUD operations using RESTful APIs.

# Features
1. User registration with password encryption (bcrypt)
2. User login with JWT authentication
3. Protected routes to view, update, and delete user data
4. Integration with an external API to fetch movie list data
5. Error handling and input validation for all routes

# Technologies Used
1. Backend: Node.js, Express.js
2. Database: MongoDB (via Mongoose)
3. Authentication: JWT (JSON Web Token)
4. Password Hashing: bcryptjs
5. Environment Management: dotenv


# Prerequisites
1. Node.js (v14.x or higher)
2. MongoDB (local instance or MongoDB Atlas)
3. Postman (for testing API endpoints)

# Setup Instructions
1. Clone the Repository

2. Install Backend Dependencies
   npm install

3. Configure Environment Variables
- Create a .env file in the backend directory and add the following environment variables:
   MONGO_URI=<Your MongoDB Connection String>
   JWT_SECRET=<Your Secret Key for JWT>
   PORT=5000
- Replace <Your MongoDB Connection String> with your MongoDB URI (Atlas or local).
- Replace <Your Secret Key for JWT> with a random secure string to sign JWT tokens.

4. Run the Server
   node server.js

## API Endpoints
1. User Registration 
    Endpoint: /api/users/register
    Method: POST 
    Description: Registers a new user and encrypts the password using bcrypt.

2. User Login
    Endpoint: /api/users/login
    Method: POST
    Description: Authenticates a user and returns a JWT token

3. Get All Registered Users (Protected)
    Endpoint: /api/users
    Method: GET
    Description: Fetches all registered users. Requires JWT token for authorization.

4. Update User Information (Protected)
    Endpoint: /api/users/:id
    Method: PUT
    Description: Updates user information by ID. Requires JWT token for authorization. 

5. Delete a User (Protected)
    Endpoint: /api/users/:id
    Method: DELETE
    Description: Deletes a user by ID. Requires JWT token for authorization.

6. 
User Management App (Backend)
This documentation outlines the backend for a User Management application built with Node.js, Express, and MongoDB. The backend handles user registration, authentication, and CRUD operations using RESTful APIs.

Features
User registration with password encryption (bcrypt)
User login with JWT authentication
Protected routes to view, update, and delete user data
Integration with an external API to fetch movie list data
Error handling and input validation for all routes
Technologies Used
Backend: Node.js, Express.js
Database: MongoDB (via Mongoose)
Authentication: JWT (JSON Web Token)
Password Hashing: bcryptjs
Environment Management: dotenv
Prerequisites
Node.js (v14.x or higher)
MongoDB (local instance or MongoDB Atlas)
Postman (for testing API endpoints)
Setup Instructions
1. Clone the Repository
bash
Copy code
git clone ttps://github.com/Ashishlovesagra/Squadra-Media-Assesment.git
cd mern-user-app/backend
2. Install Backend Dependencies
bash
Copy code
npm install
3. Configure Environment Variables
Create a .env file in the backend directory and add the following environment variables:

bash
Copy code
MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your Secret Key for JWT>
PORT=5000
Replace <Your MongoDB Connection String> with your MongoDB URI (Atlas or local).
Replace <Your Secret Key for JWT> with a random secure string to sign JWT tokens.
4. Run the Server
Start the backend server using the following command:

bash
Copy code
npm run dev
The server will run at http://localhost:5000.

API Endpoints
1. User Registration
Endpoint: /api/users/register
Method: POST
Description: Registers a new user and encrypts the password using bcrypt.
Request Body (JSON):
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123",
  "phone": "1234567890",
  "profession": "React.js Developer"
}
Response:
- 201 Created: User registered successfully.
- 400 Bad Request: Validation error.

2. User Login
Endpoint: /api/users/login
Method: POST
Description: Authenticates a user and returns a JWT token.
Request Body (JSON):
{
  "email": "johndoe@example.com",
  "password": "password123"
}
Response:
- 201 Created: User registered successfully.
- 400 Bad Request: Validation error.

3. Get All Registered Users (Protected)
Endpoint: /api/users
Method: GET
Description: Fetches all registered users. Requires JWT token for authorization.
Headers:
{
  "Authorization": "Bearer <JWT_TOKEN>"
}
Response:
- 201 Created: User registered successfully.
- 400 Bad Request: Validation error.

4. Update User Information (Protected)
Endpoint: /api/users/:id
Method: PUT
Description: Updates user information by ID. Requires JWT token for authorization.
Request Body (JSON):
{
  "name": "Jane Doe",
  "phone": "9876543210",
  "profession": "Engineer"
}
Headers:
{
  "Authorization": "Bearer <JWT_TOKEN>"
}
Response:
- 201 Created: User registered successfully.
- 400 Bad Request: Validation error.

5. Delete a User (Protected)
    Endpoint: /api/users/:id
    Method: DELETE
    Description: Deletes a user by ID. Requires JWT token for authorization.

6. Fetch Movie List (Protected)
   Endpoint: /api/movies
   Method: POST
   Description: Fetches a list of movies from an external API.

