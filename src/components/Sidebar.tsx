
import React from 'react';
import { Home, ListMusic, Heart, Clock, Music } from 'lucide-react';
import { useMusic } from '../contexts/MusicContext';
import { cn } from '../lib/utils';

const Sidebar: React.FC = () => {
  const { currentCategory, setCurrentCategory } = useMusic();

  const menuItems = [
    { label: 'For You', icon: Home },
    { label: 'Top Tracks', icon: ListMusic },
    { label: 'Favourites', icon: Heart },
    { label: 'Recently Played', icon: Clock },
  ];

  return (
    <div className="w-64 bg-music-dark border-r border-gray-800 hidden md:block">
      <div className="p-6">
        <div className="flex items-center mb-8">
          <Music size={28} className="text-music-highlight mr-2" />
          <h1 className="text-xl font-bold">Beats</h1>
        </div>
        
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => setCurrentCategory(item.label)}
                  className={cn(
                    "flex items-center w-full text-left py-2 px-4 rounded-md transition-all duration-200",
                    currentCategory === item.label 
                      ? "bg-music-light text-music-highlight font-medium" 
                      : "text-gray-400 hover:text-white hover:bg-music-light/30"
                  )}
                >
                  <item.icon 
                    size={18} 
                    className={cn(
                      "mr-4 transition-transform",
                      currentCategory === item.label 
                        ? "text-music-highlight scale-110" 
                        : ""
                    )} 
                  />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
