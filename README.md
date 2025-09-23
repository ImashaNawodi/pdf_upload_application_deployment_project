# PDF Upload Application

## Description

This repository contains the backend and frontend code for a PDF Upload Application. The application allows users to upload PDF files, manage their uploaded files, and provides basic authentication features.

### Features

- User authentication using JWT tokens
- PDF file upload with validation
- View and manage uploaded PDF files
- Logging (Signup, Login, Logout)
- Data Tracing and Security

### Technologies Used

#### Backend:

- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Nodemailer for email notifications
- Multer for handling file uploads
- Bcrypt for password hashing
- Other dependencies: dotenv, cors, body-parser, express-async-errors

#### Frontend:

- React.js
- React Router Dom for routing
- Axios for API communication
- Tailwind CSS for styling and to ensure the design is responsive
- React-pdf to display the PDF content
- PDF.js for rendering PDF files in the browser
- Other dependencies: react-icons, @material-tailwind/react, @headlessui/react

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v14.0.0 or higher)
- npm
- MongoDB (Make sure MongoDB is running locally or accessible)

## Installation

### Clone the Project

1. **Clone the repository:**

   https://github.com/ImashaNawodi/pdf_upload_application.git

### Backend Setup

1. **Navigate to the `backend` directory:**

   cd backend

2. **Install dependencies:**

   npm install

3. **Set up environment variables:**

   - Create a `.env` file in the `backend` directory.
   - Add the following variables:
       - SECRET=your_jwt_secret
       - RESET_SECRET=your_reset_jwt_secret
       - USER=your_email@gmail.com
       - PASSWORD=your_email_password
       - MONGODB_URI=your_mongodb_connection_string

4. **Start the backend server:**

   npm start

   This will start the backend server at `http://localhost:8000`.

### Frontend Setup

1. **Navigate to the `frontend` directory:**

   cd frontend

2. **Install dependencies:**

   npm install

3. **Start the frontend development server:**

   npm start

   This will start the frontend server and open the application in your default browser at `http://localhost:3000`.

## Deployment on Railway (Backend Only)

The **backend** is deployed on **Railway**, while the frontend should be run locally or hosted separately.  

👉 Live Backend API: https://pdfuploadapp.up.railway.app/

### Steps to Deploy Backend on Railway

1. **Sign up / Log in to Railway:**
   - Go to https://railway.app/ and create an account.

2. **Create a New Project:**
   - Click **New Project** → **Deploy from GitHub repo**.
   - Connect your GitHub repository (`pdf_upload_application`).
   - Set the root directory to `backend`.

3. **Add Environment Variables:**
   - In your Railway project settings, add the same `.env` variables used in local development:
     - SECRET=your_jwt_secret
     - RESET_SECRET=your_reset_jwt_secret
     - USER=your_email@gmail.com
     - PASSWORD=your_email_password
     - MONGODB_URI=your_mongodb_connection_string

4. **Configure Services:**
   - Railway will detect Node.js and deploy the backend.
   - If you don’t have an external MongoDB, you can provision a Railway MongoDB plugin and update `MONGODB_URI`.

5. **Deploy:**
   - Click **Deploy**.
   - Once build completes, Railway will provide a public backend URL (for example: `https://pdfuploadapp.up.railway.app/`).

6. **Update Frontend API URLs:**
   - In your frontend code, replace any `http://localhost:8000` API calls with the Railway backend URL (`https://pdfuploadapp.up.railway.app/`).

## Usage

- Open your web browser and go to `http://localhost:3000` (frontend).  
- The frontend will connect to the deployed backend at `https://pdfuploadapp.up.railway.app/`.

- **Authentication:**
  - Register a new account or login with existing credentials.
  - JWT tokens are used for authentication, stored securely in localStorage.
  - After successful login or signup it will navigate to the user home page.

- **Upload PDF:**
  - Click the upload button to navigate to the upload PDF section.
  - Select a PDF file and upload it. Files are validated before uploading.

- **View Files:**
  - User can view all uploaded PDF files on their home page.
  - Each file displays details such as name, upload time, upload date, and actions to view, delete, and download the PDF.
  - Click the view icon to open and view a specific uploaded PDF file.

- **Logout:**
  - Click the logout button to invalidate the JWT token and logout from the application.

---

## Additional Notes

- Make sure MongoDB is running locally or update `MONGODB_URI` in the `.env` file to point to your MongoDB instance.
- Adjust `PORT` if you want the backend server to run on a different port.
- This application uses Tailwind CSS for styling. You can customize styles by modifying the Tailwind CSS configuration files in the `frontend` directory.
