import { Router, Route, Switch } from "wouter";
import { useBrowserLocation } from "wouter/use-browser-location";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { useEffect, useState } from "react";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Now from "@/components/Now";
import Interests from "@/components/Interests";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "@/pages/privacy-policy";
import Terms from "@/pages/terms";
import TheWaySupport from "@/pages/the-way-support";

function useNormalizedLocation() {
  const [location, navigate] = useBrowserLocation();
  const normalized =
    location.length > 1 && location.endsWith("/")
      ? location.slice(0, -1)
      : location;
  return [normalized, navigate] as ReturnType<typeof useBrowserLocation>;
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useState<"light" | "dark">(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return <>{children}</>;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Now />
        <Interests />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router hook={useNormalizedLocation}>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/the-way/privacy" component={PrivacyPolicy} />
            <Route path="/the-way/terms" component={Terms} />
            <Route path="/the-way/support" component={TheWaySupport} />
            <Route path="/:rest*" component={NotFound} />
          </Switch>
        </Router>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
