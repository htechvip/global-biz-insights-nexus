
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const countryData = [
  { name: 'United States', businesses: 18500000, code: 'US' },
  { name: 'Mexico', businesses: 7200000, code: 'MX' },
  { name: 'Colombia', businesses: 3100000, code: 'CO' },
  { name: 'Egypt', businesses: 1200000, code: 'EG' },
];

const chartConfig = {
  businesses: {
    label: "Businesses",
    color: "#3b82f6",
  },
};

export const WorldMap = () => {
  return (
    <Card className="h-96">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Global Business Distribution</span>
          <span className="text-sm font-normal text-gray-600">30M+ Small Businesses</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <BarChart data={countryData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
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
            <ChartTooltip 
              content={<ChartTooltipContent 
                formatter={(value) => [`${(Number(value) / 1000000).toFixed(1)}M`, "Businesses"]}
              />} 
            />
            <Bar 
              dataKey="businesses" 
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
        
        {/* Country stats */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          {countryData.map((country) => (
            <div key={country.name} className="text-center p-2 bg-gray-50 rounded">
              <div className="font-medium text-sm">{country.code}</div>
              <div className="text-lg font-bold text-blue-600">
                {(country.businesses / 1000000).toFixed(1)}M
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
