
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import ZoneGrid from '../components/zones/ZoneGrid';
import ZoneCard from '../components/zones/ZoneCard';
import ZoneMetricsTable from '../components/zones/ZoneMetricsTable';
import { AlertTriangle, InfoIcon, AlertCircle } from 'lucide-react';

const FarmZones = () => {
  const [selectedZone, setSelectedZone] = useState('zone3');
  
  // Zone data
  const zones = [
    {
      id: 'zone1',
      name: 'Zone 1',
      crop: 'Tomatoes',
      temperature: 26,
      humidity: 68,
      spaceUsage: 80,
      status: 'normal' as const
    },
    {
      id: 'zone2',
      name: 'Zone 2',
      crop: 'Lettuce',
      temperature: 24,
      humidity: 72,
      spaceUsage: 70,
      status: 'normal' as const
    },
    {
      id: 'zone3',
      name: 'Zone 3',
      crop: 'Strawberries',
      temperature: 31,
      humidity: 60,
      spaceUsage: 60,
      status: 'alert' as const
    },
    {
      id: 'zone4',
      name: 'Zone 4',
      crop: 'Peppers',
      temperature: 25,
      humidity: 65,
      spaceUsage: 90,
      status: 'normal' as const
    },
    {
      id: 'zone5',
      name: 'Zone 5',
      crop: 'Basil',
      temperature: 27,
      humidity: 70,
      spaceUsage: 50,
      status: 'normal' as const
    }
  ];
  
  // Zone metrics for table
  const zoneMetrics = zones.map(zone => ({
    id: zone.id,
    name: zone.name,
    temperature: `${zone.temperature}°C`,
    humidity: `${zone.humidity}%`,
    spaceUsage: `${zone.spaceUsage}%`,
    status: zone.status
  }));
  
  // Optimization recommendations
  const recommendations = [
    {
      id: 'rec1',
      type: 'critical',
      title: 'Critical: Reduce Zone 3 temperature below 28°C',
      description: 'Adjust damper settings to redirect airflow from Zone 3 to Zone 5'
    },
    {
      id: 'rec2',
      type: 'warning',
      title: 'Recommended: Replace strawberries in Zone 3',
      description: 'Consider replacing with heat-resistant herbs that thrive in 28-32°C environments'
    },
    {
      id: 'rec3',
      type: 'info',
      title: 'Efficiency: Increase Zone 5 planting density',
      description: 'Current density (50%) can be increased to 80% to maximize space utilization'
    }
  ];
  
  // Selected zone details
  const getSelectedZoneData = () => {
    return zones.find(zone => zone.id === selectedZone);
  };
  
  const zoneData = getSelectedZoneData();

  const handleAdjustHeat = () => {
    console.log('Adjusting heat for zone:', selectedZone);
    // Logic to adjust heat would go here
  };

  const handleViewDetails = () => {
    console.log('Viewing details for zone:', selectedZone);
    // Logic to view details would go here
  };

  return (
    <MainLayout
      title="Farm Zones Management"
      subtitle="Monitor and optimize growing zones in the vertical farm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Farm Layout */}
        <div className="lg:col-span-2">
          <div className="glass-card p-5 mb-6">
            <h2 className="section-title">Farm Layout</h2>
            <ZoneGrid
              zones={zones}
              selectedZone={selectedZone}
              onSelectZone={setSelectedZone}
            />
          </div>
          
          {/* Zone Performance Metrics Table */}
          <div className="glass-card p-5">
            <h2 className="section-title">Zone Performance Metrics</h2>
            <ZoneMetricsTable
              metrics={zoneMetrics}
              onSelectZone={setSelectedZone}
            />
          </div>
        </div>
        
        {/* Right Column - Zone Details & Recommendations */}
        <div className="space-y-6">
          {/* Zone Details */}
          <div className="glass-card p-5">
            <h2 className="section-title">Zone Details</h2>
            {!zoneData ? (
              <p className="text-gray-600">Select a zone on the left</p>
            ) : (
              <div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{zoneData.name}</h3>
                  <p className="mb-1">Current Crop: <span className="font-medium">{zoneData.crop}</span></p>
                  <p className="mb-3">Crop Health: <span className="font-medium">64%</span></p>
                  
                  <div className="space-y-4 my-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Temperature</span>
                        <span className={`text-sm font-medium ${zoneData.temperature > 30 ? 'text-eco-red' : 'text-eco-green'}`}>
                          {zoneData.temperature}°C
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                        <div 
                          className={`h-full ${zoneData.temperature > 30 ? 'bg-eco-red' : 'bg-eco-green'}`}
                          style={{ width: `${(zoneData.temperature / 40) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Target: 24-27°C</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Humidity</span>
                        <span className={`text-sm font-medium ${zoneData.humidity < 50 ? 'text-eco-red' : 'text-blue-500'}`}>
                          {zoneData.humidity}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                        <div 
                          className={`h-full ${zoneData.humidity < 50 ? 'bg-eco-red' : 'bg-blue-500'}`}
                          style={{ width: `${zoneData.humidity}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Target: 65-70%</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Space Utilization</span>
                        <span className="text-sm font-medium">{zoneData.spaceUsage}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                        <div 
                          className={`h-full ${zoneData.spaceUsage < 60 ? 'bg-amber-400' : 'bg-eco-green'}`}
                          style={{ width: `${zoneData.spaceUsage}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Target: 75%+</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex gap-3">
                    <button 
                      onClick={handleAdjustHeat}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        zoneData.status === 'alert'
                          ? 'bg-red-500 text-white hover:bg-red-600'
                          : 'bg-eco-blue text-white hover:bg-eco-blue/90'
                      }`}
                    >
                      Adjust Heat
                    </button>
                    <button 
                      onClick={handleViewDetails}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Optimization Recommendations */}
          <div className="glass-card p-5">
            <h2 className="section-title">Optimization Recommendations</h2>
            
            <div className="space-y-3">
              {recommendations.map(rec => (
                <div 
                  key={rec.id} 
                  className={`p-3 rounded-lg ${
                    rec.type === 'critical'
                      ? 'bg-red-50 border border-red-200'
                      : rec.type === 'warning'
                        ? 'bg-amber-50 border border-amber-200'
                        : 'bg-green-50 border border-green-200'
                  }`}
                >
                  <div className="flex items-start">
                    {rec.type === 'critical' ? (
                      <AlertCircle size={16} className="text-red-500 mt-0.5 mr-1.5 flex-shrink-0" />
                    ) : rec.type === 'warning' ? (
                      <AlertTriangle size={16} className="text-amber-500 mt-0.5 mr-1.5 flex-shrink-0" />
                    ) : (
                      <InfoIcon size={16} className="text-green-500 mt-0.5 mr-1.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className={`font-medium ${
                        rec.type === 'critical'
                          ? 'text-red-700'
                          : rec.type === 'warning'
                            ? 'text-amber-700'
                            : 'text-green-700'
                      }`}>
                        {rec.title}
                      </p>
                      <p className="text-sm mt-0.5 text-gray-700">{rec.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FarmZones;
