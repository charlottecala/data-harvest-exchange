
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { AlertTriangle } from 'lucide-react';
import Slider from '../components/controls/Slider';
import ControlPanel from '../components/controls/ControlPanel';

const Controls = () => {
  const [controlMode, setControlMode] = useState<'automatic' | 'manual' | 'scheduled' | 'maintenance'>('automatic');
  const [selectedZone, setSelectedZone] = useState('zone3');
  const [flowRateValue, setFlowRateValue] = useState(71.1);
  const [heatExchangerValue, setHeatExchangerValue] = useState(38.6);
  const [zone3TempValue, setZone3TempValue] = useState(31);
  const [zone3FlowValue, setZone3FlowValue] = useState(15);
  
  // Optimization priorities state
  const [energyEfficiency, setEnergyEfficiency] = useState(80);
  const [heatUsage, setHeatUsage] = useState(70);
  const [cropGrowth, setCropGrowth] = useState(90);
  const [spaceUtil, setSpaceUtil] = useState(60);
  
  const zones = [
    { id: 'zone1', label: 'Zone 1' },
    { id: 'zone2', label: 'Zone 2' },
    { id: 'zone3', label: 'Zone 3', status: 'alert' },
    { id: 'zone4', label: 'Zone 4' },
    { id: 'zone5', label: 'Zone 5' }
  ];
  
  // Zone distribution data
  const zoneDistribution = {
    zones: [
      { name: 'Zones 1-2', value: '35%' },
      { name: 'Zones 3-4', value: '15%', color: 'red' },
      { name: 'Zones 5-7', value: '50%' },
      { name: 'Zones 8-9', value: '0%' }
    ]
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
      <div className="mb-6 glass-card p-6">
        <div className="flex items-center">
          <span className="font-medium text-gray-700 mr-4">Control Mode:</span>
          <div className="flex">
            <button
              className={`px-8 py-3 transition-colors ${
                controlMode === 'automatic' 
                  ? 'bg-eco-blue text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setControlMode('automatic')}
            >
              Automatic
            </button>
            <button
              className={`px-8 py-3 transition-colors ${
                controlMode === 'manual' 
                  ? 'bg-eco-blue text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setControlMode('manual')}
            >
              Manual
            </button>
            <button
              className={`px-8 py-3 transition-colors ${
                controlMode === 'scheduled' 
                  ? 'bg-eco-blue text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setControlMode('scheduled')}
            >
              Scheduled
            </button>
            <button
              className={`px-8 py-3 transition-colors ${
                controlMode === 'maintenance' 
                  ? 'bg-eco-blue text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setControlMode('maintenance')}
            >
              Maintenance
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Control Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Heat Transfer Controls */}
        <div className="glass-card p-5">
          <h2 className="text-xl font-semibold mb-5">Heat Transfer Controls</h2>
          
          <div className="mb-6">
            <h3 className="font-medium mb-4">Primary Flow Rate</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Target: 450 L/min | Current: 320 L/min</span>
              <span className="font-medium">{flowRateValue.toFixed(1)}%</span>
            </div>
            <Slider 
              value={flowRateValue} 
              onChange={setFlowRateValue} 
              min={0} 
              max={100} 
              step={0.1}
              color="blue"
            />
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-4">Heat Exchanger Temperature</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Range: 15-45°C | Optimal: 35-40°C</span>
              <span className="font-medium">{heatExchangerValue.toFixed(1)}°C</span>
            </div>
            <Slider 
              value={heatExchangerValue} 
              onChange={setHeatExchangerValue} 
              min={15} 
              max={45} 
              step={0.1}
              color="amber"
            />
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Distribution Balance</h3>
            
            <div className="space-y-4">
              {zoneDistribution.zones.map((zone, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{zone.name}</span>
                    <span className="text-sm">{zone.value}</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className={`progress-value ${zone.color === 'red' ? 'bg-eco-red' : 'bg-blue-500'}`}
                      style={{ width: zone.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* System Optimization */}
        <div className="glass-card p-5">
          <h2 className="text-xl font-semibold mb-5">System Optimization</h2>
          
          <div className="mb-6">
            <h3 className="font-medium mb-4">Optimization Priorities</h3>
            
            <div className="space-y-4">
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Energy Efficiency</span>
                  <span className="text-sm">{energyEfficiency}%</span>
                </div>
                <Slider 
                  value={energyEfficiency} 
                  onChange={setEnergyEfficiency} 
                  min={0} 
                  max={100} 
                  step={1}
                  color="blue"
                />
              </div>
              
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Heat Usage Optimization</span>
                  <span className="text-sm">{heatUsage}%</span>
                </div>
                <Slider 
                  value={heatUsage} 
                  onChange={setHeatUsage} 
                  min={0} 
                  max={100} 
                  step={1}
                  color="blue"
                />
              </div>
              
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Crop Growth Conditions</span>
                  <span className="text-sm">{cropGrowth}%</span>
                </div>
                <Slider 
                  value={cropGrowth} 
                  onChange={setCropGrowth} 
                  min={0} 
                  max={100} 
                  step={1}
                  color="blue"
                />
              </div>
              
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Space Utilization</span>
                  <span className="text-sm">{spaceUtil}%</span>
                </div>
                <Slider 
                  value={spaceUtil} 
                  onChange={setSpaceUtil} 
                  min={0} 
                  max={100} 
                  step={1}
                  color="blue"
                />
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 mt-8">
            <button className="bg-eco-blue text-white px-6 py-3 rounded-md hover:bg-eco-blue/90 transition-colors">
              Run Optimization
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
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
              className={`px-6 py-3 rounded-md transition-colors ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-red-200 bg-red-50 rounded-lg p-4">
              <h3 className="font-medium text-red-700 mb-3">Zone 3 Temperature Control</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Target: 24-27°C | Adjust to reduce temperature</span>
                <span className="font-medium text-red-700">{zone3TempValue}°C</span>
              </div>
              <Slider 
                value={zone3TempValue} 
                onChange={setZone3TempValue} 
                min={15} 
                max={35} 
                step={0.5}
                color="red"
              />
            </div>
            
            <div className="border border-red-200 bg-red-50 rounded-lg p-4">
              <h3 className="font-medium text-red-700 mb-3">Zone 3 Flow Control</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Flow reduced to lower temperature | Recommended: 10-20%</span>
                <span className="font-medium text-red-700">{zone3FlowValue}% (Reduced)</span>
              </div>
              <Slider 
                value={zone3FlowValue} 
                onChange={setZone3FlowValue} 
                min={0} 
                max={100} 
                step={1}
                color="red"
              />
            </div>
          </div>
        )}
        
        <div className="flex gap-3 mt-6">
          <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors">
            Apply Emergency Cooling
          </button>
          <button className="bg-amber-500 text-white px-6 py-3 rounded-md hover:bg-amber-600 transition-colors">
            Divert Heat Flow
          </button>
          <button className="bg-eco-blue text-white px-6 py-3 rounded-md hover:bg-eco-blue/90 transition-colors">
            Apply Changes
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
            Cancel
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Controls;
