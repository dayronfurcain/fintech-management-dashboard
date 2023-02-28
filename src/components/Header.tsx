import { useContext } from 'react';
import ThemeContext, { ContextProps } from '../contexts/ThemeContext';
import {
  RiSearchLine,
  RiNotification2Line,
  RiArrowDownSLine,
  RiLogoutCircleRLine,
} from 'react-icons/ri';

import perfil1 from '../assets/perfil1.jpg';
import { useActive } from '../hooks';

const Header = () => {
  const { active, handleToggle } = useActive();
  const { theme } = useContext(ThemeContext) as ContextProps;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
      <form className="relative order-1 sm:order-none">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#161D30] rounded-lg text-sm py-2 pl-10 outline-none min-w-"
        />
        <RiSearchLine className="absolute left-2 top-[50%] -translate-y-1/2 text-xl" />
      </form>
      <div className="flex items-center justify-center gap-2">
        <div className="relative">
          <RiNotification2Line
            className={`${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            } text-base`}
          />
          <div className="absolute top-0 right-0 bg-red-500 h-2 w-2 rounded-[50%] "></div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <img
            src={perfil1}
            alt="perfil1"
            className="w-8 h-8 object-cover rounded-[50%]"
          />
          <span
            className={`${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            } text-base font-[600]`}
          >
            Melissa
          </span>
        </div>
        <div className="relative">
          <RiArrowDownSLine
            className={`text-base ${active ? 'rotate-180' : 'rotate-0'} ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            } duration-500`}
            onClick={handleToggle}
          />
          {active && (
            <p className="slide-bottom absolute right-0 top-0 z-10 px-4 py-2 rounded-lg ring-1 ring-white text-sm flex justify-center items-center gap-2 backdrop-blur-sm bg-[#172242]/50 hover:bg-[#161D30] cursor-pointer">
              <RiLogoutCircleRLine
                className={`${
                  theme === 'dark' ? 'text-white' : 'text-gray-700'
                }`}
              />
              <span
                className={`${
                  theme === 'dark' ? 'text-white' : 'text-gray-700'
                } font-[600]`}
              >
                Logout
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
