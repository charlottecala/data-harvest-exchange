
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
      status: 'normal'
    },
    {
      id: 'zone2',
      name: 'Zone 2',
      crop: 'Lettuce',
      temperature: 24,
      humidity: 72,
      spaceUsage: 70,
      status: 'normal'
    },
    {
      id: 'zone3',
      name: 'Zone 3',
      crop: 'Strawberries',
      temperature: 31,
      humidity: 60,
      spaceUsage: 60,
      status: 'alert'
    },
    {
      id: 'zone4',
      name: 'Zone 4',
      crop: 'Peppers',
      temperature: 25,
      humidity: 65,
      spaceUsage: 90,
      status: 'normal'
    },
    {
      id: 'zone5',
      name: 'Zone 5',
      crop: 'Basil',
      temperature: 27,
      humidity: 70,
      spaceUsage: 50,
      status: 'normal'
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
            
            <div className="bg-gray-100 rounded-lg p-4">
              <ZoneGrid
                zones={zones}
                selectedZone={selectedZone}
                onSelectZone={setSelectedZone}
              />
              
              <div className="flex justify-end mt-4 space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-100 border border-green-300 rounded mr-2"></div>
                  <span>Normal</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-100 border border-blue-300 rounded mr-2"></div>
                  <span>Monitoring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-100 border border-red-300 rounded mr-2"></div>
                  <span>Alert</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Zone Performance Metrics Table */}
          <div className="glass-card p-5">
            <h2 className="section-title">Zone Performance Metrics</h2>
            <ZoneMetricsTable data={zoneMetrics} />
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
                <ZoneCard
                  zone={zoneData}
                  isDetailed={true}
                />
                
                <div className="mt-4 flex gap-3">
                  <button 
                    className={`px-4 py-2 rounded-md transition-colors ${
                      zoneData.status === 'alert'
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-eco-blue text-white hover:bg-eco-blue/90'
                    }`}
                  >
                    Adjust Heat
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                    View Details
                  </button>
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
                  <div className="flex items-start mb-1">
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
