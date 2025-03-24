import imagePelusaTrader_v1 from '../assets/Pelusa-Trader_v1.png';
import imagePelusaTrader_v2 from '../assets/Pelusa-Trader_v2.png';
import imagePromptCodeAssistant from '../assets/Prompt_Code_Assistant.png';

const Portfolio = () => {
  const project = {
    title: 'Pelusa Trader',
    description:
      'Pelusa Trader is a comprehensive automated trading platform designed to optimize capital management and investment strategies. The application features a frontend built with JavaScript, React, and Redux, while the backend is developed using Python, Uvicorn, and FastAPI. Additionally, Pine Script from TradingView is utilized for the automated generation of market alerts, enabling greater precision and agility in decision-making.',
    developmentPeriod: 'Development Period: November 26 2024 - April 1-15 2025',
    repositories: [
      { name: 'Documentation', url: 'https://github.com/Beelzebot777/Pelusa-Docs-Public' },
      { name: 'Frontend', url: 'https://github.com/Beelzebot777/Pelusa-FrontEnd-Strateger-Public' },
      { name: 'Backend Strateger', url: 'https://github.com/Beelzebot777/Pelusa-BackEnd-Strateger-Public' },
      { name: 'Backend AlarmHugger', url: 'https://github.com/Beelzebot777/Pelusa-Backend-AlarmHugger' },
      { name: 'PineScript Strategies', url: 'https://github.com/Beelzebot777/Algorithmic-Trading-PineScript' },
    ],
    githubProject: 'https://github.com/users/Beelzebot777/projects/8/views/3',
  };

  return (
    <div className="bg-background text-textPrimary py-4 px-0">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">Portfolio</h1>
      </div>

      <div className="flex justify-center max-w-5xl mx-auto">
        <div className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-panel p-0 sm:p-4">

          {/* PELUSA TRADER */}
          <div className="mb-6 px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary">{project.title}</h2>
            <p className="mt-4 text-sm sm:text-base text-textSecondary">{project.description}</p>
            <p className="mt-2 text-xs sm:text-sm text-gray-400 italic">{project.developmentPeriod}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 px-4 sm:px-6">
            <a
              href="https://beelzebot.com/pelusa-trader/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-lg block"
            >
              <img
                src={imagePelusaTrader_v1}
                alt="Pelusa Trader V1"
                className="w-full h-52 sm:h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute top-2 left-2 bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-md opacity-90">
                Version 1
              </span>
            </a>

            <a
              href="https://pelusa-front-end-strateger-public.vercel.app/alarms"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-lg block"
            >
              <img
                src={imagePelusaTrader_v2}
                alt="Pelusa Trader V2"
                className="w-full h-52 sm:h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute top-2 left-2 bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-md opacity-90">
                Version 2
              </span>
            </a>
          </div>

          <div className="mt-8 px-4 sm:px-6">
            <h3 className="text-lg sm:text-xl font-semibold text-accent mb-4">Development Process</h3>

            <div className="mb-6">
              <h4 className="text-md sm:text-lg font-semibold text-primary mb-2">Frontend Development</h4>
              <p className="text-sm sm:text-base text-textSecondary">
                Each React component followed a structured process: we began with a clear <strong>requirements specification</strong> to define what the component should do. Then, we created a <strong>UI design</strong> using TailwindCSS and Headless UI to shape the user experience. After that, we planned the <strong>data structure</strong> and state management with Redux. Once the foundations were clear, we developed the <strong>component logic</strong> and proceeded to the <strong>implementation</strong> phase. Components were <strong>tested</strong>, then <strong>refactored</strong> and <strong>deployed</strong> to Vercel using Vite.
              </p>
            </div>

            <div>
              <h4 className="text-md sm:text-lg font-semibold text-primary mb-2">Backend Development</h4>
              <p className="text-sm sm:text-base text-textSecondary">
                For each FastAPI endpoint, we started with a <strong>specification</strong>, then designed <strong>models</strong> with SQLAlchemy, defined <strong>business logic</strong> for parsing and validation, implemented it using asynchronous patterns, tested the routes, and deployed everything on an EC2 instance with SSL and reverse proxy.
              </p>
            </div>
          </div>

          <div className="mt-8 px-4 sm:px-6">
            <h4 className="text-md sm:text-lg font-semibold text-primary mb-2">Repositories</h4>
            <div className="flex flex-wrap gap-4">
              {project.repositories.map((repo, index) => (
                <a
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="white">
                    <path d="M12 0C5.37 0 0 5.373..."></path>
                  </svg>
                  {repo.name}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.githubProject}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 mt-4 text-sm text-black bg-white hover:bg-gray-200 rounded-md transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="black">
                  <path d="M12 0C5.37 0 0 5.373..."></path>
                </svg>
                View Project
              </a>
            </div>
          </div>

          {/* PROMPT CODE ASSISTANT */}
          <div className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-panel mt-12 p-0 sm:p-4">
            <div className="mb-6 px-4 sm:px-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary">Prompt Code Assistant</h2>
              <p className="mt-4 text-sm sm:text-base text-textSecondary">
                Prompt Code Assistant is a desktop application built with Tkinter that helps generate personalized prompts for Python projects. 
                The user selects a base prompt, a project folder, and specific files, and the app automatically builds a prompt by combining the 
                folder structure and content of the selected files.
              </p>
              <p className="mt-2 text-sm sm:text-base text-textSecondary">
                Everything is displayed in a clear and intuitive visual interface, allowing the user to edit, copy, or clear the final prompt.
                The generated prompt can be used directly in AI chat platforms like ChatGPT, Claude, or Gemini.
              </p>
            </div>

            <div className="px-4 sm:px-6 mb-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden rounded-lg block"
              >
                <img
                  src={imagePromptCodeAssistant}
                  alt="Prompt Code Assistant"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105 rounded-md"
                />
              </a>
            </div>

            <div className="px-4 sm:px-6 mb-8">
              <h3 className="text-md sm:text-lg font-semibold text-accent mb-2">Development Process</h3>
              <p className="text-sm sm:text-base text-textSecondary">
                Prompt Code Assistant was designed with a clean and modular architecture. The application separates the <strong>controller</strong>, <strong>core logic</strong>, 
                <strong>UI components</strong>, and <strong>utilities</strong>, enabling scalability and easy maintenance. 
              </p>
              <p className="mt-2 text-sm sm:text-base text-textSecondary">
                The main logic is handled by classes like <strong>PromptController</strong>, <strong>FileManager</strong>, and <strong>PromptGenerator</strong>, which organize user interaction, 
                file parsing, and prompt assembly. The visual interface, created with Tkinter, is divided into three panels: selection, context view, and final prompt generation.
              </p>
              <p className="mt-2 text-sm sm:text-base text-textSecondary">
                Additionally, the app includes <strong>internationalization support</strong>, as well as separate folders for <strong>tests</strong> and <strong>documentation</strong>, 
                following best practices in Python desktop application development.
              </p>
            </div>

            <div className="px-4 sm:px-6 mb-8">
              <a
                href="/PromptCodeAssistant.zip"
                download
                className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 14a1 1 0 011-1h3v-3a1 1 0 112 0v3h3a1 1 0 011 1v2H3v-2z" />
                  <path d="M13 7h-2V3H9v4H7l3 3 3-3z" />
                </svg>
                Download for Windows (.zip)
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
