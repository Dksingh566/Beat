
import React, { useState } from 'react';
import { Menu, X, Home, ListMusic, Heart, Clock } from 'lucide-react';
import { useMusic } from '../contexts/MusicContext';
import { cn } from '../lib/utils';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentCategory, setCurrentCategory } = useMusic();

  const menuItems = [
    { label: 'For You', icon: Home },
    { label: 'Top Tracks', icon: ListMusic },
    { label: 'Favourites', icon: Heart },
    { label: 'Recently Played', icon: Clock },
  ];

  const handleMenuItemClick = (label: string) => {
    setCurrentCategory(label);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 hover:text-white"
      >
        <Menu size={24} />
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex">
          <div className="bg-music-dark w-64 h-full">
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <nav className="p-6">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleMenuItemClick(item.label)}
                      className={cn(
                        "flex items-center w-full text-left py-2 px-4 rounded-md transition-colors duration-200",
                        currentCategory === item.label 
                          ? "bg-music-light text-music-highlight font-medium" 
                          : "text-gray-400 hover:text-white hover:bg-music-light/30"
                      )}
                    >
                      <item.icon 
                        size={18} 
                        className={cn(
                          "mr-4",
                          currentCategory === item.label ? "text-music-highlight" : ""
                        )} 
                      />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div 
            className="flex-1"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
