
import React, { useState } from 'react';
import { useMusic } from '../contexts/MusicContext';
import { Play, Pause, SkipBack, SkipForward, ChevronUp, ChevronDown, Heart, Repeat, Shuffle } from 'lucide-react';
import { cn } from '../lib/utils';
import { Slider } from '@/components/ui/slider';
import { useIsMobile } from '../hooks/use-mobile';

const MobilePlayer: React.FC = () => {
  const { currentSong, isPlaying, togglePlayback, playNext, playPrevious } = useMusic();
  const [expanded, setExpanded] = useState(false);
  const [progress, setProgress] = useState(30); // Mock progress
  const [isFavorite, setIsFavorite] = useState(false);
  const isMobile = useIsMobile();

  if (!currentSong) return null;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleProgressChange = (value: number[]) => {
    setProgress(value[0]);
  };

  return (
    <>
      {/* Expanded Mobile Player */}
      {expanded && (
        <div className="fixed inset-0 bg-music-darker z-50 block lg:hidden flex flex-col animate-fade-in">
          <div className="flex justify-between p-4 items-center">
            <div className="flex items-center">
              <button 
                className="text-gray-400 hover:text-white mr-2"
                onClick={toggleExpanded}
              >
                <ChevronDown size={24} />
              </button>
              <span className="text-sm text-music-highlight font-medium">Now Playing</span>
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={cn(
                "p-1 transition-colors",
                isFavorite ? "text-music-highlight" : "text-gray-400 hover:text-white"
              )}
            >
              <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6">
            <div className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 mb-6 sm:mb-8 relative group rounded-lg overflow-hidden">
              <img
                src={currentSong.cover}
                alt={currentSong.title}
                className="w-full h-full object-cover shadow-lg"
              />
              {isPlaying && (
                <div className="absolute bottom-2 right-2 flex items-center justify-center gap-1 rounded-full bg-black/40 py-1 px-3">
                  <div className="w-1.5 h-2.5 bg-music-highlight rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-4 bg-music-highlight rounded-full animate-pulse delay-100"></div>
                  <div className="w-1.5 h-3 bg-music-highlight rounded-full animate-pulse delay-200"></div>
                </div>
              )}
            </div>
            
            <div className="w-full text-center mb-6">
              <h2 className="text-xl font-bold text-white">{currentSong.title}</h2>
              <p className="text-gray-400 mt-1">{currentSong.artist}</p>
            </div>
            
            <div className="w-full mb-4">
              <Slider
                defaultValue={[progress]}
                max={100}
                step={1}
                value={[progress]}
                onValueChange={handleProgressChange}
                className="py-2"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1:23</span>
                <span>{currentSong.duration}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center w-full px-4 xs:px-8 sm:px-12 mt-6">
              <button className="p-1.5 text-gray-300 hover:text-music-highlight active:scale-95 transition-all">
                <Shuffle size={22} />
              </button>
              
              <button 
                className="p-2 text-gray-300 hover:text-white active:scale-95 transition-all" 
                onClick={playPrevious}
              >
                <SkipBack size={26} />
              </button>
              
              <button 
                className="p-3.5 bg-music-highlight rounded-full text-black hover:scale-105 active:scale-95 transition-all"
                onClick={togglePlayback}
              >
                {isPlaying ? <Pause size={28} /> : <Play size={28} />}
              </button>
              
              <button 
                className="p-2 text-gray-300 hover:text-white active:scale-95 transition-all" 
                onClick={playNext}
              >
                <SkipForward size={26} />
              </button>
              
              <button className="p-1.5 text-gray-300 hover:text-music-highlight active:scale-95 transition-all">
                <Repeat size={22} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Collapsed Mobile Player */}
      <div 
        className="fixed bottom-0 left-0 right-0 bg-music-dark p-2.5 border-t border-gray-800 lg:hidden shadow-lg cursor-pointer"
        onClick={toggleExpanded}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            <div className="w-10 h-10 mr-3 relative">
              <img
                src={currentSong.cover}
                alt={currentSong.title}
                className="w-full h-full object-cover rounded-md shadow"
              />
              {isPlaying && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-music-highlight rounded-full animate-pulse"></div>
              )}
            </div>
            
            <div className="flex-1 min-w-0 mr-3">
              <h3 className="text-white text-sm font-medium truncate">{currentSong.title}</h3>
              <p className="text-gray-400 text-xs truncate">{currentSong.artist}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <button 
              className="mr-3 text-gray-300 p-1.5 active:scale-95 transition-transform"
              onClick={(e) => {
                e.stopPropagation();
                playPrevious();
              }}
            >
              <SkipBack size={20} />
            </button>
            
            <button 
              className="p-1.5 bg-music-highlight rounded-full text-black mr-3 active:scale-95 transition-transform"
              onClick={(e) => {
                e.stopPropagation();
                togglePlayback();
              }}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            
            <button 
              className="text-gray-300 p-1.5 active:scale-95 transition-transform" 
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