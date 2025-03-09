
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { AlertTriangle } from 'lucide-react';
import Slider from '../components/controls/Slider';
import ControlPanel from '../components/controls/ControlPanel';

const Controls = () => {
  const [controlMode, setControlMode] = useState('automatic');
  const [selectedZone, setSelectedZone] = useState('zone3');
  
  const controlModes = [
    { id: 'automatic', label: 'Automatic' },
    { id: 'manual', label: 'Manual' },
    { id: 'scheduled', label: 'Scheduled' },
    { id: 'maintenance', label: 'Maintenance' }
  ];
  
  const zones = [
    { id: 'zone1', label: 'Zone 1' },
    { id: 'zone2', label: 'Zone 2' },
    { id: 'zone3', label: 'Zone 3', status: 'alert' },
    { id: 'zone4', label: 'Zone 4' },
    { id: 'zone5', label: 'Zone 5' }
  ];
  
  // Transfer controls data
  const transferControls = [
    {
      id: 'flow-rate',
      label: 'Primary Flow Rate',
      value: 71.1,
      min: 0,
      max: 100,
      step: 1,
      additionalInfo: 'Target: 450 L/min | Current: 320 L/min'
    },
    {
      id: 'temp',
      label: 'Heat Exchanger Temperature',
      value: 38.6,
      min: 15,
      max: 45,
      step: 0.1,
      additionalInfo: 'Range: 15-45°C | Optimal: 35-40°C',
      colorScheme: 'amber'
    }
  ];
  
  // Distribution balance data
  const distributionData = [
    { id: 'zones-1-2', label: 'Zones 1-2', value: 35 },
    { id: 'zones-3-4', label: 'Zones 3-4', value: 15, colorScheme: 'red' },
    { id: 'zones-5-7', label: 'Zones 5-7', value: 50 },
    { id: 'zones-8-9', label: 'Zones 8-9', value: 0 }
  ];
  
  // Optimization priorities data
  const optimizationData = [
    { id: 'energy-efficiency', label: 'Energy Efficiency', value: 80 },
    { id: 'heat-usage', label: 'Heat Usage Optimization', value: 70 },
    { id: 'crop-growth', label: 'Crop Growth Conditions', value: 90 },
    { id: 'space-util', label: 'Space Utilization', value: 60 }
  ];
  
  // Zone-specific control data
  const zoneControls = {
    zone3: {
      temperature: {
        id: 'zone3-temp',
        label: 'Zone 3 Temperature Control',
        value: 31,
        min: 15,
        max: 35,
        step: 0.5,
        additionalInfo: 'Target: 24-27°C | Adjust to reduce temperature',
        colorScheme: 'red'
      },
      flow: {
        id: 'zone3-flow',
        label: 'Zone 3 Flow Control',
        value: 15,
        min: 0,
        max: 100,
        step: 1,
        additionalInfo: 'Flow reduced to lower temperature | Recommended: 10-20%',
        colorScheme: 'red'
      }
    }
  };

  return (
    <MainLayout
      title="System Controls"
      subtitle="Manage heat transfer flow and distribution settings"
    >
      {/* Alert Banner */}
      <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="text-red-500" />
          <span className="font-medium text-red-700">ZONE 3 ALERT - OVERRIDE ACTIVE</span>
          <span className="text-red-600 text-sm">Temperature exceeds safe threshold</span>
        </div>
      </div>
      
      {/* Control Mode Selector */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="font-medium text-gray-700 mr-3">Control Mode:</span>
          <div className="flex bg-gray-100 rounded-lg overflow-hidden">
            {controlModes.map(mode => (
              <button
                key={mode.id}
                className={`px-6 py-2 transition-colors ${
                  controlMode === mode.id 
                    ? 'bg-eco-blue text-white' 
                    : 'hover:bg-gray-200'
                }`}
                onClick={() => setControlMode(mode.id)}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Control Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Heat Transfer Controls */}
        <div className="glass-card p-5">
          <h2 className="text-xl font-semibold mb-5">Heat Transfer Controls</h2>
          
          {transferControls.map(control => (
            <div key={control.id} className="mb-6">
              <ControlPanel 
                label={control.label}
                value={control.value}
                min={control.min}
                max={control.max}
                step={control.step}
                additionalInfo={control.additionalInfo}
                colorScheme={control.colorScheme}
                unit={control.id === 'temp' ? '°C' : '%'}
                onChange={() => {}}
              />
            </div>
          ))}
          
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Distribution Balance</h3>
            
            <div className="space-y-4">
              {distributionData.map(item => (
                <div key={item.id} className="flex items-center">
                  <span className="w-24 text-sm">{item.label}</span>
                  <div className="flex-1 mx-3">
                    <Slider 
                      value={item.value} 
                      max={100}
                      colorScheme={item.colorScheme}
                      onChange={() => {}}
                    />
                  </div>
                  <span className="w-12 text-right">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* System Optimization */}
        <div className="glass-card p-5">
          <h2 className="text-xl font-semibold mb-5">System Optimization</h2>
          
          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-3">Optimization Priorities</h3>
            
            <div className="space-y-4">
              {optimizationData.map(item => (
                <div key={item.id} className="flex items-center">
                  <span className="w-52 text-sm">{item.label}</span>
                  <div className="flex-1 mx-3">
                    <Slider 
                      value={item.value} 
                      max={100}
                      onChange={() => {}}
                    />
                  </div>
                  <span className="w-12 text-right">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3 mt-6">
            <button className="bg-eco-blue text-white px-4 py-2 rounded-md hover:bg-eco-blue/90 transition-colors">
              Run Optimization
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
              Save as Preset
            </button>
          </div>
        </div>
      </div>
      
      {/* Zone-Specific Controls */}
      <div className="glass-card p-5">
        <h2 className="text-xl font-semibold mb-5">Zone-Specific Controls</h2>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {zones.map(zone => (
            <button
              key={zone.id}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedZone === zone.id
                  ? zone.status === 'alert'
                    ? 'bg-red-500 text-white'
                    : 'bg-eco-blue text-white'
                  : zone.status === 'alert'
                    ? 'border-2 border-red-300 text-red-700'
                    : 'border border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedZone(zone.id)}
            >
              {zone.label}
            </button>
          ))}
        </div>
        
        {selectedZone === 'zone3' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-red-200 bg-red-50 rounded-lg p-4">
              <ControlPanel 
                label={zoneControls.zone3.temperature.label}
                value={zoneControls.zone3.temperature.value}
                min={zoneControls.zone3.temperature.min}
                max={zoneControls.zone3.temperature.max}
                step={zoneControls.zone3.temperature.step}
                additionalInfo={zoneControls.zone3.temperature.additionalInfo}
                colorScheme={zoneControls.zone3.temperature.colorScheme}
                unit="°C"
                onChange={() => {}}
              />
            </div>
            
            <div className="border border-red-200 bg-red-50 rounded-lg p-4">
              <ControlPanel 
                label={zoneControls.zone3.flow.label}
                value={zoneControls.zone3.flow.value}
                min={zoneControls.zone3.flow.min}
                max={zoneControls.zone3.flow.max}
                step={zoneControls.zone3.flow.step}
                additionalInfo={zoneControls.zone3.flow.additionalInfo}
                colorScheme={zoneControls.zone3.flow.colorScheme}
                unit="% (Reduced)"
                onChange={() => {}}
              />
            </div>
          </div>
        )}
        
        <div className="flex gap-3 mt-6">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
            Apply Emergency Cooling
          </button>
          <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors">
            Divert Heat Flow
          </button>
          <button className="bg-eco-blue text-white px-4 py-2 rounded-md hover:bg-eco-blue/90 transition-colors">
            Apply Changes
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
            Cancel
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Controls;
