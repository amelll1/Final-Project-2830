const express = require('express');
const mysql = require('mysql');

//set up the express app
const app = express();
app.use(express.json());  // Middleware to parse JSON bodies


const db = mysql.createConnection({
    host: 'db', 
    user: 'User',
    password: 'root',
    database: 'finalproject'
});
//GET endpoint to fetch all songs
app.get('/songs', (req, res) => {
    db.query('SELECT * FROM songs', (err, results) => {
        if (err) {
            console.error('Error fetching songs:', err);
            res.status(500).send('Database error');
            return;
        }
        res.json(results);
    });
});

//POST endpoint to add a new song
app.post('/songs', (req, res) => {
    const { id, title, artist_name } = req.body;
    db.query('INSERT INTO songs (id, title, artist_name) VALUES (?, ?, ?)', [id, title, artist_name], (err, result) => {
        if (err) {
            console.error('Error adding song:', err);
            res.status(500).send('Database error');
            return;
        }
        res.status(201).send(`Song added with ID: ${id}`);
    });
});

//PUT endpoint to update a song
app.put('/songs/:id', (req, res) => {
    const { title, artist_name } = req.body;
    const { id } = req.params;
    db.query('UPDATE songs SET title = ?, artist_name = ? WHERE id = ?', [title, artist_name, id], (err, result) => {
        if (err) {
            console.error('Error updating song:', err);
            res.status(500).send('Database error');
            return;
        }
        res.send(`Song updated successfully`);
    });
});

//DELETE endpoint to delete a song
app.delete('/songs/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM songs WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error('Error deleting song:', err);
            res.status(500).send('Database error');
            return;
        }
        res.send(`Song deleted successfully`);
    });
});

// Server listening on port 3000
const port = 3500;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
