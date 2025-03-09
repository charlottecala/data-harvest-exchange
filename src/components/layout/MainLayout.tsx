
import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, Bell } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-eco-blue text-white shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="text-xl font-bold">EcoHeat Transfer Control System</div>
          
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Dashboard
            </NavLink>
            <NavLink to="/heat-sources" className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Heat Sources
            </NavLink>
            <NavLink to="/farm-zones" className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Farm Zones
            </NavLink>
            <NavLink to="/controls" className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Controls
            </NavLink>
            <NavLink to="/analytics" className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Analytics
            </NavLink>
            <NavLink to="/settings" className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Settings
            </NavLink>
          </nav>
          
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-white/10">
              <Bell size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-white/10 ml-2">
              <User size={20} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Page Content */}
      <main className="flex-1 p-4 md:p-6">
        <div className="container mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">{title}</h1>
            {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
          </div>
          
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
