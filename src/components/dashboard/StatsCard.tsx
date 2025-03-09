
import React from 'react';
import { ArrowDown, ArrowUp, ArrowRight } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: string | number;
    direction: 'up' | 'down' | 'neutral';
    label: string;
  };
  color?: 'blue' | 'green' | 'red' | 'yellow';
  icon?: React.ReactNode;
}

const StatsCard = ({ title, value, trend, color = 'blue', icon }: StatsCardProps) => {
  const getColorClass = () => {
    switch (color) {
      case 'blue': return 'text-eco-blue';
      case 'green': return 'text-eco-green';
      case 'red': return 'text-eco-red';
      case 'yellow': return 'text-eco-yellow';
      default: return 'text-eco-blue';
    }
  };
  
  const getTrendIcon = () => {
    switch (trend?.direction) {
      case 'up': return <ArrowUp className="h-4 w-4" />;
      case 'down': return <ArrowDown className="h-4 w-4" />;
      case 'neutral': return <ArrowRight className="h-4 w-4" />;
      default: return null;
    }
  };
  
  const getTrendClass = () => {
    switch (trend?.direction) {
      case 'up': return 'trend-up';
      case 'down': return 'trend-down';
      case 'neutral': return 'trend-neutral';
      default: return '';
    }
  };

  return (
    <div className="glass-card p-5 animate-scale-in">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="stat-label mb-2">{title}</h3>
          <div className={`stat-value ${getColorClass()}`}>{value}</div>
          
          {trend && (
            <div className={getTrendClass()}>
              {getTrendIcon()}
              <span>{trend.value} {trend.label}</span>
            </div>
          )}
        </div>
        
        {icon && (
          <div className={`stat-icon bg-${color}-50`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
