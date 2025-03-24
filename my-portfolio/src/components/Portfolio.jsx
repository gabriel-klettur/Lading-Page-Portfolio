import imagePelusaTrader_v1 from '../assets/Pelusa-Trader_v1.png';
import imagePelusaTrader_v2 from '../assets/Pelusa-Trader_v2.png';

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
    <div className="bg-background text-textPrimary py-20 px-4 sm:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-primary mb-4">Portfolio</h1>
      </div>

      <div className="flex justify-center max-w-5xl mx-auto">
        <div className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-panel border border-border p-6">

          {/* Imágenes del proyecto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://beelzebot.com/pelusa-trader/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-lg block"
            >
              <img
                src={imagePelusaTrader_v1}
                alt="Pelusa Trader V1"
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
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
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute top-2 left-2 bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-md opacity-90">
                Version 2
              </span>
            </a>
          </div>

          {/* Detalles del Proyecto */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h2>
            <p className="mt-4 text-textSecondary">{project.description}</p>
            <p className="mt-4 text-sm text-gray-400 italic">{project.developmentPeriod}</p>

            {/* Repositorios */}
            <div className="mt-6 flex flex-wrap gap-4">
              {project.repositories.map((repo, index) => (
                <a
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.024c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.755-1.333-1.755-1.089-.745.082-.729.082-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.494.997.107-.775.42-1.305.763-1.605-2.665-.303-5.466-1.335-5.466-5.931 0-1.311.469-2.382 1.236-3.222-.124-.303-.536-1.524.118-3.176 0 0 1.008-.323 3.301 1.23A11.52 11.52 0 0112 6.807c1.02.004 2.046.138 3.003.404 2.292-1.553 3.3-1.23 3.3-1.23.655 1.653.243 2.874.119 3.176z" />
                  </svg>
                  {repo.name}
                </a>
              ))}
            </div>

            {/* Botón View Project con fondo blanco y texto oscuro */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.githubProject}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 mt-4 text-sm text-black bg-white hover:bg-gray-200 rounded-md transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.024c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.755-1.333-1.755-1.089-.745.082-.729.082-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.494.997.107-.775.42-1.305.763-1.605-2.665-.303-5.466-1.335-5.466-5.931 0-1.311.469-2.382 1.236-3.222-.124-.303-.536-1.524.118-3.176 0 0 1.008-.323 3.301 1.23A11.52 11.52 0 0112 6.807c1.02.004 2.046.138 3.003.404 2.292-1.553 3.3-1.23 3.3-1.23.655 1.653.243 2.874.119 3.176z" />
                </svg>
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
