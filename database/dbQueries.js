import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'finalproject'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Get all songs with artist and genre details
const getAllSongs = (callback) => {
    const sql = `
        SELECT s.id, s.title, a.artist_name, g.genre_name 
        FROM songs s 
        JOIN artist a ON s.artist_id = a.artist_id 
        JOIN genre g ON s.genre_id = g.genre_id
    `;
    db.query(sql, callback);
};


// Add a new song, assuming artist_id and genre_id are provided correctly
const addSong = ({ title, artist_id, genre_id }, callback) => {
    const sql = 'INSERT INTO songs (title, artist_id, genre_id) VALUES (?, ?, ?)';
    db.query(sql, [title, artist_id, genre_id], callback);
};

// Update a song's details
const updateSong = (id, { title, artist_id, genre_id }, callback) => {
    const sql = 'UPDATE songs SET title = ?, artist_id = ?, genre_id = ? WHERE id = ?';
    db.query(sql, [title, artist_id, genre_id, id], callback);
};

// Delete a song
const deleteSong = (id, callback) => {
    const sql = 'DELETE FROM songs WHERE id = ?';
    db.query(sql, [id], callback);
};

const authenticateUser = ({ username, password }, callback) => {
    const sql = 'SELECT password FROM users WHERE name = ?';
    db.query(sql, [username], async (err, results) => {
        if (err) return callback(err, null);
        if (results.length > 0 && await bcrypt.compare(password, results[0].password)) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    });
};

const registerUser = ({ username, password }, callback) => {
    console.log(`Registering user: ${username}`);
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return callback(err, null);
        }
        const sql = 'INSERT INTO users (name, password) VALUES (?, ?)';
        db.query(sql, [username, hash], (err, result) => {
            if (err) {
                console.error('Error registering user:', err);
                return callback(err, null);
            }
            callback(null, result);
        });
    });
};


// Create a new playlist
const createPlaylist = ({ name, userId }, callback) => {
    const sql = 'INSERT INTO playlists (playlistName, user_id) VALUES (?, ?)';
    db.query(sql, [name, userId], callback);
};

// Add song to a playlist
const addSongToPlaylist = ({ playlistName, songId, userId }, callback) => {
    const sql = 'INSERT INTO playlist (playlistName, song_id, user_id) VALUES (?, ?, ?)';
    db.query(sql, [playlistName, songId, userId], callback);
};

// Get playlists for a user
const getUserPlaylists = (userId, callback) => {
    const sql = 'SELECT playlistName FROM playlist WHERE user_id = ?';
    db.query(sql, [userId], callback);
};

// Get all songs in a specific playlist
const getSongsInPlaylist = (playlistName, callback) => {
    const sql = `
        SELECT s.id, s.title, a.artist_name, g.genre_name
        FROM songs s
        JOIN playlist p ON p.song_id = s.id
        WHERE p.playlistName = ?
    `;
    db.query(sql, [playlistName], callback);
};


export {
    getAllSongs,
    addSong,
    updateSong,
    deleteSong,
    authenticateUser,
    registerUser,
    createPlaylist,
    addSongToPlaylist,
    getUserPlaylists,
    getSongsInPlaylist
};