
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FlowNode, FlowConnection } from '../../types/flowTypes';

interface HeatTransferFlowProps {
  nodes: FlowNode[];
  connections: FlowConnection[];
}

const HeatTransferFlow = ({ nodes, connections }: HeatTransferFlowProps) => {
  const getNodeClass = (type: string, status?: string) => {
    let baseClass = "relative p-4 rounded-lg flex flex-col items-center justify-center border text-center min-w-[100px]";
    
    if (type === 'source') {
      return `${baseClass} bg-blue-100 border-blue-200`;
    } else if (type === 'distribution') {
      return `${baseClass} bg-purple-100 border-purple-200 rounded-full`;
    } else if (type === 'zone') {
      if (status === 'alert') {
        return `${baseClass} bg-red-100 border-red-200`;
      }
      return `${baseClass} bg-green-100 border-green-200`;
    }
    
    return baseClass;
  };

  return (
    <div className="glass-card p-6 animate-fade-in">
      <h3 className="font-medium text-lg mb-4">Heat Transfer Flow</h3>
      
      <div className="flex items-center justify-between flex-wrap gap-4 relative">
        {/* Source Nodes */}
        <div className="flex flex-col gap-4">
          {nodes.filter(node => node.type === 'source').map(node => (
            <div key={node.id} className={getNodeClass(node.type)}>
              <div className="font-medium">{node.label}</div>
              <div className="text-sm text-blue-600 font-semibold">{node.value}</div>
            </div>
          ))}
        </div>
        
        {/* Arrows */}
        <div className="flex items-center">
          <ArrowRight className="h-6 w-6 flow-arrow" />
        </div>
        
        {/* Distribution Node */}
        <div>
          {nodes.filter(node => node.type === 'distribution').map(node => (
            <div key={node.id} className={getNodeClass(node.type)}>
              <div className="font-medium">{node.label}</div>
            </div>
          ))}
        </div>
        
        {/* Arrows */}
        <div className="flex items-center">
          <ArrowRight className="h-6 w-6 flow-arrow" />
        </div>
        
        {/* Zone Nodes */}
        <div className="flex flex-col gap-4">
          {nodes.filter(node => node.type === 'zone').map(node => (
            <div key={node.id} className={getNodeClass(node.type, node.status)}>
              <div className="font-medium">{node.label}</div>
              <div className="text-xs">{node.status === 'alert' ? 'Alert' : 'Optimal'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeatTransferFlow;
