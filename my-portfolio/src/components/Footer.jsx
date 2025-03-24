import mailIcon from '../assets/mail.svg';
import callIcon from '../assets/call.svg';
import homeIcon from '../assets/home.svg';
import linkIcon from '../assets/link.svg';
import shareIcon from '../assets/share.svg';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-8 px-4 sm:px-8 border-t border-gray-800 mt-12">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-sm text-gray-400">Alexis Gabriel Roca</p>

        {/* Datos de contacto */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <img src={mailIcon} alt="email" className="w-5 h-5" />
            <span>gabriel.astudillo.roca@gmail.com</span>
          </div>
          <span className="hidden sm:block">•</span>
          <div className="flex items-center gap-2">
            <img src={callIcon} alt="phone" className="w-5 h-5" />
            <span>+354 625 7455</span>
          </div>
          <span className="hidden sm:block">•</span>
          <div className="flex items-center gap-2">
            <img src={homeIcon} alt="location" className="w-5 h-5" />
            <span>Reykjavik, Iceland</span>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center gap-6 text-gray-400 mt-2 text-sm">
          <a
            href="https://github.com/gabriel-klettur"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <img src={shareIcon} alt="GitHub" className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alexis-gabriel-roca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <img src={linkIcon} alt="LinkedIn" className="w-5 h-5" />
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Gabriel Roca. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
