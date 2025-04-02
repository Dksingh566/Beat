
import React, { useState } from 'react';
import { useMusic } from '../contexts/MusicContext';
import { Play, Pause, SkipBack, SkipForward, ChevronUp, ChevronDown, Volume2 } from 'lucide-react';

const MobilePlayer: React.FC = () => {
  const { currentSong, isPlaying, togglePlayback, playNext, playPrevious } = useMusic();
  const [expanded, setExpanded] = useState(false);
  const [progress, setProgress] = useState(30); // Mock progress

  if (!currentSong) return null;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {/* Expanded Mobile Player */}
      {expanded && (
        <div className="fixed inset-0 bg-music-darker z-50 sm:hidden flex flex-col">
          <div className="flex justify-end p-4">
            <button 
              className="text-gray-400 hover:text-white"
              onClick={toggleExpanded}
            >
              <ChevronDown size={24} />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center p-6">
            <div className="w-64 h-64 mb-8">
              <img
                src={currentSong.cover}
                alt={currentSong.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="w-full text-center mb-6">
              <h2 className="text-xl font-bold text-white">{currentSong.title}</h2>
              <p className="text-gray-400">{currentSong.artist}</p>
            </div>
            
            <div className="w-full mb-4">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>1:23</span>
                <span>{currentSong.duration}</span>
              </div>
              <div className="relative h-1 bg-gray-700 rounded-full w-full">
                <div
                  className="absolute top-0 left-0 h-full bg-music-highlight rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            
            <div className="flex justify-between items-center w-full mt-8">
              <button className="p-3 text-gray-300 hover:text-white" onClick={playPrevious}>
                <SkipBack size={24} />
              </button>
              
              <button 
                className="p-4 bg-music-highlight rounded-full text-black hover:scale-105 transition-transform duration-200"
                onClick={togglePlayback}
              >
                {isPlaying ? <Pause size={28} /> : <Play size={28} />}
              </button>
              
              <button className="p-3 text-gray-300 hover:text-white" onClick={playNext}>
                <SkipForward size={24} />
              </button>
            </div>
            
            <div className="flex items-center w-full mt-8">
              <Volume2 size={16} className="text-gray-400 mr-2" />
              <div className="relative w-full h-1 bg-gray-700 rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-gray-300 rounded-full"
                  style={{ width: "70%" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Collapsed Mobile Player */}
      <div 
        className="fixed bottom-0 left-0 right-0 bg-music-dark p-3 border-t border-gray-800 sm:hidden"
        onClick={toggleExpanded}
      >
        <div className="flex items-center">
          <div className="w-10 h-10 mr-3">
            <img
              src={currentSong.cover}
              alt={currentSong.title}
              className="w-full h-full object-cover rounded"
            />
          </div>
          
          <div className="flex-1 min-w-0 mr-3">
            <h3 className="text-white text-sm font-medium truncate">{currentSong.title}</h3>
            <p className="text-gray-400 text-xs truncate">{currentSong.artist}</p>
          </div>
          
          <div className="flex items-center">
            <button 
              className="mr-2 text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                playPrevious();
              }}
            >
              <SkipBack size={20} />
            </button>
            
            <button 
              className="p-1 bg-music-highlight rounded-full text-black mr-2"
              onClick={(e) => {
                e.stopPropagation();
                togglePlayback();
              }}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            
            <button 
              className="text-gray-300" 
              onClick={(e) => {
                e.stopPropagation();
                playNext();
              }}
            >
              <SkipForward size={20} />
            </button>
          </div>
        </div>
        <div className="w-full mt-2">
          <div className="relative h-1 bg-gray-700 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-music-highlight rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobilePlayer;
