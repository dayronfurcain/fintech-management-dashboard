import { RiArrowRightSLine } from 'react-icons/ri';
import person1 from '../assets/person1.jpg';

const Recent = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <h2>Recent</h2>
        <RiArrowRightSLine className="text-xl" />
      </div>
      <div className="px-4 py-2 bg-[#1A264C] rounded-3xl flex justify-start items-center gap-2">
        <img
          src={person1}
          alt="person"
          className="w-10 h-10 rounded-[50%] object-cover"
        />
        <div>
          <p>Alicia Smith</p>
          <p className="text-sm">
            Card <span className="text-gray-200">4092 2287 ****</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recent;
