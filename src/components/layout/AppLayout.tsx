
import { useState, type ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface AppLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function AppLayout({
  children,
  title,
  subtitle,
  activePage,
  onNavigate,
}: AppLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        activePage={activePage}
        onNavigate={onNavigate}
      />

      <main className={`main-content ${collapsed ? "expanded" : ""}`}>
        <Topbar title={title} subtitle={subtitle} />

        <div className="page-content">
          {children}
        </div>
      </main>
    </div>
  );
}
