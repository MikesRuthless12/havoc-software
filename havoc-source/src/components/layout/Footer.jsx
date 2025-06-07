import { Link } from 'react-router-dom';
import { Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  // These would be dynamic in a real application
  const downloadCount = 1250;
  const visitorCount = 5678;

  return (
    <footer className="bg-black text-white p-6 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <Link to="/contact" className="block hover:text-gray-300 transition-colors">
              Contact Us
            </Link>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/havocsoftware" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors flex items-center"
              >
                <Facebook size={20} className="mr-1" />
                Facebook
              </a>
              <a 
                href="https://discord.gg/havocsoftware" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors flex items-center"
              >
                <MessageCircle size={20} className="mr-1" />
                Discord
              </a>
            </div>
          </div>
          
          {/* Download Counter */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Downloads</h3>
            <p>Copy That: <span className="font-bold">{downloadCount.toLocaleString()}</span></p>
          </div>
          
          {/* Visitor Counter */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Visitors</h3>
            <p>Total Visitors: <span className="font-bold">{visitorCount.toLocaleString()}</span></p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Havoc Software. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

