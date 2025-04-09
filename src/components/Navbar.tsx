import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Overview', path: '/overview' },
  ];

  const projectLinks = [
    { name: 'Literacy Narrative', path: '/literacy-narrative' },
    { name: 'Rhetorical Analysis', path: '/rhetorical-analysis' },
    { name: 'Detailed Profile', path: '/detailed-profile' },
    { name: 'Remediation Project', path: '/remediation-project' },
    { name: 'Reflection', path: '/reflection' },
  ];

  return (
    <nav className="bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">Portfolio</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {mainLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-blue-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="relative group">
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                className="flex items-center hover:text-blue-300 transition-colors"
              >
                Projects
                {isProjectsOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
              </button>
              
              {isProjectsOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-blue-900 rounded-md shadow-lg py-1">
                  {projectLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 hover:bg-blue-800 transition-colors"
                      onClick={() => setIsProjectsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {mainLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="py-2">
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                className="flex items-center hover:text-blue-300 transition-colors"
              >
                Projects
                {isProjectsOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
              </button>
              {isProjectsOpen && (
                <div className="pl-4 mt-2">
                  {projectLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block py-2 hover:text-blue-300 transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setIsProjectsOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
