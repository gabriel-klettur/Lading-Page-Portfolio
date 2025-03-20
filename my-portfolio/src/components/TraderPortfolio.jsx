import imageTraderPortfolio_v1 from '../assets/IB_report_2023.png';
import imageTraderPortfolio_v2 from '../assets/IB_report_2024.png';

const TraderPortfolio = () => {
    const files = [
        {
            title: "Interactive Brokers Report 2023",
            previewImage: imageTraderPortfolio_v1,
            pdfLink: "/IBKR_Activity_Statement_2023.pdf"
        },
        {
            title: "Interactive Brokers Report 2024",
            previewImage: imageTraderPortfolio_v2,
            pdfLink: "/IBKR_Activity_Statement_2024.pdf"
        }
    ];

    return (
        <div className="bg-gray-50 py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Trader Portfolio</h1>
            </div>

            {/* Reportes en la parte superior */}
            <div className="flex justify-center px-6 sm:px-12 max-w-5xl mx-auto mb-12">
                <div className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white p-6">
                    
                    {/* Imágenes en Grid con Descarga de PDFs */}
                    <div className="grid grid-cols-2 gap-4">
                        {files.map((file, index) => (
                            <a 
                                key={index}
                                href={file.pdfLink} 
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative overflow-hidden rounded-lg block"
                            >
                                <img 
                                    src={file.previewImage} 
                                    alt={file.title}
                                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-md opacity-80">
                                    {file.title}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Descripción sobre el Trading */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900">📊 My Trading Approach</h2>
                <p className="text-lg text-gray-600 mt-4">
                    My trading methodology is based on a disciplined and structured approach that combines technical and fundamental analysis to optimize decision-making and long-term profitability.
                </p>

                {/* Trading Strategy & Timeframes */}
                <h2 className="text-xl font-semibold text-gray-900 mt-6">📊 Trading Strategy & Timeframes</h2>
                <p className="text-gray-700 mt-2">
                    I primarily engage in <strong>swing trading</strong>, executing trades over a timeframe of several days to weeks. 
                    The core of my strategy is based on multi-timeframe analysis:
                </p>
                <ul className="text-gray-700 list-disc pl-6 mt-2 text-left">
                    <li><strong>Execution Timeframes:</strong> 1H, 4H, and D (Daily)</li>
                    <li><strong>Trend Confirmation:</strong> Weekly & Monthly</li>
                </ul>

                {/* Technical Analysis */}
                <h2 className="text-xl font-semibold text-gray-900 mt-6">📈 Technical Analysis Approach</h2>
                <p className="text-gray-700 mt-2">
                    My decision-making process integrates multiple methodologies:
                </p>
                <ul className="text-gray-700 list-disc pl-6 mt-2 text-left">
                    <li><strong>Wyckoff Method:</strong> Identifying accumulation/distribution phases.</li>
                    <li><strong>Elliott Wave Theory:</strong> Understanding market cycles.</li>
                    <li><strong>Price Action & Volume:</strong> Candlestick structures & volume dynamics.</li>
                    <li><strong>Momentum & Strength Analysis:</strong> Measuring trend sustainability.</li>
                </ul>

                {/* Fundamental Analysis */}
                <h2 className="text-xl font-semibold text-gray-900 mt-6">🌍 Fundamental Analysis Approach</h2>
                <p className="text-gray-700 mt-2">
                    Beyond technicals, I incorporate <strong>fundamental analysis</strong> to assess long-term trade viability:
                </p>
                <ul className="text-gray-700 list-disc pl-6 mt-2 text-left">
                    <li><strong>Macroeconomic Factors:</strong> Interest rates, inflation, and monetary policy.</li>
                    <li><strong>Market Sentiment & News:</strong> Geopolitical events and institutional positioning.</li>
                    <li><strong>Industry & Sector Rotation:</strong> Identifying capital flows for macro alignment.</li>
                </ul>
            </div>
        </div>
    );
};

export default TraderPortfolio;
