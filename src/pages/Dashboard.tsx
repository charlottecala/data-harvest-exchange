import { useState } from 'react';
import Layout from '../components/layout/Layout';
import StatsCard from '../components/dashboard/StatsCard';
import HeatTransferFlow from '../components/dashboard/HeatTransferFlow';
import SpaceUtilizationChart from '../components/dashboard/SpaceUtilizationChart';
import CropHealthChart from '../components/dashboard/CropHealthChart';
import AlertCard from '../components/dashboard/AlertCard';
import { Thermometer, DollarSign, Leaf, Gauge } from 'lucide-react';
import { toast } from 'sonner';
import { FlowNode, FlowConnection } from '../types/flowTypes';

const Dashboard = () => {
  const [alertsHandled, setAlertsHandled] = useState(false);
  
  const handleTakeAction = () => {
    setAlertsHandled(true);
    toast.success('Alert actions applied successfully', {
      description: 'Zone 3 temperature adjustments initiated.'
    });
  };
  
  const handleAdjustDampers = () => {
    toast.success('Damper settings adjusted', {
      description: 'Zone 3 damper settings have been updated to redirect airflow.'
    });
  };

  // Sample data for heat transfer flow visualization
  const flowNodes: FlowNode[] = [
    { id: 'dc1', label: 'Data Center 1', value: '42.3 MW', type: "source" },
    { id: 'dc2', label: 'Data Center 2', value: '30.5 MW', type: "source" },
    { id: 'distribution', label: 'Distribution', value: '', type: "distribution" },
    { id: 'zone12', label: 'Zone 1-2', value: '', type: "zone", status: "optimal" },
    { id: 'zone34', label: 'Zone 3-4', value: '', type: "zone", status: "alert" },
    { id: 'zone59', label: 'Zone 5-9', value: '', type: "zone", status: "optimal" },
  ];
  
  const flowConnections: FlowConnection[] = [
    { from: 'dc1', to: 'distribution' },
    { from: 'dc2', to: 'distribution' },
    { from: 'distribution', to: 'zone12' },
    { from: 'distribution', to: 'zone34' },
    { from: 'distribution', to: 'zone59' },
  ];
  
  // Sample data for space utilization
  const zoneUtilization = [
    { id: 1, name: 'Zone 1', utilization: 80 },
    { id: 2, name: 'Zone 2', utilization: 70 },
    { id: 3, name: 'Zone 3', utilization: 60 },
    { id: 4, name: 'Zone 4', utilization: 90 },
    { id: 5, name: 'Zone 5', utilization: 50 },
    { id: 6, name: 'Zone 6-9', utilization: 73 },
  ];
  
  // Sample data for crop health
  const cropHealth = [
    { name: 'Tomatoes', health: 95 },
    { name: 'Lettuce', health: 82 },
    { name: 'Peppers', health: 78 },
    { name: 'Basil', health: 89 },
    { name: 'Kale', health: 81 },
    { name: 'Strawberry', health: 64 },
  ];

  return (
    <Layout
      title="Dashboard"
      subtitle="Current system performance and operational metrics"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Data Center Heat Production"
          value="72.8 MW"
          trend={{ value: '4.2%', direction: 'up', label: 'from yesterday' }}
          color="blue"
          icon={<Thermometer className="h-5 w-5 text-eco-blue" />}
        />
        
        <StatsCard
          title="Farm Heat Utilization"
          value="81.5%"
          trend={{ value: '2.3%', direction: 'up', label: 'from last week' }}
          color="green"
          icon={<Gauge className="h-5 w-5 text-eco-green" />}
        />
        
        <StatsCard
          title="Space Utilization"
          value="72.8%"
          trend={{ value: '1.1%', direction: 'down', label: 'from target' }}
          color="yellow"
          icon={<Gauge className="h-5 w-5 text-eco-yellow" />}
        />
        
        <StatsCard
          title="System Alerts"
          value={alertsHandled ? "0" : "2"}
          color="red"
          icon={<Thermometer className="h-5 w-5 text-eco-red" />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <HeatTransferFlow nodes={flowNodes} connections={flowConnections} />
        </div>
        
        <div className="space-y-6">
          <div className={`${alertsHandled ? 'hidden' : 'block'}`}>
            <h3 className="font-medium text-lg mb-3">System Alerts</h3>
            <div className="space-y-4">
              <AlertCard
                title="Temperature Alert: Zone 3"
                description="Temperature reached 31°C (4°C above threshold)"
                severity="critical"
                onAction={handleTakeAction}
              />
              
              <AlertCard
                title="Flow Rate Alert: Zone 4"
                description="Flow rate reduced to 68% of optimal level"
                severity="warning"
                onAction={handleTakeAction}
              />
              
              <div className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  Suggested action: Adjust damper settings in zone 3
                </p>
                <button 
                  className="mt-2 text-xs bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={handleAdjustDampers}
                >
                  Apply Suggested Fix
                </button>
              </div>
            </div>
          </div>
          
          {alertsHandled && (
            <div className="glass-card p-6">
              <div className="flex items-center justify-center h-48 text-center">
                <div>
                  <div className="bg-eco-green text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">All Systems Operational</h3>
                  <p className="text-muted-foreground text-sm">No active alerts at this time</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <SpaceUtilizationChart zones={zoneUtilization} />
        <CropHealthChart crops={cropHealth} />
      </div>
      
      <div className="glass-card p-6">
        <h3 className="font-medium text-lg mb-4">Recommendations</h3>
        
        <div className="grid gap-4">
          <div className="p-4 border-l-4 border-l-eco-green bg-status-normal rounded-r-lg">
            <h4 className="font-medium">Zone 5: Increase basil planting by 20%</h4>
            <p className="text-sm text-muted-foreground mt-1">Current space utilization is only 50%. Increasing plant density can improve overall yield.</p>
          </div>
          
          <div className="p-4 border-l-4 border-l-amber-400 bg-status-warning rounded-r-lg">
            <h4 className="font-medium">Zone 3: Replace strawberries with heat-resistant varieties</h4>
            <p className="text-sm text-muted-foreground mt-1">Consider replacing with heat-resistant herbs that thrive in 28-32°C environments</p>
          </div>
          
          <div className="p-4 border-l-4 border-l-eco-red bg-status-alert rounded-r-lg">
            <h4 className="font-medium">Urgent: Reduce Zone 3 temperature below 28°C</h4>
            <p className="text-sm text-muted-foreground mt-1">Current temperature is affecting crop health and system efficiency</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
