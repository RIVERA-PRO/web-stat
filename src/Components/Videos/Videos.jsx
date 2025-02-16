import React from 'react';
import videos from '../videos';  // Importa los videos
import './Videos.css'
export default function Videos() {
    return (
        <div className="videos-container">
            <div className='titleSection'>
                <div className='separacion'>
                    <span></span> <div></div> <span></span>
                </div>
                <h1>Así la pasamos en viajes anteriores...</h1>
                <p>Únete a quienes ya han transformado su vida.</p>
            </div>
            <div className='videos-grap'>
                {videos?.map((video, index) => (
                    <div key={index} className="video-item">
                        <video controls>
                            <source src={video} type="video/mp4" />
                            Tu navegador no soporta el formato de video.
                        </video>
                    </div>
                ))}
            </div>

        </div>
    );
}
