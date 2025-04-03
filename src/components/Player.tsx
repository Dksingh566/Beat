
import React, { useState } from 'react';
import { useMusic } from '../contexts/MusicContext';
import { Play, Pause, SkipBack, SkipForward, Heart, Repeat, Shuffle } from 'lucide-react';
import { cn } from '../lib/utils';
import { Slider } from '@/components/ui/slider';
import { useIsMobile } from '../hooks/use-mobile';

const Player: React.FC = () => {
  const { currentSong, isPlaying, togglePlayback, playNext, playPrevious } = useMusic();
  const [progress, setProgress] = useState(30); // Mock progress (0-100)
  const [isFavorite, setIsFavorite] = useState(false);
  const isMobile = useIsMobile();

  if (!currentSong) {
    return (
      <div className="hidden lg:block lg:w-2/5 xl:w-1/2 p-4 sm:p-6 bg-music-dark rounded-lg shadow-lg">
        <p className="text-gray-400 text-center">No song selected</p>
      </div>
    );
  }

  const handleProgressChange = (value: number[]) => {
    setProgress(value[0]);
  };

  return (
    <div className="hidden lg:block lg:w-2/5 xl:w-1/2 p-4 sm:p-6 bg-music-dark rounded-lg shadow-lg transition-all">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[300px] mx-auto aspect-square mb-4 sm:mb-6 relative group">
          <img
            src={currentSong.cover}
            alt={currentSong.title}
            className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
            <button 
              className="p-2.5 sm:p-3 bg-music-highlight rounded-full text-black hover:scale-110 transition-transform duration-200"
              onClick={togglePlayback}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
          </div>
        </div>
        
        <div className="w-full text-center mb-3 sm:mb-4 flex justify-between items-start">
          <div className="flex-1 text-left">
            <h2 className="text-lg sm:text-xl font-bold text-white truncate">{currentSong.title}</h2>
            <p className="text-gray-400">{currentSong.artist}</p>
          </div>
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className={cn(
              "p-1 transition-colors",
              isFavorite ? "text-music-highlight" : "text-gray-400 hover:text-white"
            )}
          >
            <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
        
        <div className="w-full mb-2">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>1:23</span>
            <span>{currentSong.duration}</span>
          </div>
          <Slider
            defaultValue={[progress]}
            max={100}
            step={1}
            value={[progress]}
            onValueChange={handleProgressChange}
            className="py-1"
          />
        </div>
        
        <div className="flex justify-center items-center w-full mt-6 sm:mt-7 space-x-5 md:space-x-7">
          <button className="text-gray-300 hover:text-music-highlight transition-transform hover:scale-110">
            <Shuffle size={22} />
          </button>
          
          <button 
            className="text-gray-300 hover:text-white transition-transform hover:scale-110" 
            onClick={playPrevious}
          >
            <SkipBack size={24} />
          </button>
          
          <button 
            className="p-2.5 bg-music-highlight rounded-full text-black hover:scale-110 transition-transform duration-200"
            onClick={togglePlayback}
          >
            {isPlaying ? <Pause size={22} /> : <Play size={22} />}
          </button>
          
          <button 
            className="text-gray-300 hover:text-white transition-transform hover:scale-110" 
            onClick={playNext}
          >
            <SkipForward size={24} />
          </button>
          
          <button className="text-gray-300 hover:text-music-highlight transition-transform hover:scale-110">
            <Repeat size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;