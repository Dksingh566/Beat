
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Song, songs, topTracks, favorites, recentlyPlayed } from '../data/songs';

interface MusicContextType {
  songs: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  setCurrentSong: (song: Song) => void;
  togglePlayback: () => void;
  playNext: () => void;
  playPrevious: () => void;
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
  getSongsByCategory: (category: string) => Song[];
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('For You');

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const getSongsByCategory = (category: string): Song[] => {
    switch (category) {
      case 'For You':
        return songs;
      case 'Top Tracks':
        return topTracks;
      case 'Favourites':
        return favorites;
      case 'Recently Played':
        return recentlyPlayed;
      default:
        return songs;
    }
  };

  const playNext = () => {
    if (!currentSong) {
      const currentSongs = getSongsByCategory(currentCategory);
      if (currentSongs.length > 0) {
        setCurrentSong(currentSongs[0]);
        setIsPlaying(true);
      }
      return;
    }

    const currentSongs = getSongsByCategory(currentCategory);
    const currentIndex = currentSongs.findIndex(song => song.id === currentSong.id);
    if (currentIndex < currentSongs.length - 1) {
      setCurrentSong(currentSongs[currentIndex + 1]);
      setIsPlaying(true);
    }
  };

  const playPrevious = () => {
    if (!currentSong) {
      return;
    }

    const currentSongs = getSongsByCategory(currentCategory);
    const currentIndex = currentSongs.findIndex(song => song.id === currentSong.id);
    if (currentIndex > 0) {
      setCurrentSong(currentSongs[currentIndex - 1]);
      setIsPlaying(true);
    }
  };

  return (
    <MusicContext.Provider
      value={{
        songs: getSongsByCategory(currentCategory),
        currentSong,
        isPlaying,
        setCurrentSong,
        togglePlayback,
        playNext,
        playPrevious,
        currentCategory,
        setCurrentCategory,
        getSongsByCategory,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = (): MusicContextType => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};
