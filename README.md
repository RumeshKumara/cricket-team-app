# Cricket Team Registration App 🏏

A full-stack MERN application for managing cricket team registrations with a modern dark theme featuring yellow and black color scheme.

![Cricket Team App](https://img.shields.io/badge/Cricket-Team%20Manager-yellow) ![MERN Stack](https://img.shields.io/badge/MERN-Stack-black) ![License](https://img.shields.io/badge/License-MIT-yellow)

## Features

- ✅ Team registration with detailed information
- ✅ Player management within teams
- ✅ Responsive design with dark theme
- ✅ Modern UI with yellow and black color scheme
- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ Real-time form validation
- ✅ MongoDB database integration

## Tech Stack

**Frontend:**
- React.js
- Axios for API calls
- CSS3 with custom dark theme

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests

## Prerequisites



## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cricket-team-app
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

## Configuration

1. Set up your MongoDB database:
   - For local development: Make sure MongoDB is running on your system
   - For cloud database: Create a cluster on MongoDB Atlas and get connection string

2. Configure environment variables:

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cricket_teams
```

Create a `.env` file in the frontend directory if needed:
```env
REACT_APP_API_BASE_URL=http://localhost:5000
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```
The backend will run on http://localhost:5000

2. Start the frontend development server:
```bash
cd frontend
npm start
```
The frontend will run on http://localhost:3000

3. Open your browser and navigate to http://localhost:3000

## Usage

1. **Register a New Team:**
   - Fill in the team details (name, captain, coach, contact information)
   - Add players with their details (name, age, role, batting/bowling style)
   - Submit the form to register the team

2. **View Registered Teams:**
   - All registered teams appear in the right panel
   - Click on any team to view its details and players

3. **Edit a Team:**
   - Click the "Edit" button on any team card
   - Modify the details in the form
   - Submit to update the team information

4. **Delete a Team:**
   - Click the "Delete" button on any team card
   - Confirm the deletion (team will be permanently removed)

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/teams` | Create a new team |
| GET | `/api/teams` | Get all teams |
| GET | `/api/teams/:id` | Get a specific team |
| PUT | `/api/teams/:id` | Update a team |
| DELETE | `/api/teams/:id` | Delete a team |

## Project Structure

```
cricket-team-app/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── teamController.js
│   ├── models/
│   │   └── Team.js
│   ├── routes/
│   │   └── teamRoutes.js
│   ├── middleware/
│   │   └── errorMiddleware.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── TeamForm.js
│   │   │   ├── TeamList.js
│   │   │   └── Footer.js
│   │   ├── styles/
│   │   │   └── App.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── .env
└── README.md
```

## Customization

### Changing Color Scheme

The app uses a dark theme with yellow accents. To modify the color scheme:

1. Edit `frontend/src/styles/App.css`
2. Update the CSS custom properties at the top of the file:
```css
:root {
  --primary-bg: #121212;
  --secondary-bg: #1a1a1a;
  --card-bg: #1e1e1e;
  --accent-color: #ffeb3b;
  --text-primary: #e0e0e0;
  --text-secondary: #a0a0a0;
}
```

### Adding New Fields

To add new fields to the team or player forms:

1. Update the Mongoose schema in `backend/models/Team.js`
2. Modify the form in `frontend/src/components/TeamForm.js`
3. Update the display in `frontend/src/components/TeamList.js`

## Troubleshooting

### Common Issues

1. **Connection to MongoDB fails**
   - Ensure MongoDB is running locally or the connection string is correct
   - Check if the MongoDB service is started: `sudo systemctl start mongod`

2. **CORS errors**
   - Verify the backend CORS configuration in `backend/server.js`

3. **Port already in use**
   - Change the PORT in the backend `.env` file or kill the process using the port

### Getting Help

If you encounter any issues:

1. Check the console for error messages
2. Ensure all dependencies are installed correctly
3. Verify your MongoDB connection string

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons provided by EmojiOne
- UI inspiration from modern dashboard designs
- MongoDB for the excellent database solution

## Support

If you like this project, please give it a star ⭐ on GitHub!

---

**Happy Coding!** 🏏
