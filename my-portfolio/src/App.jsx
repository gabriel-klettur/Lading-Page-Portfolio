import './App.css';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import RoadMap from './components/Roadmap';
import TraderPortfolio from './components/TraderPortfolio';

import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react';

function App() {
  const tabStyle = ({ selected }) =>
    `w-full sm:w-auto text-center px-12 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
      selected
        ? 'bg-indigo-600 text-white shadow'
        : 'text-gray-400 hover:text-white hover:bg-gray-700'
    }`;

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-0 py-0 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <TabGroup>
          {/* TAB LIST */}
          <TabList className="grid grid-cols-1 sm:flex sm:flex-wrap justify-center gap-3 mb-6">
            <Tab className={tabStyle}>About Me</Tab>
            <Tab className={tabStyle}>Roadmap</Tab>
            <Tab className={tabStyle}>Software Dev Portfolio</Tab>
            <Tab className={tabStyle}>Trader Portfolio</Tab>
          </TabList>

          {/* TAB PANELS */}
          <TabPanels className="bg-[#161b22] rounded-xl shadow-lg ring-1 ring-gray-700 p-4 sm:p-6">
            <TabPanel><Aboutme /></TabPanel>
            <TabPanel><RoadMap /></TabPanel>
            <TabPanel><Portfolio /></TabPanel>
            <TabPanel><TraderPortfolio /></TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

export default App;
