
import { useState } from "react";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./features/dashboard/Dashboard";

const pageInfo: Record<string, { title: string; subtitle: string }> = {
  Dashboard: {
    title: "Dashboard",
    subtitle: "DSA ISN'T THAT DEEP.",
  },
  "Data Structures": {
    title: "Data Structures",
    subtitle: "Pick your structure. Let's get organised.",
  },
  Algorithms: {
    title: "Algorithms",
    subtitle: "Logic, problem-solving and a little bit of magic.",
  },
  Explore: {
    title: "Explore",
    subtitle: "There's more to DSA than meets the eye.",
  },
};

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const currentPage = pageInfo[activePage] ?? pageInfo.Dashboard;

  return (
    <AppLayout
      title={currentPage.title}
      subtitle={currentPage.subtitle}
      activePage={activePage}
      onNavigate={setActivePage}
    >
      {activePage === "Dashboard" ? (
        <Dashboard onNavigate={setActivePage} />
      ) : (
        <div className="placeholder-page">
          <span className="section-eyebrow">COMING UP IN THE LAB</span>
          <h2>{activePage}</h2>
          <p>
            We're getting things ready. Good things take a little debugging.
          </p>
          <button
            className="hero-button"
            onClick={() => setActivePage("Dashboard")}
          >
            Back to dashboard
          </button>
        </div>
      )}
    </AppLayout>
  );
}

export default App;
