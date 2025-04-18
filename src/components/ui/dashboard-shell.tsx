"use client";

import * as React from "react";
import { PanelLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Icons } from "../icons";
import { ScrollArea } from "./scroll-area";

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> { }

const sidebarItems = [
  {
    label: "Dashboard",
    icon: Icons.home,
    href: "/dashboard",
  },
  {
    label: "Patients",
    icon: Icons.users,
    href: "/dashboard/patients",
  },
  {
    label: "New Prescription",
    icon: Icons.filePlus,
    href: "/dashboard/new-prescription",
  },
  {
    label: "Rx Requests",
    icon: Icons.rotateCw,
    href: "/dashboard/rx-requests",
  },
  {
    label: "Rx History",
    icon: Icons.file,
    href: "/dashboard/rx-history",
  },
  {
    label: "Settings",
    icon: Icons.settings,
    href: "/dashboard/settings",
  },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex h-screen antialiased text-foreground">
        <Sidebar variant="inset" collapsible="icon">
          <SidebarHeader className="!border-b">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-md border-2 bg-secondary">
              <span className="font-bold text-xl">RxC</span>
            </div>
          </SidebarHeader>
          <SidebarSeparator />
          <SidebarContent>
            <ScrollArea>
              <SidebarMenu>
                {sidebarItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </ScrollArea>
          </SidebarContent>
          <SidebarFooter>
            <SidebarSeparator />
            <div className="flex items-center justify-center">
              <Button variant="outline" size="icon">
                <Icons.settings className="h-4 w-4" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1">{children}</div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
