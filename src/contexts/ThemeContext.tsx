import { createContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | null;

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export interface ContextProps {
  theme: Theme;
  handleTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ContextProps | null>(null);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    const themeValue = localStorage.getItem('theme');

    if (!themeValue) {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      setTheme(themeValue as Theme);
    }
  }, []);

  const handleTheme = (theme: Theme) => {
    localStorage.setItem('theme', theme as string);
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
