
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const businessTypes = [
  { name: 'Retail', count: 8500000, percentage: 28.3, color: '#3b82f6' },
  { name: 'Services', count: 7200000, percentage: 24.0, color: '#ef4444' },
  { name: 'Food & Bev', count: 4800000, percentage: 16.0, color: '#f59e0b' },
  { name: 'Construction', count: 3600000, percentage: 12.0, color: '#10b981' },
  { name: 'Healthcare', count: 2400000, percentage: 8.0, color: '#8b5cf6' },
  { name: 'Technology', count: 1800000, percentage: 6.0, color: '#06b6d4' },
  { name: 'Manufacturing', count: 1200000, percentage: 4.0, color: '#f97316' },
  { name: 'Other', count: 500000, percentage: 1.7, color: '#6b7280' },
];

export const BusinessTypesChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Types Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={businessTypes} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45}
                textAnchor="end"
                height={80}
                fontSize={12}
              />
              <YAxis 
                tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                fontSize={12}
              />
              <Tooltip 
                formatter={(value) => [`${(Number(value) / 1000000).toFixed(1)}M businesses`, 'Count']}
                labelFormatter={(label) => `${label} Businesses`}
              />
              <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                {businessTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Grid view of percentages */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {businessTypes.map((type) => (
            <div key={type.name} className="flex items-center gap-2 p-2 bg-gray-50 rounded text-sm">
              <div 
                className="w-3 h-3 rounded"
                style={{ backgroundColor: type.color }}
              ></div>
              <span className="font-medium">{type.percentage}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
