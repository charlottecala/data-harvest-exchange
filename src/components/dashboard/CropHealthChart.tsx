
import React from 'react';

interface CropHealthProps {
  crops: {
    name: string;
    health: number;
  }[];
}

const CropHealthChart = ({ crops }: CropHealthProps) => {
  const getHealthColor = (health: number) => {
    if (health >= 85) return 'bg-eco-green text-white';
    if (health >= 75) return 'bg-blue-500 text-white';
    if (health >= 65) return 'bg-amber-400 text-white';
    return 'bg-eco-red text-white';
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {crops.map((crop, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-semibold ${getHealthColor(crop.health)}`}
            >
              {crop.health}%
            </div>
            <span className="text-sm font-medium mt-2">{crop.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropHealthChart;
