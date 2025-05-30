
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const revenueDistribution = [
  { range: '$0-50K', count: 12000000, percentage: 40, color: '#ef4444' },
  { range: '$50K-250K', count: 9000000, percentage: 30, color: '#f59e0b' },
  { range: '$250K-1M', count: 6000000, percentage: 20, color: '#10b981' },
  { range: '$1M-5M', count: 2400000, percentage: 8, color: '#3b82f6' },
  { range: '$5M+', count: 600000, percentage: 2, color: '#8b5cf6' },
];

const yearlyTrends = [
  { year: '2021', totalRevenue: 2.8, avgRevenue: 93 },
  { year: '2022', totalRevenue: 3.2, avgRevenue: 107 },
  { year: '2023', totalRevenue: 3.6, avgRevenue: 120 },
  { year: '2024', totalRevenue: 3.9, avgRevenue: 130 },
];

export const RevenueAnalytics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Revenue Distribution Pie Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Annual Revenue Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenueDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="count"
                >
                  {revenueDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${(Number(value) / 1000000).toFixed(1)}M`, 'Businesses']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 gap-2 mt-4">
            {revenueDistribution.map((item) => (
              <div key={item.range} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span>{item.range}</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-medium">{(item.count / 1000000).toFixed(1)}M</span>
                  <span className="text-gray-600">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Revenue Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Trends (Trillions USD)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={yearlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `$${value}T`} />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'totalRevenue' ? `$${value}T` : `$${value}K`,
                    name === 'totalRevenue' ? 'Total Revenue' : 'Avg per Business'
                  ]}
                />
                <Line 
                  type="monotone" 
                  dataKey="totalRevenue" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          {/* Key metrics */}
          <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">$3.9T</div>
              <div className="text-sm text-gray-600">Total Revenue 2024</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">$130K</div>
              <div className="text-sm text-gray-600">Avg per Business</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">+8.3%</div>
              <div className="text-sm text-gray-600">YoY Growth</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
