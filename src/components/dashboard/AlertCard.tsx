
import React from 'react';
import { AlertCircle } from 'lucide-react';

interface AlertCardProps {
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
  severity: 'critical' | 'warning' | 'info';
}

const AlertCard = ({ 
  title, 
  description, 
  actionText = "Take Action", 
  onAction,
  severity = 'warning'
}: AlertCardProps) => {
  const getSeverityClasses = () => {
    switch (severity) {
      case 'critical':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-amber-50 border-amber-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-amber-50 border-amber-200';
    }
  };

  const getButtonClasses = () => {
    switch (severity) {
      case 'critical':
        return 'bg-eco-red text-white hover:bg-red-600';
      case 'warning':
        return 'bg-amber-500 text-white hover:bg-amber-600';
      case 'info':
        return 'bg-blue-500 text-white hover:bg-blue-600';
      default:
        return 'bg-amber-500 text-white hover:bg-amber-600';
    }
  };

  return (
    <div className={`rounded-lg border p-4 ${getSeverityClasses()}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">
          <AlertCircle className={severity === 'critical' ? 'text-eco-red' : severity === 'warning' ? 'text-amber-500' : 'text-blue-500'} />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-base">{title}</h4>
          <p className="text-sm mt-1">{description}</p>
          
          {actionText && onAction && (
            <button
              onClick={onAction}
              className={`mt-3 px-3 py-1 text-sm rounded-md transition-colors ${getButtonClasses()}`}
            >
              {actionText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
