import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

function SongItem({ name, image, desc, id }) {
  const { playWithId } = useContext(PlayerContext);

  const handlePlay = () => {
    if (id !== undefined) playWithId(id);
  };

  return (
    <div
      onClick={handlePlay}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-yellow-300 transition-colors duration-200 ease-in"
    >
      <img className="rounded" src={image} alt={`${name} cover`} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
}

export default SongItem;
