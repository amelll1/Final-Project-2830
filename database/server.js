const express = require('express');
const { getAllSongs, addSong, updateSong, deleteSong } = require('./models/dbQueries');

const app = express();
app.use(express.json());

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

app.post('/songs', (req, res) => {
    addSong(req.body, (err, result) => {
        if (err) {
            console.error('Error adding song:', err);
            res.status(500).send('Database error');
            return;
        }
        res.status(201).send(`Song added successfully with ID: ${result.insertId}`);
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

// Assuming this is in your server.js or a routes file
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    registerUser({ username, password }, (err, result) => {
        if (err) {
            console.error('Registration error:', err);
            return res.status(500).json({ message: "Failed to create account, error occurred" });
        }
        return res.status(201).json({ message: "Account successfully created" });
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

const port = 3500;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
