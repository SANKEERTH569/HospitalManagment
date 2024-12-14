import React from 'react';
import { Menu, Phone, Clock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="w-full">
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>Emergency: (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>24/7 Service</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-4">
              <Link 
                to="/login" 
                className="text-white hover:text-blue-200 transition-colors"
              >
                Patient Portal
              </Link>
              <span className="text-gray-400">|</span>
              <Link 
                to="/doctor-login" 
                className="text-white hover:text-blue-200 transition-colors"
              >
                Doctor Portal
              </Link>
            </div>
            <Link 
              to="/careers" 
              className="text-white hover:text-blue-200 transition-colors"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
      
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-900">
              MediCare
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/departments">Departments</NavLink>
              <NavLink to="/doctors">Doctors</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                Book Appointment
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="w-5 h-5" />
              </button>
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-blue-500 transition-colors"
    >
      {children}
    </Link>
  );
}