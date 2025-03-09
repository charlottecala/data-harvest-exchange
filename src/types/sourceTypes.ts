
export interface SourceTrend {
  value: string;
  direction: "up" | "down" | "neutral";
  label: string;
}

export interface Source {
  id: string;
  name: string;
  status: "maintenance" | "online" | "offline";
  activeSince: string;
  currentOutput: {
    value: string;
    trend: SourceTrend;
  };
  recoveryEfficiency: {
    value: string;
    trend: SourceTrend;
  };
  heatTemperature: {
    value: string;
    status: "optimal" | "warning" | "alert";
  };
  costSavings: {
    value: string;
    trend: SourceTrend;
  };
  co2Reduction: {
    value: string;
    label: string;
  };
}
