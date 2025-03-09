
import React from 'react';
import { Source } from '../../types/sourceTypes';
import { ArrowUp, ArrowDown, Power } from 'lucide-react';

interface SourceCardProps {
  source: Source;
  isSelected: boolean;
  onSelect: () => void;
}

const SourceCard = ({ source, isSelected, onSelect }: SourceCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-eco-green text-white';
      case 'offline':
        return 'bg-eco-red text-white';
      case 'maintenance':
        return 'bg-amber-500 text-white';
      default:
        return 'bg-secondary text-muted-foreground';
    }
  };

  const getTrendClass = (direction: string) => {
    switch (direction) {
      case 'up':
        return 'trend-up';
      case 'down':
        return 'trend-down';
      default:
        return 'trend-neutral';
    }
  };

  const getTrendIcon = (direction: string) => {
    switch (direction) {
      case 'up':
        return <ArrowUp size={16} />;
      case 'down':
        return <ArrowDown size={16} />;
      default:
        return null;
    }
  };

  return (
    <div 
      className={`glass-card p-6 transition-all cursor-pointer ${isSelected ? 'border-eco-blue ring-2 ring-eco-blue/10' : 'hover:border-eco-blue/50'}`}
      onClick={onSelect}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-medium text-lg">{source.name}</h3>
        <div className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${getStatusColor(source.status)}`}>
          <Power size={12} /> {source.status}
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground mb-4">
        Active since: {source.activeSince}
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="stat-value">{source.currentOutput.value}</div>
          <div className={getTrendClass(source.currentOutput.trend.direction)}>
            {getTrendIcon(source.currentOutput.trend.direction)}
            {source.currentOutput.trend.value}
          </div>
          <div className="stat-label">Current Output</div>
        </div>
        
        <div>
          <div className="stat-value">{source.recoveryEfficiency.value}</div>
          <div className={getTrendClass(source.recoveryEfficiency.trend.direction)}>
            {getTrendIcon(source.recoveryEfficiency.trend.direction)}
            {source.recoveryEfficiency.trend.value}
          </div>
          <div className="stat-label">Recovery</div>
        </div>
      </div>
      
      <div className="border-t border-border pt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="stat-label mb-1">Temperature</div>
            <div className="font-medium">{source.heatTemperature.value}</div>
          </div>
          
          <div>
            <div className="stat-label mb-1">CO₂ Reduced</div>
            <div className="font-medium">{source.co2Reduction.value}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceCard;
