import { Link } from 'react-router-dom';
import { FaDumbbell, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaDumbbell className="text-accent text-3xl" />
              <div>
                <h3 className="text-xl font-heading font-bold text-white">NLF</h3>
                <p className="text-xs text-accent">Next Level Fitness</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Push beyond limits. Transform your body, mind, and life at Next Level Fitness.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com/nlf_gym"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/trainers" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Our Trainers
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link to="/transformations" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-4">Programs</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Weight Loss</li>
              <li className="text-gray-400 text-sm">Muscle Building</li>
              <li className="text-gray-400 text-sm">Strength Training</li>
              <li className="text-gray-400 text-sm">Personal Training</li>
              <li className="text-gray-400 text-sm">Group Classes</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
                <span>123 Fitness Street, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <FaPhone className="text-accent flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <FaEnvelope className="text-accent flex-shrink-0" />
                <span>info@nlfgym.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Next Level Fitness. All rights reserved. | Designed with 💪 for fitness enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
