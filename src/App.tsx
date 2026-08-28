import { Route, Switch } from "wouter";

import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import AdditionalServicesPage from "@/pages/AdditionalServicesPage";
import FutureRoutePage from "@/pages/FutureRoutePage";
import NotFound from "@/pages/NotFound";
import PortfolioCaseStudyPage from "@/pages/PortfolioCaseStudyPage";
import PortfolioPage from "@/pages/PortfolioPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import SampleReportPage from "@/pages/SampleReportPage";
import TermsAndConditions from "@/pages/TermsAndConditions";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/privacy"} component={PrivacyPolicy} />
      <Route path={"/terms"} component={TermsAndConditions} />
      <Route path={"/sample-report"} component={SampleReportPage} />
      <Route path={"/portfolio"} component={PortfolioPage} />
      <Route path={"/portfolio/cwalts"}>
        {() => <PortfolioCaseStudyPage slug="cwalts" />}
      </Route>
      <Route path={"/portfolio/badgr-bolt"}>
        {() => <PortfolioCaseStudyPage slug="badgr-bolt" />}
      </Route>
      <Route path={"/portfolio/badgr-harness"}>
        {() => <PortfolioCaseStudyPage slug="badgr-harness" />}
      </Route>
      <Route path={"/portfolio/badgr-ai-ops"}>
        {() => <PortfolioCaseStudyPage slug="badgr-ai-ops" />}
      </Route>
      <Route path={"/portfolio/web-ops"}>
        {() => <PortfolioCaseStudyPage slug="web-ops" />}
      </Route>
      <Route path={"/partners"}>
        {() => <FutureRoutePage title="Partners" routePath="/partners" />}
      </Route>
      <Route path={"/investors"}>
        {() => <FutureRoutePage title="Investors" routePath="/investors" />}
      </Route>
      <Route
        path={"/additional-services"}
        component={AdditionalServicesPage}
      />
      <Route path={"/404"} component={NotFound} />
      {/* Future route pattern guide:
          <Route path={"/partners"} component={PartnersPage} />
          <Route path={"/investors"} component={InvestorsPage} />
          <Route path={"/additional-services"} component={AdditionalServicesPage} />
          Add the page component above, then wire the footer/nav link below. */}
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
