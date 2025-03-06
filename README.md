# IOD Capstone/ShePlays:Football Backend

The backend for the IOD Capstone project, developed with Node.js, Express, and MongoDB.

## Installation

To get started with the backend, follow these steps to install the required dependencies:

1. Clone the repository:

   ```bash
 git clone https://github.com/vroces/IOD-Capstone-BE.git

###Dependencies

The following dependencies are used in this project:

axios: For making HTTP requests.
cheerio: For parsing HTML and scraping web data.
cors: For enabling Cross-Origin Resource Sharing.
dotenv: For managing environment variables.
express: A web framework for Node.js.
mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
To install all dependencies, simply run:
  npm install

#####MongoDB Setup

This project uses MongoDB for data storage. 
Verify the connection:
The backend uses Mongoose to connect to MongoDB. Ensure that your MongoDB instance is running (either locally or through MongoDB Atlas).

To start the backend server and the MongoDB connection, run the following command:
  npm start
The server will start, and it will be available on the configured port (http://localhost:5002)

#### Folder Structure

```backend/
  ├── public/                # Static folder for images and other public assets
  │   └── images/            # Folder for image files (e.g., player images)
  ├── models/                # Mongoose models for database schema
  │   └── playerModel.js     # Example model for a player
  ├── controllers/           # Controller files for handling business logic
  │   └── playerController.js
  ├── routes/                # Route definitions to handle requests
  │   └── playerRoutes.js
  ├── server.js              # Entry point to the server
  ├── .env                   # Environment variables (not committed to Git)
  ├── package.json           # NPM scripts and dependencies for backend
  ├── .gitignore             # Git ignore file (to ignore .env and node_modules)
  └── README.md              # Documentation for the backend
```






