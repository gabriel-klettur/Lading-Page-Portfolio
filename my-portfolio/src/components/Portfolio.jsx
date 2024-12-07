import imageOpenGastro from '../assets/openGastro.webp';
import imagePelusaTrader from '../assets/pelusaTrader.webp';

const Portfolio = () => {
    const projects = [
        {
            title: 'Pelusa Trader',
            description: 'An application for automated trading, focused on optimizing capital management and investment strategies.',
            developmentPeriod: 'Development Period: November 26 2024 - April 1-15 2025',
            image: imagePelusaTrader, 
            link: 'https://link-to-pelusa-trader.com',
            githubRepo: 'https://github.com/yourusername/pelusa-trader',
            githubProject: 'https://github.com/users/yourusername/projects/1'
        },
        {
            title: 'Open Gastro',
            description: 'A solution to improve operational management in the restaurant sector, streamlining processes for daily restaurant operations.',
            developmentPeriod: 'Development Period: May 1 2025 - date to be determined',
            image: imageOpenGastro, 
            link: 'https://link-to-open-gastro.com',
            githubRepo: 'https://github.com/yourusername/open-gastro',
            githubProject: null // View Project estará deshabilitado
        }
    ];

    return (
        <div className="bg-gray-50 py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Portfolio
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Discover some of the most impactful projects I’ve worked on. Click on each project to see the details and learn more about the technologies, goals, and challenges I tackled.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-12 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <a 
                        key={index} 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                        <div 
                            className="h-64 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105" 
                            style={{ backgroundImage: `url(${project.image})` }}
                        ></div>
                        <div className="p-6 bg-white">
                            <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                                {project.title}
                            </h2>
                            <p className="mt-4 text-gray-700">
                                {project.description}
                            </p>
                            {project.developmentPeriod && (
                                <p className="mt-4 text-sm text-gray-500 italic">
                                    {project.developmentPeriod}
                                </p>
                            )}

                            {/* Sección de enlaces a GitHub con íconos */}
                            <div className="mt-6 flex space-x-4">
                                <a 
                                    href={project.githubRepo} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center px-4 py-2 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.024c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.755-1.333-1.755-1.089-.745.082-.729.082-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.494.997.107-.775.42-1.305.763-1.605-2.665-.303-5.466-1.335-5.466-5.931 0-1.311.469-2.382 1.236-3.222-.124-.303-.536-1.524.118-3.176 0 0 1.008-.323 3.301 1.23A11.52 11.52 0 0112 6.807c1.02.004 2.046.138 3.003.404 2.292-1.553 3.3-1.23 3.3-1.23.655 1.653.243 2.874.119 3.176.768.84 1.236 1.911 1.236 3.222 0 4.608-2.806 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .321.192.694.801.576C20.565 21.797 24 17.298 24 12 24 5.373 18.627 0 12 0z" />
                                    </svg>
                                    View Repository
                                </a>
                                <button 
                                    disabled={!project.githubProject} 
                                    className={`flex items-center px-4 py-2 text-sm rounded-md transition-colors duration-300 ${
                                        project.githubProject 
                                            ? 'text-white bg-gray-800 hover:bg-gray-900' 
                                            : 'text-gray-400 bg-gray-200 cursor-not-allowed'
                                    }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill={project.githubProject ? 'white' : 'currentColor'}>
                                        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.024c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.755-1.333-1.755-1.089-.745.082-.729.082-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.494.997.107-.775.42-1.305.763-1.605-2.665-.303-5.466-1.335-5.466-5.931 0-1.311.469-2.382 1.236-3.222-.124-.303-.536-1.524.118-3.176 0 0 1.008-.323 3.301 1.23A11.52 11.52 0 0112 6.807c1.02.004 2.046.138 3.003.404 2.292-1.553 3.3-1.23 3.3-1.23.655 1.653.243 2.874.119 3.176.768.84 1.236 1.911 1.236 3.222 0 4.608-2.806 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .321.192.694.801.576C20.565 21.797 24 17.298 24 12 24 5.373 18.627 0 12 0z" />
                                    </svg>
                                    View Project
                                </button>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
