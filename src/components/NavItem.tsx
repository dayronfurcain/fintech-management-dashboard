interface NavItemProps {
  icon: JSX.Element;
  description: string;
}

const NavItem = ({ icon, description }: NavItemProps) => {
  return (
    <li className="relative group text-white cursor-pointer flex items-center justify-center">
      <a
        href="#"
        className="text-2xl h-12 w-12 rounded-[50%] flex justify-center items-center group-hover:bg-[#161D30] focus:bg-[#161D30] duration-500"
      >
        {icon}
      </a>
      <span className="absolute left-[60px] ring-1 ring-white invisible group-hover:visible bg-[#161D30] rounded-full py-1 px-3 text-sm whitespace-nowrap duration-500 ">
        {description}
      </span>
    </li>
  );
};

export default NavItem;
