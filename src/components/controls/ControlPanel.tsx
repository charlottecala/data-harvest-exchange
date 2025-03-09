
import React from 'react';
import { Gauge, Thermometer, LayoutGrid } from 'lucide-react';
import Slider from './Slider';

interface ControlsProps {
  selectedMode: 'automatic' | 'manual' | 'scheduled' | 'maintenance';
  onModeChange: (mode: 'automatic' | 'manual' | 'scheduled' | 'maintenance') => void;
  flowRate: {
    current: number;
    target: string;
    value: number;
    onChange: (value: number) => void;
  };
  heatExchanger: {
    current: number;
    range: string;
    optimal: string;
    value: number;
    onChange: (value: number) => void;
  };
  zoneDistribution: {
    zones: {
      name: string;
      value: string;
      color?: string;
    }[];
  };
}

const ControlPanel = ({ 
  selectedMode, 
  onModeChange, 
  flowRate, 
  heatExchanger,
  zoneDistribution
}: ControlsProps) => {
  const getModeButtonClass = (mode: string) => {
    const baseClass = "px-6 py-3 rounded-md text-sm font-medium transition-all duration-300";
    
    if (mode === selectedMode) {
      return `${baseClass} bg-eco-blue text-white`;
    }
    
    return `${baseClass} bg-gray-200 text-gray-700 hover:bg-gray-300`;
  };

  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="mb-6">
        <h3 className="font-medium text-lg mb-2">Control Mode:</h3>
        <div className="flex flex-wrap gap-3">
          <button
            className={getModeButtonClass('automatic')}
            onClick={() => onModeChange('automatic')}
          >
            Automatic
          </button>
          <button
            className={getModeButtonClass('manual')}
            onClick={() => onModeChange('manual')}
          >
            Manual
          </button>
          <button
            className={getModeButtonClass('scheduled')}
            onClick={() => onModeChange('scheduled')}
          >
            Scheduled
          </button>
          <button
            className={getModeButtonClass('maintenance')}
            onClick={() => onModeChange('maintenance')}
          >
            Maintenance
          </button>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="font-medium text-lg mb-4">Heat Transfer Controls</h3>
        
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Gauge className="h-5 w-5 text-eco-blue" />
              <h4 className="font-medium">Primary Flow Rate</h4>
              <span className="ml-auto font-medium">{flowRate.current}%</span>
            </div>
            <Slider 
              value={flowRate.value} 
              onChange={flowRate.onChange} 
              min={0} 
              max={100} 
              step={1}
              color="blue"
            />
            <p className="text-xs text-muted-foreground mt-2">Target: {flowRate.target}</p>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Thermometer className="h-5 w-5 text-eco-red" />
              <h4 className="font-medium">Heat Exchanger Temperature</h4>
              <span className="ml-auto font-medium">{heatExchanger.current}°C</span>
            </div>
            <Slider 
              value={heatExchanger.value} 
              onChange={heatExchanger.onChange} 
              min={10} 
              max={50} 
              step={0.1}
              color="amber"
            />
            <p className="text-xs text-muted-foreground mt-2">
              Range: {heatExchanger.range} | Optimal: {heatExchanger.optimal}
            </p>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LayoutGrid className="h-5 w-5 text-eco-blue" />
              <h4 className="font-medium">Distribution Balance</h4>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {zoneDistribution.zones.map((zone, index) => (
                <div key={index} className="border rounded-md p-3">
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
      </div>
    </div>
  );
};

export default ControlPanel;
