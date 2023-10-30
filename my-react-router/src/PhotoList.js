import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PhotoList = () => {
    const { albumId } = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then((response) => response.json())
            .then((data) => setPhotos(data))
            .catch((error) => console.error('Error fetching photos:', error));
    }, [albumId]);

    return (
        <div className="container">
            <h2>Фотографії альбому:</h2>
            <ul>
                {photos.map((photo) => (
                    <li key={photo.id}>
                        <img src={photo.url} alt={photo.title} />

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhotoList;
