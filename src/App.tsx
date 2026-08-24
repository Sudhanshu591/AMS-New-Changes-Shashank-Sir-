import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { scrollToTop } from "./lib/lenis";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import InsightsPage from "./pages/InsightsPage";

/** Reset scroll position whenever the routed page changes. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [pathname]);
  return null;
}

export default function App() {
  useSmoothScroll();

  return (
    <div className="relative">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/insights" element={<InsightsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
