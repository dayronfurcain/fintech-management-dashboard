import { finances } from '../constants';

const Finance = () => {
  return (
    <section className="bg-[#13213C] rounded-2xl mx-auto sm:mx-0">
      <ul className="flex flex-col sm:flex-row  justify-between items-center p-6 gap-4 sm:gap-0">
        {finances.map((finance) => (
          <li
            key={finance.id}
            className="sm:flex-1 border-l-2 sm:first:border-none pl-4 sm:first:p-0"
          >
            <p className="text-xl">{finance.description}</p>
            <p className="text-3xl font-bold">{finance.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Finance;
