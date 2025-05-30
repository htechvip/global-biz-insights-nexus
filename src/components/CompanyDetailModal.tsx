
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Building, MapPin, Calendar, User, CreditCard, TrendingUp } from 'lucide-react';
import { Company } from './CompanyRecords';

interface CompanyDetailModalProps {
  company: Company;
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyDetailModal = ({ company, isOpen, onClose }: CompanyDetailModalProps) => {
  const getSizeColor = (size: string) => {
    switch (size) {
      case 'Small': return 'bg-blue-100 text-blue-800';
      case 'Medium': return 'bg-green-100 text-green-800';
      case 'Large': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 750) return 'text-green-600';
    if (score >= 650) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProprietaryScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Building className="h-6 w-6" />
            {company.name}
            <Badge className={getSizeColor(company.size)}>
              {company.size} Business
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Company Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">Business Type:</span>
                <span className="font-medium">{company.businessType}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">Headquarters:</span>
                <span className="font-medium">{company.address}, {company.country}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">Founded:</span>
                <span className="font-medium">{company.foundedYear}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">Decision Maker:</span>
                <span className="font-medium">{company.decisionMaker}</span>
              </div>
            </CardContent>
          </Card>

          {/* Credit Scores */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Credit Scores
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="text-sm text-gray-600">Proprietary Credit Score</span>
                <span className={`text-xl font-bold ${getProprietaryScoreColor(company.proprietaryScore)}`}>
                  {company.proprietaryScore}/100
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="text-sm text-gray-600">Credit Bureau Score</span>
                <span className={`text-xl font-bold ${getScoreColor(company.bureauScore)}`}>
                  {company.bureauScore}
                </span>
              </div>

              <div className="pt-2">
                <div className="text-sm text-gray-600 mb-2">Credit Risk Assessment</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      company.bureauScore >= 750 ? 'bg-green-500' :
                      company.bureauScore >= 650 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${(company.bureauScore / 850) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {company.bureauScore >= 750 ? 'Low Risk' :
                   company.bureauScore >= 650 ? 'Medium Risk' : 'High Risk'}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue History Chart */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Revenue History (Last 3 Years)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={company.revenueHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis 
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                  />
                  <Tooltip 
                    formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
                    labelFormatter={(label) => `Year ${label}`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            {/* Revenue Summary */}
            <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">
                  ${company.currentRevenue.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Current Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">
                  {company.revenueHistory.length > 1 ? 
                    `${(((company.revenueHistory[company.revenueHistory.length - 1].revenue - 
                         company.revenueHistory[0].revenue) / 
                         company.revenueHistory[0].revenue) * 100).toFixed(1)}%` : 'N/A'}
                </div>
                <div className="text-sm text-gray-600">3-Year Growth</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-600">
                  ${Math.round(company.revenueHistory.reduce((sum, year) => sum + year.revenue, 0) / company.revenueHistory.length).toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Avg Annual Revenue</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
