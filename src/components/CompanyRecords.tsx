
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Building, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { CompanyDetailModal } from './CompanyDetailModal';

export interface Company {
  id: string;
  name: string;
  size: 'Small' | 'Medium' | 'Large';
  country: 'United States' | 'Mexico' | 'Colombia' | 'Egypt';
  businessType: string;
  currentRevenue: number;
  revenueHistory: { year: number; revenue: number }[];
  decisionMaker: string;
  proprietaryScore: number;
  bureauScore: number;
  address: string;
  foundedYear: number;
}

const sampleCompanies: Company[] = [
  {
    id: '1',
    name: 'TechStart Solutions',
    size: 'Small',
    country: 'United States',
    businessType: 'Technology',
    currentRevenue: 450000,
    revenueHistory: [
      { year: 2022, revenue: 280000 },
      { year: 2023, revenue: 365000 },
      { year: 2024, revenue: 450000 }
    ],
    decisionMaker: 'Sarah Martinez',
    proprietaryScore: 78,
    bureauScore: 685,
    address: 'Austin, Texas',
    foundedYear: 2019
  },
  {
    id: '2',
    name: 'Café Bogotá',
    size: 'Small',
    country: 'Colombia',
    businessType: 'Food & Beverage',
    currentRevenue: 120000,
    revenueHistory: [
      { year: 2022, revenue: 95000 },
      { year: 2023, revenue: 110000 },
      { year: 2024, revenue: 120000 }
    ],
    decisionMaker: 'Carlos Hernández',
    proprietaryScore: 65,
    bureauScore: 620,
    address: 'Bogotá, Colombia',
    foundedYear: 2018
  },
  {
    id: '3',
    name: 'Pyramid Construction Co.',
    size: 'Medium',
    country: 'Egypt',
    businessType: 'Construction',
    currentRevenue: 890000,
    revenueHistory: [
      { year: 2022, revenue: 1200000 },
      { year: 2023, revenue: 950000 },
      { year: 2024, revenue: 890000 }
    ],
    decisionMaker: 'Ahmed Hassan',
    proprietaryScore: 72,
    bureauScore: 640,
    address: 'Cairo, Egypt',
    foundedYear: 2015
  },
  {
    id: '4',
    name: 'Guadalajara Retail Hub',
    size: 'Medium',
    country: 'Mexico',
    businessType: 'Retail',
    currentRevenue: 680000,
    revenueHistory: [
      { year: 2022, revenue: 580000 },
      { year: 2023, revenue: 625000 },
      { year: 2024, revenue: 680000 }
    ],
    decisionMaker: 'Maria Rodriguez',
    proprietaryScore: 81,
    bureauScore: 720,
    address: 'Guadalajara, Mexico',
    foundedYear: 2017
  },
  {
    id: '5',
    name: 'HealthCare Plus',
    size: 'Small',
    country: 'United States',
    businessType: 'Healthcare',
    currentRevenue: 320000,
    revenueHistory: [
      { year: 2022, revenue: 290000 },
      { year: 2023, revenue: 305000 },
      { year: 2024, revenue: 320000 }
    ],
    decisionMaker: 'Dr. Jennifer Smith',
    proprietaryScore: 85,
    bureauScore: 750,
    address: 'Denver, Colorado',
    foundedYear: 2020
  }
];

export const CompanyRecords = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const getRevenuetrend = (company: Company) => {
    const current = company.revenueHistory[company.revenueHistory.length - 1]?.revenue || 0;
    const previous = company.revenueHistory[company.revenueHistory.length - 2]?.revenue || 0;
    
    if (current > previous) return { icon: TrendingUp, color: 'text-green-600', text: 'Growing' };
    if (current < previous) return { icon: TrendingDown, color: 'text-red-600', text: 'Declining' };
    return { icon: Minus, color: 'text-gray-600', text: 'Stable' };
  };

  const getSizeColor = (size: string) => {
    switch (size) {
      case 'Small': return 'bg-blue-100 text-blue-800';
      case 'Medium': return 'bg-green-100 text-green-800';
      case 'Large': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Sample Company Records</span>
            <Badge variant="outline" className="text-sm">
              Showing 5 of 30M+ records
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sampleCompanies.map((company) => {
              const trend = getRevenuetrend(company);
              const TrendIcon = trend.icon;
              
              return (
                <div 
                  key={company.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Building className="h-5 w-5 text-gray-600" />
                        <h3 className="font-semibold text-lg">{company.name}</h3>
                        <Badge className={getSizeColor(company.size)}>
                          {company.size}
                        </Badge>
                        <span className="text-sm text-gray-600">
                          {company.country}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Revenue:</span>
                          <div className="font-medium">
                            ${company.currentRevenue.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">Trend:</span>
                          <div className={`flex items-center gap-1 ${trend.color}`}>
                            <TrendIcon className="h-4 w-4" />
                            <span className="font-medium">{trend.text}</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">Credit Score:</span>
                          <div className="font-medium">{company.bureauScore}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Decision Maker:</span>
                          <div className="font-medium">{company.decisionMaker}</div>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedCompany(company)}
                      className="ml-4"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 text-center">
            <Button variant="outline">
              Load More Records
            </Button>
          </div>
        </CardContent>
      </Card>

      {selectedCompany && (
        <CompanyDetailModal 
          company={selectedCompany}
          isOpen={!!selectedCompany}
          onClose={() => setSelectedCompany(null)}
        />
      )}
    </>
  );
};
