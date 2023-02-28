import { BsThreeDots } from 'react-icons/bs';
import credit_card from '../assets/credit_card.png';

const MyCards = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex items-center justify-between w-full">
        <h2 className="">My Cards</h2>
        <BsThreeDots />
      </div>
      <img src={credit_card} alt="credit-card" className="w-[240px] sm:100%" />
    </div>
  );
};

export default MyCards;
