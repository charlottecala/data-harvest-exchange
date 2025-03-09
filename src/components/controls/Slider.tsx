
import React, { useState } from 'react';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  color?: 'blue' | 'green' | 'red' | 'amber';
}

const Slider = ({ value, onChange, min, max, step = 1, color = 'blue' }: SliderProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const getTrackColor = () => {
    switch (color) {
      case 'blue': return 'bg-eco-blue';
      case 'green': return 'bg-eco-green';
      case 'red': return 'bg-eco-red';
      case 'amber': return 'bg-amber-400';
      default: return 'bg-eco-blue';
    }
  };

  const getThumbColor = () => {
    switch (color) {
      case 'blue': return 'bg-eco-blue ring-eco-blue/20';
      case 'green': return 'bg-eco-green ring-eco-green/20';
      case 'red': return 'bg-eco-red ring-eco-red/20';
      case 'amber': return 'bg-amber-400 ring-amber-400/20';
      default: return 'bg-eco-blue ring-eco-blue/20';
    }
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative h-10 flex items-center">
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div 
          className={`h-full rounded-full ${getTrackColor()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div 
        className={`absolute h-5 w-5 rounded-full ${getThumbColor()} shadow-md transform -translate-y-1/2 -translate-x-1/2 top-1/2 cursor-pointer transition-transform duration-100 ${isDragging ? 'ring-4 scale-110' : ''}`}
        style={{ left: `${percentage}%` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      />
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="absolute inset-0 opacity-0 cursor-pointer w-full"
        onMouseUp={() => setIsDragging(false)}
        onTouchEnd={() => setIsDragging(false)}
      />
    </div>
  );
};

export default Slider;
