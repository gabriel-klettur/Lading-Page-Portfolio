

import './App.css'
import Aboutme from './components/aboutme';
import Portfolio from './components/Portfolio';
import RoadMap from './components/Roadmap';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'


function App() {
  return (
    <>
      <TabGroup>
        <TabList>
          <Tab className="text-gray-500">About Me</Tab>
          <Tab className="text-gray-500">Roadmap</Tab>
          <Tab className="text-gray-500">Portfolio</Tab>          
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
        </TabPanels>
      </TabGroup>
    </>
  );
}

export default App;

