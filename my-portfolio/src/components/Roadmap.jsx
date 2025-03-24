const Roadmap = () => {
    const roadmapData = [
      {
        quarter: 'Q4 2024',
        academic: ['Self-study of Pine Script to develop advanced trading strategies in TradingView'],
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
      <div className="bg-background text-textPrimary py-4 px-0 sm:px-2">
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-primary mb-6 sm:mb-8">
          My Roadmap
        </h1>
        <p className="text-center text-sm sm:text-base text-textSecondary max-w-3xl mx-auto mb-10 sm:mb-16">
          Here you can explore my academic goals and certifications, as well as my project
          development plans. Each quarter highlights key achievements and ongoing goals.
        </p>
  
        <div className="max-w-6xl mx-auto relative">
          {roadmapData.map((item, index) => (
            <div key={index} className="relative mb-8">
  
              {/* Línea vertical */}
              <div className="absolute top-0 left-8 sm:left-1/2 transform -translate-x-1/2 w-1 h-full bg-border" />
  
              {/* Contenido por Quarter */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-12">
                
                {/* Fecha */}
                <div className="flex-shrink-0 mb-2 sm:mb-0 mx-auto sm:mx-0">
                    <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary text-white font-bold text-base sm:text-lg shadow-lg">
                        {item.quarter}
                    </div>
                </div>
                    
                {/* Contenido */}
                <div className="w-full bg-panel  p-2 sm:p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
                    
                    {/* Academic */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-accent mb-3 sm:mb-4">
                        📘 Academic Knowledge & Certifications
                      </h3>
                      <ul className="space-y-3 sm:space-y-4">
                        {item.academic.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-start">
                            <span className="h-3 w-3 mt-1 bg-accent rounded-full mr-3"></span>
                            <span className="text-sm sm:text-base text-textSecondary">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
  
                    {/* Projects */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-3 sm:mb-4">
                        🚀 Project Development
                      </h3>
                      <ul className="space-y-3 sm:space-y-4">
                        {item.projects.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-start">
                            <span className="h-3 w-3 mt-1 bg-green-400 rounded-full mr-3"></span>
                            <span className="text-sm sm:text-base text-textSecondary">{goal}</span>
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
  