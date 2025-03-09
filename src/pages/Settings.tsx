
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { SettingsForm } from '../components/settings/SettingsForm';
import { ChevronRight, Settings as SettingsIcon, Sliders, BellRing, Users, Database, ArchiveRestore, RefreshCw, Globe, HelpCircle } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  // System information
  const systemInfo = {
    name: 'EcoHeat Transfer Control System',
    version: 'v2.3.5 (Released: Feb 12, 2025)',
    id: 'HTCS-DC2VF-872154',
    lastMaintenance: 'February 25, 2025'
  };
  
  // Display settings
  const [tempUnit, setTempUnit] = useState('celsius');
  const [dateFormat, setDateFormat] = useState('DD/MM/YYYY');
  const [refreshRate, setRefreshRate] = useState('30 seconds');
  
  // Data retention settings
  const [retentionPeriod, setRetentionPeriod] = useState('365 days');
  const [autoBackup, setAutoBackup] = useState(true);
  
  // Settings menu items
  const menuItems = [
    { id: 'general', label: 'General Settings', icon: SettingsIcon },
    { id: 'thresholds', label: 'System Thresholds', icon: Sliders },
    { id: 'notifications', label: 'Notifications', icon: BellRing },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'datasources', label: 'Data Sources', icon: Database },
    { id: 'backup', label: 'Backup & Restore', icon: ArchiveRestore },
    { id: 'updates', label: 'System Updates', icon: RefreshCw },
    { id: 'api', label: 'API Integration', icon: Globe },
    { id: 'help', label: 'Help & Support', icon: HelpCircle }
  ];

  return (
    <MainLayout
      title="System Settings"
      subtitle="Configure system parameters and user preferences"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="md:col-span-1">
          <div className="glass-card p-0 overflow-hidden">
            <ul className="divide-y divide-gray-100">
              {menuItems.map(item => (
                <li key={item.id}>
                  <button
                    className={`w-full text-left py-3.5 px-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                      activeTab === item.id ? 'bg-blue-50 text-eco-blue font-medium' : ''
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <div className="flex items-center">
                      <item.icon className={`h-5 w-5 mr-3 ${activeTab === item.id ? 'text-eco-blue' : 'text-gray-500'}`} />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Right Content Area */}
        <div className="md:col-span-3">
          <div className="glass-card p-6">
            {activeTab === 'general' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">General Settings</h2>
                
                <div className="space-y-6">
                  {/* System Information Section */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">System Information</h3>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2">
                        <div className="text-gray-600">System Name:</div>
                        <div className="md:col-span-2">
                          <input 
                            type="text" 
                            value={systemInfo.name}
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            onChange={() => {}}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2">
                        <div className="text-gray-600">System Version:</div>
                        <div className="md:col-span-2 text-gray-800">{systemInfo.version}</div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2">
                        <div className="text-gray-600">System ID:</div>
                        <div className="md:col-span-2 text-gray-800">{systemInfo.id}</div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2">
                        <div className="text-gray-600">Last Maintenance:</div>
                        <div className="md:col-span-2 text-gray-800">{systemInfo.lastMaintenance}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Display Settings Section */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Display Settings</h3>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 items-center">
                        <div className="text-gray-600">Temperature Units:</div>
                        <div className="md:col-span-2">
                          <div className="flex items-center">
                            <button 
                              className={`px-5 py-2 rounded-l-md border border-r-0 ${
                                tempUnit === 'celsius' 
                                  ? 'bg-eco-blue text-white border-eco-blue' 
                                  : 'bg-white border-gray-300'
                              }`}
                              onClick={() => setTempUnit('celsius')}
                            >
                              Celsius
                            </button>
                            <button 
                              className={`px-5 py-2 rounded-r-md border ${
                                tempUnit === 'fahrenheit' 
                                  ? 'bg-eco-blue text-white border-eco-blue' 
                                  : 'bg-white border-gray-300'
                              }`}
                              onClick={() => setTempUnit('fahrenheit')}
                            >
                              Fahrenheit
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 items-center">
                        <div className="text-gray-600">Date Format:</div>
                        <div className="md:col-span-2">
                          <div className="relative">
                            <select 
                              value={dateFormat}
                              onChange={(e) => setDateFormat(e.target.value)}
                              className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
                            >
                              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                            </select>
                            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 rotate-90" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 items-center">
                        <div className="text-gray-600">Dashboard Refresh Rate:</div>
                        <div className="md:col-span-2">
                          <div className="relative">
                            <select 
                              value={refreshRate}
                              onChange={(e) => setRefreshRate(e.target.value)}
                              className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
                            >
                              <option value="10 seconds">10 seconds</option>
                              <option value="30 seconds">30 seconds</option>
                              <option value="1 minute">1 minute</option>
                              <option value="5 minutes">5 minutes</option>
                            </select>
                            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 rotate-90" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Data Retention Settings */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Data Retention</h3>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 items-center">
                        <div className="text-gray-600">Store Historical Data For:</div>
                        <div className="md:col-span-2">
                          <div className="relative">
                            <select 
                              value={retentionPeriod}
                              onChange={(e) => setRetentionPeriod(e.target.value)}
                              className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
                            >
                              <option value="30 days">30 days</option>
                              <option value="90 days">90 days</option>
                              <option value="180 days">180 days</option>
                              <option value="365 days">365 days</option>
                            </select>
                            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 rotate-90" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 items-center">
                        <div className="text-gray-600">Automatic Backup:</div>
                        <div className="md:col-span-2 flex items-center">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              checked={autoBackup} 
                              onChange={() => setAutoBackup(!autoBackup)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-eco-green"></div>
                          </label>
                          <span className="ml-3 text-gray-700">{autoBackup ? 'Enabled (Weekly)' : 'Disabled'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex justify-end mt-8 space-x-4">
                  <button className="px-6 py-2 bg-eco-blue text-white rounded-md hover:bg-eco-blue/90 transition-colors">
                    Save
                  </button>
                  <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            )}
            
            {activeTab !== 'general' && (
              <div className="min-h-[400px] flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  {(() => {
                    const item = menuItems.find(item => item.id === activeTab);
                    if (item) {
                      const Icon = item.icon;
                      return <Icon className="h-8 w-8 text-eco-blue" />;
                    }
                    return null;
                  })()}
                </div>
                <h3 className="text-xl font-medium mb-2">{menuItems.find(item => item.id === activeTab)?.label}</h3>
                <p className="text-gray-600">This section is coming soon. The current prototype focuses on the core General Settings.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;
