
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import SourceCard from '../components/heatSources/SourceCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import { Source } from '../types/sourceTypes';

const HeatSources = () => {
  const [selectedSourceId, setSelectedSourceId] = useState('dc1');
  
  const handleAddSource = () => {
    toast.info('Feature coming soon', {
      description: 'The ability to add new heat sources will be available in the next update.'
    });
  };

  // Sample data for heat sources
  const sources: Source[] = [
    {
      id: 'dc1',
      name: 'Data Center 1',
      status: 'online',
      activeSince: 'Mar 01, 2025',
      currentOutput: {
        value: '42.3 MW',
        trend: {
          value: '2.1%',
          direction: 'up',
          label: 'from yesterday'
        }
      },
      recoveryEfficiency: {
        value: '93.2%',
        trend: {
          value: '1.5%',
          direction: 'up',
          label: 'from last week'
        }
      },
      heatTemperature: {
        value: '38.6°C',
        status: 'optimal'
      },
      costSavings: {
        value: '$28,450',
        trend: {
          value: '$2,150',
          direction: 'up',
          label: 'from last month'
        }
      },
      co2Reduction: {
        value: '186.4 t',
        label: 'This month to date'
      }
    },
    {
      id: 'dc2',
      name: 'Data Center 2',
      status: 'online',
      activeSince: 'Feb 15, 2025',
      currentOutput: {
        value: '30.5 MW',
        trend: {
          value: '0.8%',
          direction: 'down',
          label: 'from yesterday'
        }
      },
      recoveryEfficiency: {
        value: '87.5%',
        trend: {
          value: '0.3%',
          direction: 'up',
          label: 'from last week'
        }
      },
      heatTemperature: {
        value: '36.2°C',
        status: 'optimal'
      },
      costSavings: {
        value: '$21,870',
        trend: {
          value: '$1,450',
          direction: 'up',
          label: 'from last month'
        }
      },
      co2Reduction: {
        value: '142.7 t',
        label: 'This month to date'
      }
    }
  ];
  
  // Sample data for the heat output chart
  const heatOutputData = [
    { time: '00:00', mw: 38 },
    { time: '02:00', mw: 35 },
    { time: '04:00', mw: 32 },
    { time: '06:00', mw: 36 },
    { time: '08:00', mw: 40 },
    { time: '10:00', mw: 45 },
    { time: '12:00', mw: 47 },
    { time: '14:00', mw: 48 },
    { time: '16:00', mw: 46 },
    { time: '18:00', mw: 44 },
    { time: '20:00', mw: 42 },
    { time: '22:00', mw: 40 },
  ];

  return (
    <Layout
      title="Heat Sources Management"
      subtitle="Monitor and control data center heat recovery systems"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {sources.map((source) => (
          <SourceCard
            key={source.id}
            source={source}
            isSelected={source.id === selectedSourceId}
            onSelect={() => setSelectedSourceId(source.id)}
          />
        ))}
        
        <div 
          className="glass-card flex items-center justify-center p-6 cursor-pointer hover:border-eco-blue transition-colors min-h-[200px]"
          onClick={handleAddSource}
        >
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-eco-blue/10 flex items-center justify-center mx-auto mb-3">
              <Plus className="h-8 w-8 text-eco-blue" />
            </div>
            <h3 className="font-medium text-lg">Add Source</h3>
            <p className="text-sm text-muted-foreground mt-1">Connect a new heat source</p>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 mb-8">
        <h3 className="font-medium text-lg mb-4">Real-time Heat Output</h3>
        <p className="text-sm text-muted-foreground mb-6">Last 24 hours</p>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={heatOutputData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorMw" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2C4698" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#2C4698" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="time" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} label={{ value: 'MW', angle: -90, position: 'insideLeft' }} />
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="mw" 
                stroke="#2C4698" 
                fillOpacity={1} 
                fill="url(#colorMw)" 
                activeDot={{ r: 8 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="glass-card p-6">
        <h3 className="font-medium text-lg mb-6">Source Efficiency Comparison</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-3 text-left font-medium text-sm">Source</th>
                <th className="px-4 py-3 text-left font-medium text-sm">Avg. Output</th>
                <th className="px-4 py-3 text-left font-medium text-sm">Recovery %</th>
                <th className="px-4 py-3 text-left font-medium text-sm">Savings/MW</th>
                <th className="px-4 py-3 text-left font-medium text-sm">CO₂ Saved/MW</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">Data Center 1</td>
                <td className="px-4 py-3">40.8 MW</td>
                <td className="px-4 py-3 text-eco-green">93.2%</td>
                <td className="px-4 py-3">$672 / MW</td>
                <td className="px-4 py-3">4.4 t / MW</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">Data Center 2</td>
                <td className="px-4 py-3">31.2 MW</td>
                <td className="px-4 py-3 text-eco-green">87.5%</td>
                <td className="px-4 py-3">$701 / MW</td>
                <td className="px-4 py-3">4.6 t / MW</td>
              </tr>
              <tr className="border-b text-muted-foreground italic">
                <td className="px-4 py-3 font-medium">System Average</td>
                <td className="px-4 py-3">36.0 MW</td>
                <td className="px-4 py-3">90.4%</td>
                <td className="px-4 py-3">$687 / MW</td>
                <td className="px-4 py-3">4.5 t / MW</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default HeatSources;
