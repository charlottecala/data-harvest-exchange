
import React from 'react';

interface Zone {
  id: string;
  name: string;
  crop: string;
  temperature: number;
  status: 'normal' | 'alert' | 'warning';
}

interface ZoneGridProps {
  zones: Zone[];
  onSelectZone: (zoneId: string) => void;
  selectedZone?: string;
}

const ZoneGrid = ({ zones, onSelectZone, selectedZone }: ZoneGridProps) => {
  const getZoneClass = (status: string, isSelected: boolean) => {
    let baseClass = "p-6 rounded-lg cursor-pointer transition-all duration-300 flex flex-col items-center justify-center text-center h-[180px]";
    
    if (isSelected) {
      baseClass += " transform scale-[1.03] shadow-md";
    }
    
    switch (status) {
      case 'normal':
        return `${baseClass} bg-green-100 border-2 border-green-300`;
      case 'alert':
        return `${baseClass} bg-red-100 border-2 border-red-300`;
      case 'warning':
        return `${baseClass} bg-blue-100 border-2 border-blue-300`;
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
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {zones.map((zone) => (
          <div
            key={zone.id}
            className={getZoneClass(zone.status, zone.id === selectedZone)}
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
          <div className="w-4 h-4 bg-green-100 border-2 border-green-300 rounded mr-2"></div>
          <span className="text-sm">Normal</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-100 border-2 border-blue-300 rounded mr-2"></div>
          <span className="text-sm">Monitoring</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-100 border-2 border-red-300 rounded mr-2"></div>
          <span className="text-sm">Alert</span>
        </div>
      </div>
    </div>
  );
};

export default ZoneGrid;
