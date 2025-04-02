
import React, { useState, useEffect } from 'react';
import { useMusic } from '../contexts/MusicContext';
import { cn } from '../lib/utils';
import { ScrollArea } from './ui/scroll-area';
import SearchBar from './SearchBar';

const SongList: React.FC = () => {
  const { songs, currentSong, setCurrentSong, togglePlayback, isPlaying, currentCategory } = useMusic();
  const [filteredSongs, setFilteredSongs] = useState(songs);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setFilteredSongs(songs);
    setSearchQuery('');
  }, [songs]);

  const handleSongClick = (song: typeof songs[0]) => {
    if (currentSong?.id === song.id) {
      togglePlayback();
    } else {
      setCurrentSong(song);
      if (!isPlaying) {
        togglePlayback();
      }
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setFilteredSongs(songs);
      return;
    }
    
    const filtered = songs.filter(song => 
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase()) ||
      song.album.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredSongs(filtered);
  };

  return (
    <div className="flex flex-col h-full bg-music-dark/30 p-4 rounded-lg">
      <div className="mb-4">
        <SearchBar onSearch={handleSearch} className="w-full" />
      </div>
      
      <ScrollArea className="w-full h-[calc(100vh-210px)] md:h-[calc(100vh-180px)]">
        <div className="space-y-2 pr-4">
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => (
              <div
                key={song.id}
                onClick={() => handleSongClick(song)}
                className={cn(
                  "song-item cursor-pointer p-3 rounded-md hover:bg-music-light transition-colors duration-200 flex items-center group",
                  currentSong?.id === song.id ? "bg-music-light" : "bg-transparent"
                )}
              >
                <div className="w-12 h-12 mr-4 flex-shrink-0 relative group-hover:scale-105 transition-transform">
                  <img
                    src={song.cover}
                    alt={song.title}
                    className="w-full h-full object-cover rounded shadow-md"
                    loading="lazy"
                  />
                  {currentSong?.id === song.id && isPlaying && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded">
                      <div className="w-2 h-2 bg-music-highlight rounded-full animate-pulse"></div>
                      <div className="w-2 h-4 bg-music-highlight rounded-full mx-1 animate-pulse"></div>
                      <div className="w-2 h-3 bg-music-highlight rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={cn(
                    "text-sm font-medium truncate",
                    currentSong?.id === song.id ? "text-music-highlight" : "text-white"
                  )}>{song.title}</h3>
                  <p className="text-gray-400 text-xs truncate">{song.artist}</p>
                </div>
                <div className="text-gray-400 text-xs ml-4">{song.duration}</div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-400 bg-music-dark/20 rounded-lg">
              <p className="mb-2">No songs found matching "{searchQuery}"</p>
              <button 
                className="text-music-highlight text-sm hover:underline"
                onClick={() => handleSearch("")}
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default SongList;
