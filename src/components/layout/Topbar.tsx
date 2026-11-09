
import { Search, Command } from "lucide-react";

interface TopbarProps {
  title: string;
  subtitle: string;
}

export default function Topbar({ title, subtitle }: TopbarProps) {
  return (
    <header className="topbar">
      <div className="topbar-heading">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="topbar-actions">
        <div className="global-search">
          <Search size={16} />
          <span>Find something...</span>
          <kbd>
            <Command size={11} /> K
          </kbd>
        </div>

        <div className="user-avatar">V</div>
      </div>
    </header>
  );
}
