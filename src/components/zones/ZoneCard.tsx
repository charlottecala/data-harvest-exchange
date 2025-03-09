
import React from 'react';

interface ZoneDetailProps {
  zone: {
    id: number;
    name: string;
    crop: string;
    cropHealth: number;
    temperature: {
      current: number;
      target: string;
    };
    humidity: {
      current: number;
      target: string;
    };
    spaceUtilization: {
      current: number;
      target: string;
    };
    status: 'normal' | 'alert' | 'warning';
  };
  onAdjustHeat: () => void;
  onViewDetails: () => void;
}

const ZoneCard = ({ zone, onAdjustHeat, onViewDetails }: ZoneDetailProps) => {
  const getProgressColor = (value: number, type: 'temperature' | 'humidity' | 'space') => {
    if (type === 'temperature') {
      return value > 30 ? 'bg-eco-red' : 'bg-eco-green';
    } else if (type === 'humidity') {
      return value < 50 ? 'bg-eco-red' : 'bg-blue-500';
    } else {
      return value < 60 ? 'bg-amber-400' : 'bg-eco-green';
    }
  };

  return (
    <div className={`glass-card p-6 animate-fade-in border-l-4 ${zone.status === 'alert' ? 'border-l-eco-red' : zone.status === 'warning' ? 'border-l-amber-400' : 'border-l-eco-green'}`}>
      <h3 className="font-medium text-xl mb-4">{zone.name}</h3>
      
      <div className="space-y-6">
        <div>
          <p className="text-muted-foreground mb-2">Current Crop: {zone.crop}</p>
          <p className="mb-2">Crop Health: <span className="font-medium">{zone.cropHealth}%</span></p>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Temperature</span>
              <span className={`text-sm font-medium ${zone.temperature.current > 30 ? 'text-eco-red' : 'text-eco-green'}`}>
                {zone.temperature.current}°C
              </span>
            </div>
            <div className="progress-bar">
              <div 
                className={`progress-value ${getProgressColor(zone.temperature.current, 'temperature')}`}
                style={{ width: `${(zone.temperature.current / 40) * 100}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Target: {zone.temperature.target}</p>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Humidity</span>
              <span className={`text-sm font-medium ${zone.humidity.current < 50 ? 'text-eco-red' : 'text-blue-500'}`}>
                {zone.humidity.current}%
              </span>
            </div>
            <div className="progress-bar">
              <div 
                className={`progress-value ${getProgressColor(zone.humidity.current, 'humidity')}`}
                style={{ width: `${zone.humidity.current}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Target: {zone.humidity.target}</p>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Space Utilization</span>
              <span className="text-sm font-medium">{zone.spaceUtilization.current}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className={`progress-value ${getProgressColor(zone.spaceUtilization.current, 'space')}`}
                style={{ width: `${zone.spaceUtilization.current}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Target: {zone.spaceUtilization.target}</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={onAdjustHeat}
            className="px-4 py-2 bg-eco-red text-white rounded-md text-sm font-medium hover:bg-red-600 transition-colors flex-1"
          >
            Adjust Heat
          </button>
          <button 
            onClick={onViewDetails}
            className="px-4 py-2 bg-eco-blue text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex-1"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZoneCard;
