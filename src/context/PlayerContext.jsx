import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBG = useRef();
  const seekBar = useRef();
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      seconds: 0,
      minutes: 0,
    },
    totalTime: {
      seconds: 0,
      minutes: 0,
    },
  });

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  const playWithId = (id) => {
    if (id >= 0 && id < songsData.length) {
      setTrack(songsData[id]);
      if (audioRef.current) {
        audioRef.current.src = songsData[id].audio;
        audioRef.current.oncanplay = () => {
          audioRef.current.play();
          setPlayStatus(true);
        };
      }
    }
  };
  const previous= async()=>{
    if(track.id>0){
        await setTrack(songsData[track.id-1]);
        await audioRef.current.play();
        setPlayStatus (true)
    }
  }
  const next= async()=>{
    if(track.id<songsData.length-1){
        await setTrack(songsData[track.id+1]);
        await audioRef.current.play();
        setPlayStatus (true)
    }
  }
 const seekSongs= async(e)=>{

 }

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      const updateSeekBar = () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;

        if (duration) {
          const progress = (currentTime / duration) * 100;
          seekBar.current.style.width = `${progress}%`;

          setTime({
            currentTime: {
              seconds: Math.floor(currentTime % 60),
              minutes: Math.floor(currentTime / 60),
            },
            totalTime: {
              seconds: Math.floor(duration % 60),
              minutes: Math.floor(duration / 60),
            },
          });
        }
      };

      audio.ontimeupdate = updateSeekBar;

      return () => {
        audio.ontimeupdate = null;
      };
    }
  }, []);

  const contextValue = {
    audioRef,
    seekBG,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSongs,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
