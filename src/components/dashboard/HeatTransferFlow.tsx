
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FlowNode, FlowConnection } from '../../types/flowTypes';

interface HeatTransferFlowProps {
  nodes: FlowNode[];
  connections: FlowConnection[];
}

const HeatTransferFlow = ({ nodes, connections }: HeatTransferFlowProps) => {
  // Group nodes by type for easier rendering
  const sourceNodes = nodes.filter(node => node.type === 'source');
  const distributionNode = nodes.find(node => node.type === 'distribution');
  const zoneNodes = nodes.filter(node => node.type === 'zone');

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Source Nodes (Data Centers) */}
        <div className="flex flex-col gap-6">
          {sourceNodes.map(node => (
            <div key={node.id} className="bg-blue-100 border border-blue-200 rounded-lg p-4 w-[180px] text-center">
              <div className="font-medium">{node.label}</div>
              <div className="text-blue-700 font-bold">{node.value}</div>
            </div>
          ))}
        </div>
        
        {/* Arrow to Distribution */}
        <div className="transform rotate-90 md:rotate-0">
          <ArrowRight className="text-blue-500 h-8 w-8" />
        </div>
        
        {/* Distribution Node */}
        {distributionNode && (
          <div className="bg-purple-100 border border-purple-200 rounded-full p-4 w-[150px] h-[150px] flex items-center justify-center">
            <div className="font-medium text-center text-purple-800">{distributionNode.label}</div>
          </div>
        )}
        
        {/* Arrows to Zones */}
        <div className="transform rotate-90 md:rotate-0">
          <ArrowRight className="text-blue-500 h-8 w-8" />
        </div>
        
        {/* Zone Nodes */}
        <div className="flex flex-col gap-6">
          {zoneNodes.map(node => (
            <div 
              key={node.id} 
              className={`border rounded-lg p-4 w-[180px] text-center ${
                node.status === 'alert' 
                  ? 'bg-red-100 border-red-200' 
                  : 'bg-green-100 border-green-200'
              }`}
            >
              <div className="font-medium">{node.label}</div>
              <div className="text-sm mt-1">
                {node.status === 'alert' ? 'Alert' : 'Optimal'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeatTransferFlow;
