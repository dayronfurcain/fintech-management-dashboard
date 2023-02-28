import { useContext } from 'react';

import {
  Sidebar,
  Header,
  Finance,
  Transaction,
  Graph,
  MyCards,
  Contact,
  Recent,
  AverageUsage,
} from './components';
import ThemeContext, { ContextProps } from './contexts/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext) as ContextProps;

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div
        className={`${
          theme === 'dark' ? 'bg-[#10172A]' : 'bg-white '
        }  text-white min-h-screen flex-1 p-6 pt-4 `}
      >
        <Header />
        <main className="grid grid-cols-1 lg:grid-cols-[70%_272px] gap-6">
          <div className="flex flex-col justify-center gap-6">
            <Finance />
            <Graph />
            <Transaction />
          </div>
          <section className="bg-[#13213C] rounded-2xl p-6 flex flex-col items-center justify-start gap-8 w-[272px] lg:w-auto m-auto lg:m-0">
            <MyCards />
            <Contact />
            <Recent />
            <AverageUsage />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
