Travel Agency Booking System
Project Description
This project is a simple Travel Agency Booking System built using React (frontend), Node.js/Express (backend), and MongoDB (database). The system allows users to view available tour packages, add new packages, and submit booking details. The admin panel enables managing tour packages.

Setup Instructions
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/travel-agency-booking-system.git
cd travel-agency-booking-system
2. Backend Setup
Navigate to the server folder:
bash
Copy code
cd server
Install dependencies:
bash
Copy code
npm install
Create a .env file in the server directory and add your MongoDB connection string:
env
Copy code
MONGODB_URI=mongodb+srv://yourMongoUsername:yourMongoPassword@yourClusterURL/yourDatabaseName?retryWrites=true&w=majority
PORT=5001
Start the backend server:
bash
Copy code
node server.js
3. Frontend Setup
Navigate to the client folder:
bash
Copy code
cd client
Install dependencies:
bash
Copy code
npm install
Start the frontend development server:
bash
Copy code
npm run dev
4. Verify the Application
Open the browser and go to http://localhost:5173 for the frontend.
The API is running on http://localhost:5001 (backend).
Implemented Features
1. Tour Packages Page
Displays a list of available tour packages.
Each package includes a title, description, and price.
Packages are fetched from a MongoDB database.
2. Package Booking
Users can view packages and fill out a booking form.
The form collects customer details such as name, email, phone number, number of travelers, and special requests.
Upon form submission, booking details are saved to MongoDB.
3. Admin Panel
Add New Package: Admin can add new tour packages using a form.
The form includes fields for title, description, and price.
After submission, the new package is added to the MongoDB database and appears on the page.
4. MongoDB Integration
All tour packages and booking requests are stored in MongoDB.
The backend communicates with MongoDB to store and retrieve data.
Folder Structure
plaintext
Copy code
travel-agency-booking-system/
├── server/                          # Backend (Node.js + Express)
│   ├── models/                      # Mongoose models (e.g., Package)
│   ├── routes/                      # API routes for handling requests
│   ├── .env                         # Environment variables (MongoDB URI, PORT)
│   ├── server.js                    # Main backend server file
│   ├── package.json                 # Backend dependencies
└── client/                          # Frontend (React + Vite)
    ├── src/                         # Source code for React app
    │   ├── components/              # Reusable components (e.g., Navbar, PackageCard)
    │   ├── pages/                   # Main pages (e.g., HomePage, AdminPanel)
    │   ├── services/                # Axios API calls
    │   ├── App.jsx                  # Main app component
    │   ├── main.jsx                 # React entry point
    ├── package.json                 # Frontend dependencies
    ├── vite.config.js               # Vite configuration file
    └── index.css                    # Global styling
Conclusion
The Travel Agency Booking System allows users to view and book tour packages, and it features a simple admin panel for managing packages. The backend uses MongoDB for data storage, while the frontend is built with React and Vite for a fast, responsive interface.

Let me know if you need further explanations or have any issues! 🚀


