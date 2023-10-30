import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
const AlbumList = () => {
    const { userId } = useParams()
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then((response) => response.json())
            .then((data) => setAlbums(data))
            .catch((error) => console.error('Error fetching albums:', error));
    }, [userId]);



    return (
        <div className='container'>
            <h2>Список альбомів користувача:</h2>
            <ul>
                {albums.map((album) => (
                    <li key={album.id}>
                        {album.title}
                        <Link to={`/photos/${album.id}`}>.   Переглянути фото </Link>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlbumList;
