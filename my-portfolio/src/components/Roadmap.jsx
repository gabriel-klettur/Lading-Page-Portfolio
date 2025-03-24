const Roadmap = () => {
    const roadmapData = [
      {
        quarter: 'Q4 2024',
        academic: [
          'Self-study of Pine Script to develop advanced trading strategies in TradingView',
        ],
        projects: ['Development of Pelusa Trader: Frontend, Backend, and Documentation'],
      },
      {
        quarter: 'Q1 2025',
        academic: [
          'Machine Learning with Python: from Linear Models to Deep Learning (MITx)',
        ],
        projects: [
          'Continued development of Pelusa Trader: Frontend, Backend, and Documentation',
          'Creation of Pine Script strategies for testing within Pelusa Trader',
        ],
      },
      {
        quarter: 'Q2 2025',
        academic: [
          'Completion of the course "Machine Learning with Python: from Linear Models to Deep Learning" (MITx)',
        ],
        projects: ['Completion of Pelusa Trader', 'Initiation of Open Gastro development'],
      },
      {
        quarter: 'Q3 2025',
        academic: ['Oxford Algorithmic Trading Programme (Oxford University)'],
        projects: ['Development of Open Gastro'],
      },
    ];
  
    return (
      <div className="bg-background text-textPrimary py-20 px-4 sm:px-6">
        <h1 className="text-center text-4xl font-extrabold text-primary mb-8">My Roadmap</h1>
        <p className="text-center text-textSecondary max-w-3xl mx-auto mb-16">
          Here you can explore my academic goals and certifications, as well as my project
          development plans. Each quarter highlights key achievements and ongoing goals.
        </p>
  
        <div className="max-w-6xl mx-auto relative">
          {roadmapData.map((item, index) => (
            <div key={index} className="relative mb-20">
              {/* Línea vertical */}
              <div className="absolute top-0 left-7 md:left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
  
              {/* Contenido por Quarter */}
              <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12">
                {/* Fecha */}
                <div className="flex-shrink-0 mb-8 md:mb-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-lg shadow-lg">
                    {item.quarter}
                  </div>
                </div>
  
                {/* Contenido */}
                <div className="w-full md:w-10/12 bg-panel border border-border shadow-md rounded-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Academic */}
                    <div>
                      <h3 className="text-xl font-bold text-accent mb-4">
                        📘 Academic Knowledge & Certifications
                      </h3>
                      <ul className="space-y-4">
                        {item.academic.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-start">
                            <span className="h-4 w-4 mt-1 bg-accent rounded-full mr-4"></span>
                            <span className="text-textSecondary">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
  
                    {/* Projects */}
                    <div>
                      <h3 className="text-xl font-bold text-green-400 mb-4">
                        🚀 Project Development
                      </h3>
                      <ul className="space-y-4">
                        {item.projects.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-start">
                            <span className="h-4 w-4 mt-1 bg-green-400 rounded-full mr-4"></span>
                            <span className="text-textSecondary">{goal}</span>
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
  