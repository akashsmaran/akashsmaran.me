import useSound from 'use-sound';
import React, { useEffect } from "react";
import Styles from '../styles/style.module.scss'
// import 'bootstrap/dist/css/bootstrap.css';
const Sound = function Sound({children}) {
    // For fun, try swapping out 'rising-pops' with:
    // - fanfare
    // - dun-dun-dun
    // - guitar-loop
  const soundUrl = '/sounds/pop-on.mp3';
//   const [playbackRate, setPlaybackRate] = React.useState(0.75);

//   const [play] = useSound(soundUrl, {
//     playbackRate,
//     volume: 0.5,
//   });

//   const handleClick = () => {
//     setPlaybackRate(playbackRate + 0.1);
//     play();
//   };

//   return (
//     <Button onClick={handleClick}>
//       <span role="img" aria-label="Heart">
//         💖
//       </span>
//     </Button>
//     );
//   }
const [play, { stop }] = useSound(soundUrl, {volume:0.4});

  return (
    <p className = {Styles.sound} onClick={() => play()}>
        {children}
    </p>
  );
  };
  export default Sound;