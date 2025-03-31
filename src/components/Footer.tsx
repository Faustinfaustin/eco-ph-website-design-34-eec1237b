
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-eco-green text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ECO-ph</h3>
            <p className="mb-4">
              Environment Conservation for Public Health (ECO-ph) is a Cameroonian non-governmental civil society organization dedicated to promoting sustainable environmental practices and community development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-eco-green-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-eco-green-light transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-eco-green-light transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-eco-green-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-eco-green-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-eco-green-light transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-eco-green-light transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-eco-green-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Bambui village, North West Region, Cameroon</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:info@eco-ph.org" className="hover:text-eco-green-light transition-colors">
                  info@eco-ph.org
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:+237000000000" className="hover:text-eco-green-light transition-colors">
                  +237 00 00 00 000
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Environment Conservation for Public Health (ECO-ph). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
