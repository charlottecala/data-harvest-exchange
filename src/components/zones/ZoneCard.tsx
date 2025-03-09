
import React from 'react';

interface ZoneCardProps {
  zone: {
    id: string;
    name: string;
    crop: string;
    temperature: number;
    humidity: number;
    spaceUsage: number;
    status: 'normal' | 'alert' | 'warning';
  };
  isDetailed?: boolean;
}

const ZoneCard = ({ zone, isDetailed }: ZoneCardProps) => {
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
    <div className={`p-4 ${isDetailed ? 'border border-gray-200 rounded-lg' : ''}`}>
      <h3 className="font-medium text-xl mb-2">{zone.name}</h3>
      
      <div className="space-y-4">
        <div>
          <p className="text-muted-foreground mb-1">Current Crop: {zone.crop}</p>
          <p className="mb-2">Crop Health: <span className="font-medium">64%</span></p>
        </div>
        
        {isDetailed && (
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Temperature</span>
                <span className={`text-sm font-medium ${zone.temperature > 30 ? 'text-eco-red' : 'text-eco-green'}`}>
                  {zone.temperature}°C
                </span>
              </div>
              <div className="progress-bar">
                <div 
                  className={`progress-value ${getProgressColor(zone.temperature, 'temperature')}`}
                  style={{ width: `${(zone.temperature / 40) * 100}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Target: 24-27°C</p>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Humidity</span>
                <span className={`text-sm font-medium ${zone.humidity < 50 ? 'text-eco-red' : 'text-blue-500'}`}>
                  {zone.humidity}%
                </span>
              </div>
              <div className="progress-bar">
                <div 
                  className={`progress-value ${getProgressColor(zone.humidity, 'humidity')}`}
                  style={{ width: `${zone.humidity}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Target: 65-70%</p>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Space Utilization</span>
                <span className="text-sm font-medium">{zone.spaceUsage}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className={`progress-value ${getProgressColor(zone.spaceUsage, 'space')}`}
                  style={{ width: `${zone.spaceUsage}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Target: 75%+</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZoneCard;
