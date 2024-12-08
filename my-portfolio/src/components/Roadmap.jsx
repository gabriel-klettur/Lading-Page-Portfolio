
const Roadmap = () => {
    const roadmapData = [
        {
            quarter: 'Q4 2024',
            academic: [
                'Self-study of Pine Script to develop advanced trading strategies in TradingView',
            ],
            projects: [
                'Development of Pelusa Trader: Frontend, Backend, and Documentation',
            ]
        },
        {
            quarter: 'Q1 2025',
            academic: [
                'Machine Learning with Python: from Linear Models to Deep Learning (MITx)',
            ],
            projects: [
                'Continued development of Pelusa Trader: Frontend, Backend, and Documentation',
                'Creation of Pine Script strategies for testing within Pelusa Trader'
            ]
        },
        {
            quarter: 'Q2 2025',
            academic: [
                'Completion of the course "Machine Learning with Python: from Linear Models to Deep Learning" (MITx)',
            ],
            projects: [
                'Completion of Pelusa Trader',
                'Initiation of Open Gastro development',
            ]
        },
        {
            quarter: 'Q3 2025',
            academic: [
                'Oxford Algorithmic Trading Programme (Oxford University)',
            ],
            projects: [
                'Development of Open Gastro',
            ]
        }
    ];
    

    return (
        <div className="bg-gray-50 py-20">
            <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-10">
                My Roadmap
            </h1>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
                Here you can explore my academic goals and certifications, as well as my project development plans. 
                Each quarter highlights key achievements and ongoing goals.
            </p>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {roadmapData.map((item, index) => (
                    <div key={index} className="relative mb-16">
                        {/* Línea de tiempo vertical */}
                        <div className="absolute top-0 left-5 md:left-1/2 w-1 h-full bg-gray-200"></div>

                        {/* Contenido de cada Quarter */}
                        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12">
                            
                            {/* Quarter / Fecha */}
                            <div className="flex-shrink-0 mb-8 md:mb-0">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white font-bold text-lg">
                                    {item.quarter}
                                </div>
                            </div>

                            {/* Contenido del Quarter */}
                            <div className="w-full md:w-10/12 bg-white shadow-md rounded-lg p-8">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {/* Conocimientos Académicos y Certificaciones */}
                                    <div>
                                        <h3 className="text-xl font-bold text-indigo-600 mb-4">
                                            📘 Academic Knowledge & Certifications
                                        </h3>
                                        <ul className="space-y-4">
                                            {item.academic.map((goal, goalIndex) => (
                                                <li key={goalIndex} className="flex items-start">
                                                    <span className="h-5 w-5 bg-indigo-600 rounded-full mr-4 mt-1"></span>
                                                    <span className="text-gray-700">{goal}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Desarrollo de Proyectos */}
                                    <div>
                                        <h3 className="text-xl font-bold text-teal-600 mb-4">
                                            🚀 Project Development
                                        </h3>
                                        <ul className="space-y-4">
                                            {item.projects.map((goal, goalIndex) => (
                                                <li key={goalIndex} className="flex items-start">
                                                    <span className="h-5 w-5 bg-teal-600 rounded-full mr-4 mt-1"></span>
                                                    <span className="text-gray-700">{goal}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;
