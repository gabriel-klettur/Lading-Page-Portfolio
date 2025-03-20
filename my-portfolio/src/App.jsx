

import './App.css'
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import RoadMap from './components/Roadmap';
import TraderPortfolio from './components/TraderPortfolio';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'


function App() {
  return (
    <>
      <TabGroup>
        <TabList className="flex justify-center space-x-4">
          <Tab className="text-gray-500">About Me</Tab>
          <Tab className="text-gray-500">Roadmap</Tab>
          <Tab className="text-gray-500">Software Developer Portfolio</Tab>          
          <Tab className="text-gray-500">Trader Portfolio</Tab>          
        </TabList>
        <TabPanels>
          <TabPanel>
            <Aboutme />
          </TabPanel>
          <TabPanel>
            <RoadMap />
          </TabPanel>
          <TabPanel>
            <Portfolio />
          </TabPanel>
          <TabPanel>
            <TraderPortfolio /> {/* Nuevo componente */}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}

export default App;

