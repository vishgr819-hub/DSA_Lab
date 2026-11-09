
import {
  LayoutDashboard,
  BookOpen,
  Layers,
  GitBranch,
  Search,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  activePage: string;
  onNavigate: (page: string) => void;
}

const navigation = [
  {
    title: "WORKSPACE",
    items: [
      { label: "Dashboard", icon: LayoutDashboard },
    ],
  },
  {
    title: "LEARN",
    items: [
      { label: "Algorithms", icon: BookOpen },
      { label: "Data Structures", icon: Layers },
      { label: "Explore", icon: GitBranch },
    ],
  },
];

export default function Sidebar({
  collapsed,
  onToggle,
  activePage,
  onNavigate,
}: SidebarProps) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="brand">
          <div className="brand-icon">D</div>
          {!collapsed && <span>DSA<span className="brand-accent">LAB</span></span>}
        </div>

        <button className="sidebar-toggle" onClick={onToggle}>
          {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
        </button>
      </div>

      <div className="sidebar-search">
        <Search size={17} />
        {!collapsed && <span>Search topics...</span>}
        {!collapsed && <kbd>⌘ K</kbd>}
      </div>

      <nav className="sidebar-nav">
        {navigation.map((group) => (
          <div className="nav-group" key={group.title}>
            {!collapsed && (
              <p className="nav-group-title">{group.title}</p>
            )}

            {group.items.map((item) => {
              const Icon = item.icon;
              const active = activePage === item.label;

              return (
                <button
                  key={item.label}
                  className={`nav-item ${active ? "active" : ""}`}
                  onClick={() => onNavigate(item.label)}
                  title={collapsed ? item.label : undefined}
                >
                  <Icon size={19} />
                  {!collapsed && <span>{item.label}</span>}
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-footer-icon">?</div>
        {!collapsed && <span>Help & Documentation</span>}
      </div>
    </aside>
  );
}
