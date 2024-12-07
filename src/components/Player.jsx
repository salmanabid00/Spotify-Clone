import React, { useContext, useState } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { assets } from "../assets/assets";

function Player() {
  const {
    track,
    seekBar,
    seekBG,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    audioRef, 
  } = useContext(PlayerContext);

  const [volume, setVolume] = useState(1); 

  const formatTime = (minutes, seconds) =>
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const seekSongs = (e) => {
    const seekBgRect = seekBG.current.getBoundingClientRect();
    const clickX = e.clientX - seekBgRect.left;
    const newTime = (clickX / seekBgRect.width) * track?.duration;
    if (newTime && !isNaN(newTime)) {
      audioRef.current.currentTime = newTime; 
    }
  };
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume; 
    }
  };

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img
          className="w-12 rounded-md"
          src={track?.image}
          alt="Song Cover"
        />
        <div>
          <p className="font-semibold">{track?.name}</p>
          <p className="text-sm text-gray-400">{track?.desc?.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt="Shuffle Icon"
          />
          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="Previous Icon"
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt="Pause Icon"
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt="Play Icon"
            />
          )}
          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="Next Icon"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt="Loop Icon"
          />
        </div>
        <div className="flex items-center gap-5 w-full">
          <p className="text-sm">
            {formatTime(
              time.currentTime.minutes,
              time.currentTime.seconds
            )}
          </p>
          <div
            ref={seekBG}
            onClick={seekSongs}
            className="relative w-[60vw] max-w-[500px] bg-gray-600 rounded-full h-2 cursor-pointer"
          >
            <div
              ref={seekBar}
              className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
              style={{ width: `${time.progress || 0}%` }}
            ></div>
          </div>
          <p className="text-sm">
            {formatTime(time.totalTime.minutes, time.totalTime.seconds)}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.mic_icon} alt="Mic" />
        <img className="w-4" src={assets.queue_icon} alt="Queue" />
        <img className="w-4" src={assets.volume_icon} alt="Volume" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-20"
        />
        <img
          className="w-4"
          src={assets.mini_player_icon}
          alt="Mini Player"
        />
        <img className="w-4" src={assets.zoom_icon} alt="Zoom" />
      </div>
    </div>
  );
}

export default Player;
