
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import AnalyticsCard from '../components/analytics/AnalyticsCard';
import { ArrowUp, ArrowRight, TrendingUp, BarChart } from 'lucide-react';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const [dateRange, setDateRange] = useState('Last 30 Days');
  
  // Analytics summary data
  const analyticsData = [
    {
      id: 'heat-recovered',
      title: 'Total Heat Recovered',
      value: '31,428 MWh',
      trend: {
        value: '12.3%',
        direction: 'up',
        label: 'vs. previous period'
      },
      color: 'text-blue-600'
    },
    {
      id: 'cost-savings',
      title: 'Energy Cost Savings',
      value: '$248,750',
      trend: {
        value: '8.5%',
        direction: 'up',
        label: 'vs. previous period'
      },
      color: 'text-eco-green'
    },
    {
      id: 'emissions',
      title: 'CO₂ Emissions Avoided',
      value: '5,842 tons',
      trend: {
        value: '15.1%',
        direction: 'up',
        label: 'vs. previous period'
      },
      color: 'text-green-600'
    },
    {
      id: 'efficiency',
      title: 'System Efficiency',
      value: '87.4%',
      trend: {
        value: '0.2%',
        direction: 'neutral',
        label: 'vs. previous period'
      },
      color: 'text-amber-500'
    }
  ];
  
  // Heat recovery trend data
  const heatRecoveryData = [
    { date: 'Mar 1', value: 740 },
    { date: 'Mar 5', value: 820 },
    { date: 'Mar 10', value: 980 },
    { date: 'Mar 15', value: 940 },
    { date: 'Mar 20', value: 1120 },
    { date: 'Mar 25', value: 1200 },
    { date: 'Mar 30', value: 1080 },
    { date: 'Apr 4', value: 1200 },
    { date: 'Apr 9', value: 1250 },
    { date: 'Apr 14', value: 1280 },
    { date: 'Apr 19', value: 1400 }
  ];
  
  // Zone efficiency data
  const zoneEfficiencyData = [
    { 
      id: 'zone1', 
      zone: 'Zone 1', 
      heatUsage: 80, 
      spaceUsage: 85, 
      roi: '80%',
      status: 'high'
    },
    { 
      id: 'zone2', 
      zone: 'Zone 2', 
      heatUsage: 75, 
      spaceUsage: 79, 
      roi: '70%',
      status: 'high'
    },
    { 
      id: 'zone3', 
      zone: 'Zone 3', 
      heatUsage: 25, 
      spaceUsage: 60, 
      roi: '60%',
      status: 'low'
    },
    { 
      id: 'zone4', 
      zone: 'Zone 4', 
      heatUsage: 85, 
      spaceUsage: 90, 
      roi: '90%',
      status: 'high'
    },
    { 
      id: 'zone5', 
      zone: 'Zone 5', 
      heatUsage: 70, 
      spaceUsage: 50, 
      roi: '55%',
      status: 'med'
    }
  ];

  // Available reports data
  const reports = [
    {
      id: 'performance',
      title: 'System Performance',
      description: 'Daily heat recovery metrics',
      icon: BarChart
    },
    {
      id: 'zone-analytics',
      title: 'Zone Analytics',
      description: 'Zone-by-zone efficiency data',
      icon: TrendingUp
    },
    {
      id: 'cost-savings',
      title: 'Cost Savings',
      description: 'Financial impact analysis',
      icon: ArrowUp
    },
    {
      id: 'sustainability',
      title: 'Sustainability Impact',
      description: 'Environmental metrics',
      icon: ArrowUp
    },
    {
      id: 'crop-yield',
      title: 'Crop Yield Analysis',
      description: 'Impact on farming outputs',
      icon: ArrowUp
    }
  ];

  return (
    <MainLayout
      title="Analytics & Reporting"
      subtitle="Track system performance and optimize operations"
    >
      {/* Date Range Picker */}
      <div className="flex justify-end mb-6">
        <div className="glass-card py-2 px-4 inline-flex items-center">
          <span className="text-gray-700 mr-2">Date Range:</span>
          <div className="relative">
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-transparent pr-8 focus:outline-none"
            >
              <option value="Last 30 Days">Last 30 Days</option>
              <option value="Last 90 Days">Last 90 Days</option>
              <option value="Year to Date">Year to Date</option>
              <option value="Custom Range">Custom Range</option>
            </select>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {analyticsData.map(item => (
          <AnalyticsCard
            key={item.id}
            title={item.title}
            value={item.value}
            trend={item.trend}
            valueColor={item.color}
          />
        ))}
      </div>

      {/* Heat Recovery Trend Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 glass-card p-4">
          <h2 className="section-title">Heat Recovery Trend</h2>
          <p className="section-subtitle">Daily heat recovery in MWh</p>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={heatRecoveryData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2C4698" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#2C4698" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ background: "white", borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                  labelStyle={{ fontWeight: "bold", marginBottom: "4px" }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  name="Heat Recovery (MWh)"
                  stroke="#2C4698" 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Zone Efficiency Analysis */}
        <div className="glass-card p-4">
          <h2 className="section-title">Zone Efficiency Analysis</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-2">Zone</th>
                  <th className="text-left pb-2">Heat Usage</th>
                  <th className="text-left pb-2">Space Usage</th>
                  <th className="text-left pb-2">ROI</th>
                </tr>
              </thead>
              <tbody>
                {zoneEfficiencyData.map(zone => (
                  <tr key={zone.id} className="border-b">
                    <td className="py-2.5">{zone.zone}</td>
                    <td className="py-2.5">
                      <div className="flex items-center">
                        <div className="w-16 h-2 bg-gray-200 rounded mr-2">
                          <div 
                            className={`h-2 rounded ${zone.status === 'low' ? 'bg-red-500' : zone.status === 'med' ? 'bg-amber-500' : 'bg-green-500'}`} 
                            style={{ width: `${zone.heatUsage}%` }}
                          ></div>
                        </div>
                        <span>{zone.heatUsage}%</span>
                      </div>
                    </td>
                    <td className="py-2.5">
                      <div className="flex items-center">
                        <div className="w-16 h-2 bg-gray-200 rounded mr-2">
                          <div 
                            className="h-2 rounded bg-blue-500" 
                            style={{ width: `${zone.spaceUsage}%` }}
                          ></div>
                        </div>
                        <span>{zone.spaceUsage}%</span>
                      </div>
                    </td>
                    <td className="py-2.5">
                      <span className={`${
                        zone.status === 'high' 
                          ? 'text-green-600' 
                          : zone.status === 'med' 
                            ? 'text-amber-500' 
                            : 'text-red-500'
                      } font-medium`}>
                        {zone.roi}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Available Reports */}
      <div className="glass-card p-4 mb-6">
        <h2 className="section-title">Available Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {reports.map(report => (
            <div key={report.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 rounded-full bg-eco-blue/10">
                  <report.icon className="h-5 w-5 text-eco-blue" />
                </div>
                <button className="text-eco-blue text-sm font-medium">View</button>
              </div>
              <h3 className="font-medium mb-1">{report.title}</h3>
              <p className="text-sm text-gray-600">{report.description}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Analytics;
