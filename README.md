# Proyecto Documentation

## Overview
This project is structured into two main parts: the backend and the frontend. The backend handles API requests and data processing, while the frontend provides the user interface.

## Project Structure
```
proyecto
├── backend
│   ├── config
│   │   └── database.js
│   ├── routes
│   │   └── api.js
│   ├── services
│   │   ├── openai.js
│   │   └── categorizacion.js
│   ├── uploads
│   └── server.js
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
```

## Backend
- **config/database.js**: Contains the configuration for connecting to the database. Exports a function to initialize the database connection.
- **routes/api.js**: Defines the API routes for the backend. Exports a router that handles various HTTP requests.
- **services/openai.js**: Contains functions for interacting with the OpenAI API. Exports functions for making requests and processing responses.
- **services/categorizacion.js**: Includes functions for categorizing data based on predefined logic.
- **uploads/**: Directory for storing uploaded files.
- **server.js**: Entry point for the backend application. Sets up the server, middleware, and routes.

## Frontend
- **index.html**: Main HTML file for the frontend application. Contains the structure of the webpage.
- **style.css**: Styles for the frontend application, defining the visual appearance of HTML elements.
- **script.js**: JavaScript code for handling user interactions and making API calls to the backend.

## Setup Instructions
1. Clone the repository.
2. Navigate to the `backend` directory and install the necessary dependencies.
3. Set up the database configuration in `backend/config/database.js`.
4. Start the backend server by running `node backend/server.js`.
5. Open `frontend/index.html` in a web browser to access the application.

## Usage Guidelines
- Use the frontend interface to interact with the backend services.
- Ensure that the backend server is running before making API calls from the frontend.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.