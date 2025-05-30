
import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { WorldMap } from '../components/WorldMap';
import { BusinessTypesChart } from '../components/BusinessTypesChart';
import { RevenueAnalytics } from '../components/RevenueAnalytics';
import { CompanyRecords } from '../components/CompanyRecords';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, DollarSign, Globe, TrendingUp } from 'lucide-react';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Businesses</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">30.2M</div>
              <p className="text-xs text-muted-foreground">
                +2.1% from last year
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$3.9T</div>
              <p className="text-xs text-muted-foreground">
                +8.3% from last year
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Countries</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                US, Colombia, Mexico, Egypt
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Growth</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.4%</div>
              <p className="text-xs text-muted-foreground">
                YoY revenue growth
              </p>
            </CardContent>
          </Card>
        </div>

        {/* World Map */}
        <WorldMap />

        {/* Business Types and Revenue Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BusinessTypesChart />
          <div>
            <RevenueAnalytics />
          </div>
        </div>

        {/* Company Records */}
        <CompanyRecords />
      </div>
    </DashboardLayout>
  );
};

export default Index;
