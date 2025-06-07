import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import havocLogo from '../../assets/havoc-icon.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="mr-2">
            <img src={havocLogo} alt="Havoc Software Logo" className="h-8 w-8" />
          </div>
          <h1 className="text-xl font-bold">Havoc Software</h1>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <Link to="/downloads" className="hover:text-gray-300 transition-colors">Downloads</Link>
          <Link to="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-2">
          <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <Link to="/downloads" className="hover:text-gray-300 transition-colors">Downloads</Link>
          <Link to="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

