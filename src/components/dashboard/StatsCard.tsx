
import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: string | number;
    direction: 'up' | 'down' | 'neutral';
    label: string;
  };
  description?: string;
  color: 'blue' | 'green' | 'red' | 'yellow';
  icon?: React.ReactNode;
}

const StatsCard = ({ title, value, trend, description, color = 'blue' }: StatsCardProps) => {
  const getColorClass = () => {
    switch (color) {
      case 'blue': return 'text-eco-blue';
      case 'green': return 'text-eco-green';
      case 'red': return 'text-eco-red';
      case 'yellow': return 'text-amber-500';
      default: return 'text-eco-blue';
    }
  };
  
  const getTrendIcon = () => {
    switch (trend?.direction) {
      case 'up': return <ArrowUp className="h-4 w-4" />;
      case 'down': return <ArrowDown className="h-4 w-4" />;
      default: return null;
    }
  };
  
  const getTrendClass = () => {
    switch (trend?.direction) {
      case 'up': return 'text-eco-green flex items-center gap-1 text-sm';
      case 'down': return 'text-eco-red flex items-center gap-1 text-sm';
      default: return 'text-gray-500 text-sm';
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
      <div>
        <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
        <div className={`text-3xl font-bold ${getColorClass()}`}>{value}</div>
        
        {trend && (
          <div className={getTrendClass()}>
            {getTrendIcon()}
            <span>{trend.value} {trend.label}</span>
          </div>
        )}
        
        {description && (
          <div className="text-gray-600 text-sm mt-1">{description}</div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
