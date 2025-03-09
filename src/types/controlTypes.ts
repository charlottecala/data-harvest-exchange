
export interface ControlOption {
  id: string;
  label: string;
  status?: 'alert' | 'warning' | 'normal';
}

export interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  colorScheme?: 'blue' | 'green' | 'red' | 'amber';
}

export interface ControlPanelProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  additionalInfo?: string;
  colorScheme?: 'blue' | 'green' | 'red' | 'amber';
  onChange: (value: number) => void;
}

export interface ZoneControlProps {
  zoneId: string;
  temperature: number;
  targetRange: [number, number];
  humidity: number;
  flow: number;
}
