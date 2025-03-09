
import React, { useState } from 'react';

interface SettingsFormProps {
  systemInfo: {
    name: string;
    version: string;
    id: string;
    lastMaintenance: string;
  };
  displaySettings: {
    temperatureUnits: 'celsius' | 'fahrenheit';
    dateFormat: string;
    refreshRate: string;
  };
  dataRetention: {
    storePeriod: string;
    autoBackup: boolean;
    backupFrequency: string;
  };
  onSave: (settings: any) => void;
  onCancel: () => void;
}

const SettingsForm = ({ 
  systemInfo, 
  displaySettings, 
  dataRetention,
  onSave,
  onCancel
}: SettingsFormProps) => {
  const [tempUnits, setTempUnits] = useState<'celsius' | 'fahrenheit'>(displaySettings.temperatureUnits);
  const [dateFormat, setDateFormat] = useState(displaySettings.dateFormat);
  const [refreshRate, setRefreshRate] = useState(displaySettings.refreshRate);
  const [storePeriod, setStorePeriod] = useState(dataRetention.storePeriod);
  const [autoBackup, setAutoBackup] = useState(dataRetention.autoBackup);

  const handleSave = () => {
    onSave({
      displaySettings: {
        temperatureUnits: tempUnits,
        dateFormat,
        refreshRate,
      },
      dataRetention: {
        storePeriod,
        autoBackup,
        backupFrequency: dataRetention.backupFrequency,
      }
    });
  };

  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4">General Settings</h3>
        
        <div className="mb-6">
          <h4 className="font-medium mb-4">System Information</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-muted-foreground mb-1">System Name:</label>
              <input 
                type="text" 
                value={systemInfo.name} 
                readOnly 
                className="w-full px-4 py-2 rounded-md border bg-gray-50"
              />
            </div>
            
            <div>
              <label className="block text-sm text-muted-foreground mb-1">System Version:</label>
              <input 
                type="text" 
                value={systemInfo.version} 
                readOnly 
                className="w-full px-4 py-2 rounded-md border bg-gray-50"
              />
            </div>
            
            <div>
              <label className="block text-sm text-muted-foreground mb-1">System ID:</label>
              <input 
                type="text" 
                value={systemInfo.id} 
                readOnly 
                className="w-full px-4 py-2 rounded-md border bg-gray-50"
              />
            </div>
            
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Last Maintenance:</label>
              <input 
                type="text" 
                value={systemInfo.lastMaintenance} 
                readOnly 
                className="w-full px-4 py-2 rounded-md border bg-gray-50"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-medium mb-4">Display Settings</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Temperature Units:</label>
              <div className="flex gap-3">
                <button
                  type="button"
                  className={`px-6 py-2 rounded-md text-sm font-medium flex-1 ${tempUnits === 'celsius' ? 'bg-eco-blue text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                  onClick={() => setTempUnits('celsius')}
                >
                  Celsius
                </button>
                <button
                  type="button"
                  className={`px-6 py-2 rounded-md text-sm font-medium flex-1 ${tempUnits === 'fahrenheit' ? 'bg-eco-blue text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                  onClick={() => setTempUnits('fahrenheit')}
                >
                  Fahrenheit
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Date Format:</label>
              <select 
                className="w-full px-4 py-2 rounded-md border"
                value={dateFormat}
                onChange={(e) => setDateFormat(e.target.value)}
              >
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Dashboard Refresh Rate:</label>
              <select 
                className="w-full px-4 py-2 rounded-md border"
                value={refreshRate}
                onChange={(e) => setRefreshRate(e.target.value)}
              >
                <option value="10 seconds">10 seconds</option>
                <option value="30 seconds">30 seconds</option>
                <option value="1 minute">1 minute</option>
                <option value="5 minutes">5 minutes</option>
              </select>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-4">Data Retention</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Store Historical Data For:</label>
              <select 
                className="w-full px-4 py-2 rounded-md border"
                value={storePeriod}
                onChange={(e) => setStorePeriod(e.target.value)}
              >
                <option value="30 days">30 days</option>
                <option value="90 days">90 days</option>
                <option value="180 days">180 days</option>
                <option value="365 days">365 days</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Automatic Backup:</label>
              <div className="flex items-center mt-3">
                <div 
                  className={`w-14 h-7 rounded-full p-1 cursor-pointer transition-colors ${autoBackup ? 'bg-eco-green' : 'bg-gray-300'}`}
                  onClick={() => setAutoBackup(!autoBackup)}
                >
                  <div 
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${autoBackup ? 'translate-x-7' : ''}`} 
                  />
                </div>
                <span className="ml-3">{autoBackup ? 'Enabled (Weekly)' : 'Disabled'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end gap-3">
        <button 
          type="button" 
          onClick={handleSave}
          className="px-6 py-2 bg-eco-blue text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Save
        </button>
        <button 
          type="button" 
          onClick={onCancel}
          className="px-6 py-2 bg-gray-100 rounded-md font-medium hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SettingsForm;
