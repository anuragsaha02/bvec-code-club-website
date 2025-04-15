
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    const savedMode = localStorage.getItem('color-mode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Initialize mode from saved preference or system preference
    if (savedMode) {
      setIsDarkMode(savedMode === 'dark');
    } else {
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply mode to document
    if (isDarkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
    
    // Save to localStorage
    localStorage.setItem('color-mode', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <button
      className="fixed bottom-8 left-8 p-3 bg-card border border-border rounded-full shadow-lg z-50 hover:bg-primary/20 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      onClick={toggleMode}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ModeToggle;
