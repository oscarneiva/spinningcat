import catinho from './assets/cat.gif'
import darude from './assets/catspin.mp3'
import './App.css'

import { useRef } from "react";

function App() {
    const audioRef = useRef(null);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div>
            {/* Click the cat image to play the audio */}
            <img src={catinho} className="logo" alt="Vite logo" onClick={playAudio} />

            {/* Audio element (no autoplay) */}
            <audio ref={audioRef} loop>
                <source src={darude} type="audio/mp3"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    document.documentElement.style.setProperty('--bg-color', getRandomColor());
}

// Change background color every 3 seconds
setInterval(changeBackgroundColor, 100);


export default App
