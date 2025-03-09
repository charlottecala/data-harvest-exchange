
export interface AnalyticsTrend {
  value: string;
  direction: 'up' | 'down' | 'neutral';
  label: string;
}

export interface AnalyticsCardProps {
  title: string;
  value: string;
  trend?: AnalyticsTrend;
  valueColor?: string;
}

export interface DataPoint {
  date: string;
  value: number;
}

export interface ZoneEfficiency {
  id: string;
  zone: string;
  heatUsage: number;
  spaceUsage: number;
  roi: string;
  status: 'high' | 'med' | 'low';
}

export interface ReportType {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}
