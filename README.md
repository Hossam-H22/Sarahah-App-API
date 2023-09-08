# E-Commerce__API


Welcome to the Saraha API project! This project serves as the backend for a messaging application, inspired by the popular "Saraha" concept, where users can send anonymous messages to others. The API is built using Node.js and Express, with MongoDB as the database. It also integrates Joi and Bcryptjs for validation and security, and Cloudinary for seamless media upload capabilities.





<br>



## Table of Contents

- [ Introduction. ](#Introduction)
- [ Features. ](#Features)
- [ Technologies Used & Dependencies. ](#Technologies_Used)
- [ Project Structure. ](#Project_Structure)
- [ Getting Started. ](#Getting_Started)
- [ API Endpoints. ](#API_Endpoints)
- [ Available Base Url. ](#Available_Base_Url)
- [ Authentication and Security. ](#Authentication)
- [ Validation. ](#Validation)
- [ Media Upload. ](#Media_Upload)
- [ Feedback and Contributing. ](#Feedback_Contributing)
- [ License. ](#License)



<br>



<a id="Introduction"></a>

## Introduction
The Saraha API project provides a robust backend foundation for creating an anonymous messaging application.


<br>



<a id="Features"></a>

## Features

- User registration and authentication.
- Send and receive anonymous messages.
- Input validation using Joi.
- Password hashing with Bcryptjs.
- Seamless media uploads using Cloudinary.



<br>



<a id="Technologies_Used"></a>

## Technologies Used & Dependencies
- **Node.js:** A server-side JavaScript runtime used to build fast and scalable network applications.
- **Express:** A minimal and flexible Node.js web application framework that simplifies API development.
- **MongoDB:** A NoSQL database used for efficient and flexible data storage.
- **Joi:** A validation library for JavaScript that helps ensure the integrity of data.
- **Bcrypt.js:** A library for hashing and salting passwords to enhance security.
- **Cloudinary:** A cloud-based media management platform for uploading, storing, and delivering images and other media.

For a complete list of dependencies, please refer to the `package.json` file.



<br>



<a id="Getting_Started"></a>

## Getting Started

To get started with the Fresh Cart frontend project, follow these steps:

1. <strong>Clone the Repository:</strong> Clone this repository to your local machine using the following command:
```bash
  git clone https://github.com/Dragon-H22/Saraha-App-API.git
```

2. <strong>Install Dependencies:</strong> Navigate to the project directory and install the required dependencies using your preferred package manager:
```bash
  cd Saraha-App-API
  npm install
```

3. <strong>Configure environment variables:</strong> Add variables for database connection, Cloudinary API keys, JWT secret, and token signature.

4. <strong>Run the Application:</strong> Start the development server to run the application locally:
```bash
  npm run dev
```

5. <strong>Access the Application:</strong> Open your web browser and visit `http://localhost:5000` to use it as a base link.



<br>



<a id="Project_Structure"></a>

## Project Structure
The project structure follows a modular pattern to enhance maintainability and readability:

* `DB/`
    * `Models/`: Defines MongoDB schemas.
    * `connection.js`: Connect to MongoDB.
* `src/`
    * `middleware/`: Middleware functions for authentication, error handling, etc.
    * `modules/`: Defines API routes and connects them to controllers to perform their business logic.
    * `utils/`: Utility functions for various tasks.
    * `app.js`: Main Express application setup.



<br>



<a id="API_Endpoints"></a>

## API Endpoints
* **Authentication**
  * `POST /auth/login`: Login user.
  * `POST /auth/signup`: Register new user.
* **User**
  * `GET /user/profile`: Retrieve details of a profile user.
  * `GET /user/:id/profile`: Retrieve details of a specific profile user to share it.
  * `PATCH /user/password`: Update password of the user.
  * `PATCH /user/profilePic`: Upload profile image of user.
  * `PATCH /user/profileCovPic`: Upload cover images for user profile with maximum 5 images.
* **Message**
  * `GET /message`: Retrieve all messages.
  * `POST /message/:receiverId`: Send message to a specific user by his id.
  * `DELETE /message/:messageId`: Delete message.


> Detailed Postman API documentation can be found <a href="https://documenter.getpostman.com/view/23533987/2s9YBz4b7C" target="_blank">here</a>.



<br>



<a id="Available_Base_Url"></a>

## Available Base Url
- https://saraha-app-api-dragon-h22.vercel.app/




<br>



<a id="Authentication"></a>

## Authentication and Security
User passwords are securely hashed using Bcryptjs before being stored in the database. This ensures the confidentiality of user credentials.



<br>



<a id="Validation"></a>

## Validation
Joi is used to validate incoming data for user registration, login, and message sending. This ensures that only valid data is processed by the API.



<br>



<a id="Media_Upload"></a>

## Media Upload
The integration with Cloudinary allows users to upload media files, such as images, for their profile.


<br>



<a id="Feedback_Contributing"></a>

## Feedback and Contributing
I'm excited to hear your <u><a href="https://forms.gle/waAwCzVUJy11LomG8" target="_blank">feedback</a></u> and discuss potential collaborations and if you'd like to contribute, please fork the repository, make your changes, and submit a pull request.



<br>



<a id="License"></a>

## License
This project is licensed under the [MIT license](LICENSE).


<br>

