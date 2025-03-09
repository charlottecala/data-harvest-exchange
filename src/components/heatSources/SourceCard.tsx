
import React from 'react';
import { TrendingUp, TrendingDown, Thermometer, DollarSign, Leaf } from 'lucide-react';

interface SourceCardProps {
  source: {
    id: string;
    name: string;
    status: 'online' | 'offline' | 'maintenance';
    activeSince: string;
    currentOutput: {
      value: string;
      trend: {
        value: string;
        direction: 'up' | 'down';
        label: string;
      };
    };
    recoveryEfficiency: {
      value: string;
      trend: {
        value: string;
        direction: 'up' | 'down';
        label: string;
      };
    };
    heatTemperature: {
      value: string;
      status: 'optimal' | 'warning' | 'critical';
    };
    costSavings: {
      value: string;
      trend: {
        value: string;
        direction: 'up' | 'down';
        label: string;
      };
    };
    co2Reduction: {
      value: string;
      label: string;
    };
  };
  isSelected: boolean;
  onSelect: () => void;
}

const SourceCard = ({ source, isSelected, onSelect }: SourceCardProps) => {
  const getStatusClass = () => {
    switch (source.status) {
      case 'online':
        return 'bg-status-normal text-eco-green';
      case 'offline':
        return 'bg-status-alert text-eco-red';
      case 'maintenance':
        return 'bg-status-warning text-amber-500';
      default:
        return '';
    }
  };

  const getTrendIcon = (direction: 'up' | 'down') => {
    return direction === 'up' 
      ? <TrendingUp className="h-4 w-4" /> 
      : <TrendingDown className="h-4 w-4" />;
  };

  const getTrendClass = (direction: 'up' | 'down') => {
    return direction === 'up' ? 'trend-up' : 'trend-down';
  };

  const getTemperatureStatusClass = () => {
    switch (source.heatTemperature.status) {
      case 'optimal':
        return 'text-eco-green';
      case 'warning':
        return 'text-amber-500';
      case 'critical':
        return 'text-eco-red';
      default:
        return '';
    }
  };

  return (
    <div 
      className={`glass-card p-6 cursor-pointer transition-all duration-300 animate-fade-in ${isSelected ? 'border-eco-blue shadow-md' : 'hover:shadow-sm'}`}
      onClick={onSelect}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-lg">{source.name}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase ${getStatusClass()}`}>
          {source.status}
        </span>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">
        Active since: {source.activeSince}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm text-muted-foreground mb-1">Current Output</h4>
          <div className="flex items-baseline">
            <span className="text-2xl font-semibold text-eco-blue">
              {source.currentOutput.value}
            </span>
            <div className={`ml-2 ${getTrendClass(source.currentOutput.trend.direction)}`}>
              {getTrendIcon(source.currentOutput.trend.direction)}
              <span className="text-xs ml-1">
                {source.currentOutput.trend.value} {source.currentOutput.trend.label}
              </span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm text-muted-foreground mb-1">Recovery Efficiency</h4>
          <div className="flex items-baseline">
            <span className="text-2xl font-semibold text-eco-green">
              {source.recoveryEfficiency.value}
            </span>
            <div className={`ml-2 ${getTrendClass(source.recoveryEfficiency.trend.direction)}`}>
              {getTrendIcon(source.recoveryEfficiency.trend.direction)}
              <span className="text-xs ml-1">
                {source.recoveryEfficiency.trend.value} {source.recoveryEfficiency.trend.label}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Thermometer className="h-5 w-5 text-amber-500" />
          <div>
            <h4 className="text-sm text-muted-foreground">Heat Temperature</h4>
            <span className={`font-medium ${getTemperatureStatusClass()}`}>
              {source.heatTemperature.value}
            </span>
            <span className="text-xs ml-2 text-muted-foreground">
              {source.heatTemperature.status === 'optimal' ? 'Within optimal range' : 
               source.heatTemperature.status === 'warning' ? 'Near threshold' : 
               'Exceeds threshold'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-eco-green" />
          <div>
            <h4 className="text-sm text-muted-foreground">Cost Savings (MTD)</h4>
            <span className="font-medium">{source.costSavings.value}</span>
            <div className={`text-xs ${getTrendClass(source.costSavings.trend.direction)}`}>
              {getTrendIcon(source.costSavings.trend.direction)}
              <span>{source.costSavings.trend.value} {source.costSavings.trend.label}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-eco-green" />
          <div>
            <h4 className="text-sm text-muted-foreground">CO₂ Reduction</h4>
            <span className="font-medium">{source.co2Reduction.value}</span>
            <span className="text-xs ml-2 text-muted-foreground">{source.co2Reduction.label}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceCard;
