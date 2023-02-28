interface TransactionItemProps {
  id?: number;
  icon: JSX.Element;
  description: string;
  date: string;
  time: string;
  amount: string;
}

const TransactionItem = ({
  icon,
  description,
  date,
  time,
  amount,
}: TransactionItemProps) => {
  return (
    <li className="group w-full flex justify-between items-center py-2 px-4 hover:bg-[#1A264C] rounded-lg duration-500">
      <span className="text-xl w-10 h-10 bg-[#161D30] flex justify-center items-center rounded-[50%]">
        {icon}
      </span>
      <span>{description}</span>
      <div>
        <p className="text-sm">Date</p>
        <span>{date}</span>
      </div>
      <div>
        <p className="text-sm">Time</p>
        <span>{time}</span>
      </div>
      <div>
        <p className="text-sm">Amount</p>
        <span>{amount}</span>
      </div>
      <a
        href="#"
        className="text-sm ring-2 ring-[#384CF9] rounded-xl py-1 px-2 group-hover:bg-[#384CF9] duration-500"
      >
        See invoice
      </a>
    </li>
  );
};

export default TransactionItem;
