
import React from 'react';
import { BarChart3, Globe, Building, DollarSign, Users, TrendingUp } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Global Overview",
    icon: Globe,
    isActive: true,
  },
  {
    title: "Business Types",
    icon: Building,
  },
  {
    title: "Revenue Analytics",
    icon: DollarSign,
  },
  {
    title: "Company Records",
    icon: Users,
  },
  {
    title: "Market Trends",
    icon: TrendingUp,
  },
];

export const DashboardSidebar = () => {
  return (
    <Sidebar className="border-r bg-white">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-lg">SMB Analytics</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    isActive={item.isActive}
                    className="w-full justify-start"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
