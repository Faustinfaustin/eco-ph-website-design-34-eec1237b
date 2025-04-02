
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/65db17a5-a4b9-4a2c-b4b7-742ad009bd41.png"
              alt="ECO-ph Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-eco-green hover:text-eco-green-light transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-eco-green hover:text-eco-green-light transition-colors">
              About Us
            </Link>
            <Link to="/team" className="text-eco-green hover:text-eco-green-light transition-colors">
              Our Team
            </Link>
            <Link to="/projects" className="text-eco-green hover:text-eco-green-light transition-colors">
              Our Projects
            </Link>
            <Link to="/contact" className="text-eco-green hover:text-eco-green-light transition-colors">
              Contact
            </Link>
            <Link to="/donate" className="flex items-center text-eco-green hover:text-eco-green-light transition-colors">
              <Heart size={18} className="mr-1" /> Donate
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-eco-green hover:text-eco-green-light transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-eco-green hover:text-eco-green-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-eco-green hover:text-eco-green-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/team"
              className="text-eco-green hover:text-eco-green-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </Link>
            <Link
              to="/projects"
              className="text-eco-green hover:text-eco-green-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our Projects
            </Link>
            <Link
              to="/contact"
              className="text-eco-green hover:text-eco-green-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/donate"
              className="flex items-center text-eco-green hover:text-eco-green-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Heart size={18} className="mr-1" /> Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
