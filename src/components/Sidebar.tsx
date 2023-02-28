import { navbarLinks } from '../constants';
import {
  RiMenu5Line,
  RiCloseFill,
  RiMoonLine,
  RiSunLine,
} from 'react-icons/ri';
import { NavItem, ModeItem } from './';
import { useActive } from '../hooks';
import { useContext, useState } from 'react';
import ThemeContext, { ContextProps } from '../contexts/ThemeContext';

const Sidebar = () => {
  const menu = useActive();
  const { theme, handleTheme } = useContext(ThemeContext) as ContextProps;

  console.log(theme);

  const handleMode = () => {
    if (theme === 'dark') handleTheme('light');
    if (theme === 'light') handleTheme('dark');
  };

  return (
    <nav
      className={`fixed ${
        menu.active ? 'left-0' : '-left-full'
      } md:static top-0 z-20 bg-[#172242] p-8 pt-6 min-h-full transition-all`}
    >
      <button
        onClick={menu.handleToggle}
        className="fixed right-4 bottom-4 z-10 flex justify-center items-center h-10 w-10 bg-[#172242] rounded-[50%] md:hidden"
      >
        {menu.active ? (
          <RiCloseFill className="text-white text-2xl" />
        ) : (
          <RiMenu5Line className="text-white text-2xl" />
        )}
      </button>
      <h1 className="font-bold text-white text-center text-xl mb-12 tracking-[4px]">
        LOGO
      </h1>
      <ul className="flex flex-col justify-center items-center gap-[4vh]">
        {navbarLinks.map(({ id, icon, description }) => (
          <NavItem key={id} icon={icon} description={description} />
        ))}
        <div onClick={handleMode}>
          {theme === 'dark' ? (
            <ModeItem icon={<RiSunLine />} description={'Light Mode'} />
          ) : (
            <ModeItem icon={<RiMoonLine />} description={'Dark Mode'} />
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
