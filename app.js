import express from 'express';
import { getAllSongs, addSong, updateSong, deleteSong } from './database/dbQueries.js';
import cors from 'cors';

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Set up CORS middleware for local development (optional but often necessary)


// Define routes
app.get('/songs', (req, res) => {
    getAllSongs((err, results) => {
        if (err) {
            console.error('Error fetching songs:', err);
            res.status(500).send('Database error');
            return;
        }
        res.json(results);
    });
});


app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Assuming `registerUser` adds the user to the database and handles hashing
    registerUser({ username, password }, (err, result) => {
        if (err) {
            console.error('Registration error:', err);
            return res.status(500).json({ message: "Failed to create account" });
        }
        return res.status(201).json({ message: "Account successfully created" });
    });
});

app.put('/songs/:id', (req, res) => {
    updateSong(req.params.id, req.body, (err, result) => {
        if (err) {
            console.error('Error updating song:', err);
            res.status(500).send('Database error');
            return;
        }
        res.send(`Song updated successfully`);
    });
});

app.delete('/songs/:id', (req, res) => {
    deleteSong(req.params.id, (err, result) => {
        if (err) {
            console.error('Error deleting song:', err);
            res.status(500).send('Database error');
            return;
        }
        res.send(`Song deleted successfully`);
    });
});



// Default route for handling not found
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server Error');
});

// Set server to listen on a port
const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});