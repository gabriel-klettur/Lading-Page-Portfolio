
const Roadmap = () => {
    const roadmapData = [
        {
            quarter: 'Q4 2024',
            academic: [
                'Finalizar la certificación AWS Cloud Practitioner',
                'Completar curso avanzado de Redux y RTK'
            ],
            projects: [
                'Finalizar la lógica de Pelusa Trader',
                'Desarrollo de la API de backend para Pelusa Trader'
            ]
        },
        {
            quarter: 'Q1 2025',
            academic: [
                'Iniciar la certificación AWS Solutions Architect',
                'Participar en un Hackathon de 48 horas'
            ],
            projects: [
                'Desarrollar la interfaz de usuario de Open Gastro',
                'Probar estrategias avanzadas en Pelusa Trader'
            ]
        },
        {
            quarter: 'Q2 2025',
            academic: [
                'Certificación AWS Solutions Architect completada',
                'Curso de diseño de UI/UX avanzado'
            ],
            projects: [
                'Despliegue de Pelusa Trader en producción',
                'Pruebas iniciales de Open Gastro'
            ]
        }
    ];

    return (
        <div className="bg-gray-50 py-20">
            <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-10">
                Roadmap
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
