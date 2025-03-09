
import React from 'react';

interface Zone {
  id: number;
  name: string;
  crop: string;
  temperature: number;
  status: 'normal' | 'alert' | 'warning';
}

interface ZoneGridProps {
  zones: Zone[];
  onSelectZone: (zoneId: number) => void;
  selectedZoneId?: number;
}

const ZoneGrid = ({ zones, onSelectZone, selectedZoneId }: ZoneGridProps) => {
  const getZoneClass = (status: string, isSelected: boolean) => {
    let baseClass = "p-6 rounded-lg cursor-pointer transition-all duration-300 flex flex-col items-center justify-center text-center h-[180px]";
    
    if (isSelected) {
      baseClass += " transform scale-[1.03] shadow-md";
    }
    
    switch (status) {
      case 'normal':
        return `${baseClass} zone-normal`;
      case 'alert':
        return `${baseClass} zone-alert`;
      case 'warning':
        return `${baseClass} zone-warning`;
      default:
        return baseClass;
    }
  };

  const getTemperatureClass = (temp: number, status: string) => {
    if (status === 'alert') return 'text-eco-red';
    if (status === 'warning') return 'text-amber-500';
    return 'text-eco-green';
  };

  return (
    <div className="glass-card p-6 animate-fade-in">
      <h3 className="font-medium text-lg mb-6">Farm Layout</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 p-6 rounded-lg">
        {zones.map((zone) => (
          <div
            key={zone.id}
            className={getZoneClass(zone.status, zone.id === selectedZoneId)}
            onClick={() => onSelectZone(zone.id)}
          >
            <h3 className="text-xl font-medium mb-1">{zone.name}</h3>
            <p className="text-muted-foreground mb-2">{zone.crop}</p>
            <p className={`text-xl font-semibold ${getTemperatureClass(zone.temperature, zone.status)}`}>
              {zone.temperature}°C
              {zone.status === 'alert' && <span className="ml-2">⚠️</span>}
            </p>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-end mt-4 space-x-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-status-normal border border-eco-green/30 rounded mr-2"></div>
          <span className="text-sm">Normal</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-status-warning border border-amber-400/30 rounded mr-2"></div>
          <span className="text-sm">Monitoring</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-status-alert border border-eco-red/30 rounded mr-2"></div>
          <span className="text-sm">Alert</span>
        </div>
      </div>
    </div>
  );
};

export default ZoneGrid;
