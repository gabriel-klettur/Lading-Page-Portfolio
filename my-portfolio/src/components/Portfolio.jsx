import imageOpenGastro from '../assets/openGastro.webp';
import imagePelusaTrader from '../assets/pelusaTrader.webp';

const Portfolio = () => {
    const projects = [
        {
            title: 'Pelusa Trader',
            description: 'An application for automated trading, focused on optimizing capital management and investment strategies.',
            developmentPeriod: 'Development Period: November 26 2024 - April 1-15 2025',
            image: imagePelusaTrader, 
            link: 'https://www.beelzebot.com/pelusa-trader/',
            repositories: {
                documentation: 'https://github.com/Beelzebot777/Pelusa-Docs-Public',
                frontend: 'https://github.com/Beelzebot777/Pelusa-FrontEnd-Strateger-Public',
                backend1: 'https://github.com/Beelzebot777/Pelusa-BackEnd-Strateger-Public',
                backend2: 'https://github.com/Beelzebot777/Pelusa-Backend-AlarmHugger',                
                pinescript: 'https://github.com/Beelzebot777/Algorithmic-Trading-PineScript'
            },
            githubProject: 'https://github.com/users/Beelzebot777/projects/8/views/3?filterQuery=-repo%3ABeelzebot777%2FPelusa-Backend-AlarmHugger%2CBeelzebot777%2FAlgorithmic-Trading-PineScript'
        },
        {
            title: 'Open Gastro',
            description: 'A solution to improve operational management in the restaurant sector, streamlining processes for daily restaurant operations.',
            developmentPeriod: 'Development Period: May 1 2025 - date to be determined',
            image: imageOpenGastro, 
            link: null, // No hay enlace habilitado
            githubRepo: null,
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
                    <div 
                        key={index} 
                        className={`group block overflow-hidden rounded-lg shadow-md ${project.link ? 'hover:shadow-xl transition-shadow duration-300' : ''}`}
                    >
                        {/* Enlace en la imagen */}
                        {project.link ? (
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="block"
                            >
                                <div 
                                    className={`h-64 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105`} 
                                    style={{ 
                                        backgroundImage: `url(${project.image})`
                                    }}
                                ></div>
                            </a>
                        ) : (
                            <div 
                                className={`h-64 bg-cover bg-center transform transition-transform duration-500`} 
                                style={{ 
                                    backgroundImage: `url(${project.image})`,
                                    filter: 'grayscale(100%)',
                                    opacity: '0.6'
                                }}
                            ></div>
                        )}

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

                            {project.title === 'Pelusa Trader' && (
                                <div className="mt-6 flex flex-wrap gap-4">
                                    {Object.entries(project.repositories).map(([key, url]) => (
                                        <a 
                                            key={key} 
                                            href={url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center px-4 py-2 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors duration-300"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="white">
                                                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.024c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.755-1.333-1.755-1.089-.745.082-.729.082-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.494.997.107-.775.42-1.305.763-1.605-2.665-.303-5.466-1.335-5.466-5.931 0-1.311.469-2.382 1.236-3.222-.124-.303-.536-1.524.118-3.176 0 0 1.008-.323 3.301 1.23A11.52 11.52 0 0112 6.807c1.02.004 2.046.138 3.003.404 2.292-1.553 3.3-1.23 3.3-1.23.655 1.653.243 2.874.119 3.176z" />
                                            </svg>
                                            {key.charAt(0).toUpperCase() + key.slice(1)} Repository
                                        </a>
                                    ))}
                                </div>
                            )}

                            <div className="flex flex-wrap gap-4">
                                <a 
                                    href={project.githubProject || '#'} 
                                    target={project.githubProject ? '_blank' : ''} 
                                    rel="noopener noreferrer" 
                                    className={`flex items-center px-4 py-2 mt-4 text-sm rounded-md transition-colors duration-300 ${
                                        project.githubProject 
                                            ? 'text-white bg-gray-800 hover:bg-gray-900' 
                                            : 'text-gray-400 bg-gray-200 cursor-not-allowed pointer-events-none'
                                    }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.024c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.755-1.333-1.755-1.089-.745.082-.729.082-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.494.997.107-.775.42-1.305.763-1.605-2.665-.303-5.466-1.335-5.466-5.931 0-1.311.469-2.382 1.236-3.222-.124-.303-.536-1.524.118-3.176 0 0 1.008-.323 3.301 1.23A11.52 11.52 0 0112 6.807c1.02.004 2.046.138 3.003.404 2.292-1.553 3.3-1.23 3.3-1.23.655 1.653.243 2.874.119 3.176z" />
                                    </svg>
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
