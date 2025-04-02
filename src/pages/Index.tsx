
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import SongList from '../components/SongList';
import Player from '../components/Player';
import MobilePlayer from '../components/MobilePlayer';
import MobileNav from '../components/MobileNav';
import { MusicProvider, useMusic } from '../contexts/MusicContext';

const MusicDashboardContent: React.FC = () => {
  const { currentCategory } = useMusic();

  return (
    <div className="flex flex-col h-screen bg-music-darker text-white">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="p-3 sm:p-4 md:p-6 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-2 sm:gap-4">
              <MobileNav />
              <h1 className="text-xl sm:text-2xl font-bold text-music-highlight">{currentCategory}</h1>
            </div>
            <div className="hidden md:block">
              <SearchBar />
            </div>
          </header>
          
          <main className="flex flex-1 overflow-hidden p-3 sm:p-4 md:p-6 space-x-0 lg:space-x-6">
            <div className="flex-1 overflow-hidden max-w-4xl mx-auto lg:mx-0">
              <SongList />
            </div>
            <Player />
          </main>
        </div>
      </div>
      <MobilePlayer />
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <MusicProvider>
      <MusicDashboardContent />
    </MusicProvider>
  );
};

export default Index;
