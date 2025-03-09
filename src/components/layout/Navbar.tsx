
import { Link, useLocation } from 'react-router-dom';
import { Settings, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };
  
  return (
    <nav className="bg-eco-blue text-white shadow-md w-full transition-all duration-300 animate-fade-in">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">EcoHeat Transfer Control System</h1>
        </div>
        
        <div className="flex items-center space-x-1">
          <Link to="/" className={`nav-link ${isActive('/')}`}>
            Dashboard
          </Link>
          <Link to="/heat-sources" className={`nav-link ${isActive('/heat-sources')}`}>
            Heat Sources
          </Link>
          <Link to="/farm-zones" className={`nav-link ${isActive('/farm-zones')}`}>
            Farm Zones
          </Link>
          <Link to="/controls" className={`nav-link ${isActive('/controls')}`}>
            Controls
          </Link>
          <Link to="/analytics" className={`nav-link ${isActive('/analytics')}`}>
            Analytics
          </Link>
          <Link to="/settings" className={`nav-link ${isActive('/settings')}`}>
            Settings
          </Link>
        </div>
        
        <div className="flex items-center">
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
