
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const countryData = [
  { name: 'United States', businesses: 18500000, intensity: 100, x: 25, y: 35 },
  { name: 'Mexico', businesses: 7200000, intensity: 75, x: 20, y: 55 },
  { name: 'Colombia', businesses: 3100000, intensity: 45, x: 30, y: 70 },
  { name: 'Egypt', businesses: 1200000, intensity: 25, x: 65, y: 45 },
];

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
        <div className="relative w-full h-64 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg overflow-hidden">
          {/* Simplified world map representation */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60">
            {/* Continents outline */}
            <path
              d="M15,20 Q25,15 35,20 L40,25 Q45,30 40,35 Q35,40 30,35 Q25,40 20,35 Q15,30 15,20 Z"
              fill="#e5f3ff"
              stroke="#3b82f6"
              strokeWidth="0.5"
            />
            <path
              d="M50,25 Q60,20 70,25 L75,30 Q80,35 75,40 Q70,45 65,40 Q60,45 55,40 Q50,35 50,25 Z"
              fill="#e5f3ff"
              stroke="#3b82f6"
              strokeWidth="0.5"
            />
            
            {/* Heat map points */}
            {countryData.map((country, index) => (
              <g key={country.name}>
                <circle
                  cx={country.x}
                  cy={country.y}
                  r={Math.sqrt(country.intensity) / 2}
                  fill={`rgba(239, 68, 68, ${country.intensity / 100})`}
                  className="transition-all duration-300 hover:r-8"
                />
                <text
                  x={country.x}
                  y={country.y - Math.sqrt(country.intensity) / 2 - 2}
                  textAnchor="middle"
                  fontSize="2"
                  fill="#374151"
                  className="font-medium"
                >
                  {(country.businesses / 1000000).toFixed(1)}M
                </text>
              </g>
            ))}
          </svg>
          
          {/* Legend */}
          <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 rounded p-2 text-xs">
            <div className="font-medium mb-1">Business Density</div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-200 rounded"></div>
              <span>Low</span>
              <div className="w-3 h-3 bg-red-400 rounded"></div>
              <span>Medium</span>
              <div className="w-3 h-3 bg-red-600 rounded"></div>
              <span>High</span>
            </div>
          </div>
        </div>
        
        {/* Country stats */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          {countryData.map((country) => (
            <div key={country.name} className="text-center p-2 bg-gray-50 rounded">
              <div className="font-medium text-sm">{country.name}</div>
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
