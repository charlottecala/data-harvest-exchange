
export interface FlowNode {
  id: string;
  label: string;
  value: string;
  type: "source" | "distribution" | "zone";
  status?: "optimal" | "alert" | "warning";
}

export interface FlowConnection {
  from: string;
  to: string;
}
