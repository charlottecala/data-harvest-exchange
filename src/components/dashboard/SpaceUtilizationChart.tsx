
import React from 'react';

interface SpaceUtilizationProps {
  zones: {
    id: number;
    name: string;
    utilization: number;
  }[];
}

const SpaceUtilizationChart = ({ zones }: SpaceUtilizationProps) => {
  const getUtilizationColor = (value: number) => {
    if (value >= 80) return 'bg-eco-green';
    if (value >= 70) return 'bg-blue-500';
    if (value >= 60) return 'bg-amber-400';
    return 'bg-eco-red';
  };

  return (
    <div className="glass-card p-6 animate-fade-in">
      <h3 className="font-medium text-lg mb-4">Space Utilization by Zone</h3>
      
      <div className="space-y-4">
        {zones.map((zone) => (
          <div key={zone.id} className="space-y-1">
            <div className="flex justify-between items-center text-sm">
              <span>{zone.name}</span>
              <span className="font-medium">{zone.utilization}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className={`progress-value ${getUtilizationColor(zone.utilization)}`}
                style={{ width: `${zone.utilization}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaceUtilizationChart;
