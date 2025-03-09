
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface AnalyticsCardProps {
  title: string;
  value: string;
  color: 'blue' | 'green' | 'red' | 'yellow';
  trend?: {
    value: string;
    label: string;
    direction: 'up' | 'down' | 'neutral';
  };
}

const AnalyticsCard = ({ title, value, color, trend }: AnalyticsCardProps) => {
  const getValueColor = () => {
    switch (color) {
      case 'blue': return 'text-eco-blue';
      case 'green': return 'text-eco-green';
      case 'red': return 'text-eco-red';
      case 'yellow': return 'text-eco-yellow';
      default: return 'text-eco-blue';
    }
  };

  const getTrendClass = () => {
    if (!trend) return '';
    
    switch (trend.direction) {
      case 'up': return 'trend-up';
      case 'down': return 'trend-down';
      case 'neutral': return 'trend-neutral';
      default: return '';
    }
  };

  const getTrendIcon = () => {
    if (!trend) return null;
    
    switch (trend.direction) {
      case 'up': return <ArrowUp className="h-4 w-4" />;
      case 'down': return <ArrowDown className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="glass-card p-6 animate-scale-in">
      <h3 className="stat-label mb-3">{title}</h3>
      <div className={`stat-value mb-2 ${getValueColor()}`}>{value}</div>
      
      {trend && (
        <div className={getTrendClass()}>
          {getTrendIcon()}
          <span>{trend.value} {trend.label}</span>
        </div>
      )}
    </div>
  );
};

export default AnalyticsCard;
