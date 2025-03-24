import './App.css';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import RoadMap from './components/Roadmap';
import TraderPortfolio from './components/TraderPortfolio';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

function App() {
  const tabStyle = ({ selected }) =>
    `px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300 ${
      selected
        ? 'bg-indigo-600 text-white shadow'
        : 'text-gray-400 hover:text-white hover:bg-gray-700'
    }`;

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] font-sans px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <TabGroup>
          <TabList className="flex flex-wrap justify-center gap-2 mb-8">
            <Tab className={tabStyle}>About Me</Tab>
            <Tab className={tabStyle}>Roadmap</Tab>
            <Tab className={tabStyle}>Software Dev Portfolio</Tab>
            <Tab className={tabStyle}>Trader Portfolio</Tab>
          </TabList>

          <TabPanels className="bg-[#161b22] p-6 rounded-xl shadow-lg ring-1 ring-gray-700">
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
