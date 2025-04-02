
import React, { useState } from 'react';
import { useMusic } from '../contexts/MusicContext';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Repeat, Shuffle } from 'lucide-react';

const Player: React.FC = () => {
  const { currentSong, isPlaying, togglePlayback, playNext, playPrevious } = useMusic();
  const [progress, setProgress] = useState(30); // Mock progress (0-100)
  const [volume, setVolume] = useState(80); // Mock volume (0-100)
  const [isFavorite, setIsFavorite] = useState(false);

  if (!currentSong) {
    return (
      <div className="w-full lg:w-80 p-6 bg-music-dark rounded-lg flex-shrink-0 hidden sm:block">
        <p className="text-gray-400 text-center">No song selected</p>
      </div>
    );
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(e.target.value));
  };

  return (
    <div className="w-full lg:w-80 p-6 bg-music-dark rounded-lg flex-shrink-0 hidden sm:block">
      <div className="flex flex-col items-center">
        <div className="w-full aspect-square mb-6 relative group">
          <img
            src={currentSong.cover}
            alt={currentSong.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
            <button 
              className="p-4 bg-music-highlight rounded-full text-black hover:scale-105 transition-transform duration-200"
              onClick={togglePlayback}
            >
              {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </button>
          </div>
        </div>
        
        <div className="w-full text-center mb-4 flex justify-between items-start">
          <div className="flex-1 text-left">
            <h2 className="text-xl font-bold text-white truncate">{currentSong.title}</h2>
            <p className="text-gray-400">{currentSong.artist}</p>
          </div>
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className={cn(
              "p-2 transition-colors",
              isFavorite ? "text-music-highlight" : "text-gray-400 hover:text-white"
            )}
          >
            <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
        
        <div className="w-full mb-2">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>1:23</span>
            <span>{currentSong.duration}</span>
          </div>
          <div className="relative h-1 bg-gray-700 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-music-highlight rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        <div className="flex justify-between items-center w-full mt-4">
          <button className="player-control hover:text-music-highlight">
            <Shuffle size={18} />
          </button>
          
          <button className="player-control" onClick={playPrevious}>
            <SkipBack size={20} />
          </button>
          
          <button 
            className="p-3 bg-music-highlight rounded-full text-black hover:scale-105 transition-transform duration-200"
            onClick={togglePlayback}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          
          <button className="player-control" onClick={playNext}>
            <SkipForward size={20} />
          </button>
          
          <button className="player-control hover:text-music-highlight">
            <Repeat size={18} />
          </button>
        </div>
        
        <div className="flex items-center w-full mt-6">
          <Volume2 size={16} className="text-gray-400 mr-2 flex-shrink-0" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-1 bg-gray-700 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
          />
        </div>
      </div>
    </div>
  );
};

// Need to import cn since we're using it above
import { cn } from '../lib/utils';

export default Player;
