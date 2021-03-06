import React, {useState, useEffect} from 'react';

import { v4 as uuidv4 } from 'uuid';

import NewSongForm  from './NewSongForm';

function SongList() {
    const [songs, setSongs] = useState([
        {title: 'memory gospel', id: 1},
        {title: 'this wild darkness', id: 2},
        {title: 'Summer of 69', id: 3}
    ]);

    const addSong = (title) => {
        setSongs([
            ...songs, {title, id: uuidv4()}
        ])
    };

    const [age, setAge] = useState(8);

    useEffect(() => {
        console.log('songs changed notify ', songs); // limiting when to call this callback function, only when songs change
    }, [songs]);


    useEffect(() => {
        console.log('Age changed notify ', age); 
    }, [age]);


    return (
        <div  className= 'song-list'>
            <ul>
                {
                    songs.map( (song) => {
                        return (
                            <li key= {song.id}>
                                {song.title}
                            </li>
                        );
                    })

                }
            </ul>

            <NewSongForm addSong = {addSong} />

            <button onClick = {() => setAge(age+1) }>
                my age is {age}
            </button>

        </div>
    )
}


export default SongList;
