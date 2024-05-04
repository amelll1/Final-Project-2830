import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

function PlaylistPage() {
    const queryClient = useQueryClient();

    // Fetching songs
    const { data: songs, isError, isLoading } = useQuery('songs', () =>
        axios.get('http://localhost:3500/songs').then(res => res.data)
    );

    // Adding a song to a playlist (mutation)
    const addSongMutation = useMutation(newSong =>
        axios.post('http://localhost:3500/songs', newSong),
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries('songs');
            }
        }
    );

    if (isLoading) return <span>Loading...</span>;
    if (isError) return <span>Error loading songs</span>;

    return (
        <div>
            <h1>Songs</h1>
            <ul>
                {songs.map(song => (
                    <li key={song.id}>{song.title} by {song.artist_name}</li>
                ))}
            </ul>
            {/* Assume a form here to add a song */}
            <button onClick={() => addSongMutation.mutate({ title: "New Song", artist_id: 1, genre_id: 1 })}>
                Add Song
            </button>
        </div>
    );
}

export default PlaylistPage;
