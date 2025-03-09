
import React from 'react';

interface ZoneMetric {
  id: number;
  name: string;
  temperature: string;
  humidity: string;
  spaceUsage: string;
  status: 'normal' | 'alert' | 'warning';
}

interface ZoneMetricsTableProps {
  metrics: ZoneMetric[];
  onSelectZone: (zoneId: number) => void;
}

const ZoneMetricsTable = ({ metrics, onSelectZone }: ZoneMetricsTableProps) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'normal':
        return 'bg-status-normal text-eco-green';
      case 'alert':
        return 'bg-status-alert text-eco-red';
      case 'warning':
        return 'bg-status-warning text-amber-500';
      default:
        return '';
    }
  };

  return (
    <div className="glass-card p-6 animate-fade-in">
      <h3 className="font-medium text-lg mb-4">Zone Performance Metrics</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-3 text-left font-medium text-sm">Zone</th>
              <th className="px-4 py-3 text-left font-medium text-sm">Temperature</th>
              <th className="px-4 py-3 text-left font-medium text-sm">Humidity</th>
              <th className="px-4 py-3 text-left font-medium text-sm">Space Usage</th>
              <th className="px-4 py-3 text-left font-medium text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric) => (
              <tr 
                key={metric.id} 
                className="border-b hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => onSelectZone(metric.id)}
              >
                <td className="px-4 py-3 font-medium">{metric.name}</td>
                <td className="px-4 py-3">{metric.temperature}</td>
                <td className="px-4 py-3">{metric.humidity}</td>
                <td className="px-4 py-3">{metric.spaceUsage}</td>
                <td className="px-4 py-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(metric.status)}`}>
                    {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ZoneMetricsTable;
