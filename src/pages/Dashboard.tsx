
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import StatsCard from '../components/dashboard/StatsCard';
import HeatTransferFlow from '../components/dashboard/HeatTransferFlow';
import SpaceUtilizationChart from '../components/dashboard/SpaceUtilizationChart';
import CropHealthChart from '../components/dashboard/CropHealthChart';
import AlertCard from '../components/dashboard/AlertCard';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  // Sample data for dashboard stats
  const stats = [
    {
      id: 'heat-production',
      title: 'Data Center Heat Production',
      value: '72.8 MW',
      trend: { value: '4.2%', direction: 'up', label: 'from yesterday' },
      color: 'blue'
    },
    {
      id: 'heat-utilization',
      title: 'Farm Heat Utilization',
      value: '81.5%',
      trend: { value: '2.3%', direction: 'up', label: 'from last week' },
      color: 'green'
    },
    {
      id: 'space-utilization',
      title: 'Space Utilization',
      value: '72.8%',
      trend: { value: '1.1%', direction: 'down', label: 'from target' },
      color: 'yellow'
    },
    {
      id: 'alerts',
      title: 'System Alerts',
      value: '2',
      description: 'Zone 3 temperature alerts',
      color: 'red'
    }
  ];

  // Flow nodes data for heat transfer diagram
  const flowNodes = [
    { id: 'dc1', label: 'Data Center 1', value: '42.3 MW', type: 'source' },
    { id: 'dc2', label: 'Data Center 2', value: '30.5 MW', type: 'source' },
    { id: 'dist', label: 'Distribution', value: '', type: 'distribution' },
    { id: 'z12', label: 'Zone 1-2', value: '', type: 'zone', status: 'optimal' },
    { id: 'z34', label: 'Zone 3-4', value: '', type: 'zone', status: 'alert' },
    { id: 'z59', label: 'Zone 5-9', value: '', type: 'zone', status: 'optimal' }
  ];

  // Flow connections
  const flowConnections = [
    { from: 'dc1', to: 'dist' },
    { from: 'dc2', to: 'dist' },
    { from: 'dist', to: 'z12' },
    { from: 'dist', to: 'z34' },
    { from: 'dist', to: 'z59' }
  ];

  // Alert data
  const alerts = [
    {
      id: 'alert-1',
      title: 'Temperature Alert: Zone 3',
      description: 'Temperature reached 31°C (4°C above threshold)',
      severity: 'critical',
      actionText: 'Take Action'
    },
    {
      id: 'alert-2',
      title: 'Flow Rate Alert: Zone 4',
      description: 'Flow rate reduced to 68% of optimal level',
      severity: 'warning',
      actionText: 'Take Action'
    }
  ];

  // Space utilization data by zone
  const spaceUtilization = [
    { id: 1, name: 'Zone 1', utilization: 80 },
    { id: 2, name: 'Zone 2', utilization: 70 },
    { id: 3, name: 'Zone 3', utilization: 60 },
    { id: 4, name: 'Zone 4', utilization: 90 },
    { id: 5, name: 'Zone 5', utilization: 50 },
    { id: 6, name: 'Zone 6-9', utilization: 73 }
  ];

  // Crop health data
  const cropHealth = [
    { name: 'Tomatoes', health: 95 },
    { name: 'Lettuce', health: 82 },
    { name: 'Peppers', health: 78 },
    { name: 'Basil', health: 89 },
    { name: 'Kale', health: 81 },
    { name: 'Strawberry', health: 64 }
  ];

  // Recommendations
  const recommendations = [
    {
      id: 'rec-1',
      text: 'Zone 5: Increase basil planting by 20%',
      type: 'efficiency'
    },
    {
      id: 'rec-2',
      text: 'Zone 3: Replace strawberries with heat-resistant varieties',
      type: 'warning'
    },
    {
      id: 'rec-3',
      text: 'Urgent: Reduce Zone 3 temperature below 28°C',
      type: 'critical'
    }
  ];

  return (
    <MainLayout 
      title="System Dashboard" 
      subtitle="Real-time overview of heat transfer system performance"
    >
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map(stat => (
          <StatsCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* Heat Transfer Flow & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <div className="glass-card p-4">
            <h2 className="text-xl font-semibold mb-4">Heat Transfer Flow</h2>
            <HeatTransferFlow nodes={flowNodes} connections={flowConnections} />
          </div>
        </div>
        
        <div>
          <div className="glass-card p-4">
            <h2 className="text-xl font-semibold mb-4">System Alerts</h2>
            <div className="space-y-3">
              {alerts.map(alert => (
                <AlertCard key={alert.id} {...alert} onAction={() => console.log(`Action for ${alert.id}`)} />
              ))}
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-sm text-blue-800">
                Suggested action: Adjust damper settings in zone 3
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Space Utilization & Crop Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="glass-card p-4">
          <h2 className="text-xl font-semibold mb-4">Space Utilization by Zone</h2>
          <SpaceUtilizationChart zones={spaceUtilization} />
        </div>
        
        <div className="glass-card p-4">
          <h2 className="text-xl font-semibold mb-4">Crop Health & Recommendations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-3">Current Crop Health</h3>
              <CropHealthChart crops={cropHealth} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Recommendations</h3>
              <div className="space-y-2">
                {recommendations.map(recommendation => (
                  <div 
                    key={recommendation.id}
                    className={`p-2 text-sm rounded-md ${
                      recommendation.type === 'critical' 
                        ? 'bg-red-50 border border-red-200 text-red-700' 
                        : recommendation.type === 'warning'
                          ? 'bg-amber-50 border border-amber-200 text-amber-700'
                          : 'bg-green-50 border border-green-200 text-green-700'
                    }`}
                  >
                    {recommendation.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
