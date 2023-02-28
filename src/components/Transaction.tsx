import { transactions } from '../constants';
import { TransactionItem } from './';

const Transaction = () => {
  return (
    <section className="bg-[#13213C] rounded-2xl p-6 overflow-auto">
      <div className="min-w-[450px]">
        <h2 className="text-lg font-[800] mb-4">Transactions</h2>
        <ul className="flex flex-col justify-center items-center gap-2">
          {transactions.map((trans) => (
            <TransactionItem {...trans} key={trans.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Transaction;
