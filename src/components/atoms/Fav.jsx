// src/components/atoms/Fav.jsx

import { useState } from 'react';

const Fav = () => {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
    }

    return (
        <div 
            onClick={handleClick}
            className={`rounded-full p-4 border border-green-500 ${liked ? 'bg-green-500' : ''}`}
        >
            {/* Aquí podrías agregar algún ícono o texto para mostrar si está liked o no */}
            FAVORITO
        </div>
    );
}

export { Fav };
