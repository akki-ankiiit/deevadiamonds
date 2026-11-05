import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Emblem } from "./components/brand/Logo";
import HomePage from "./pages/HomePage";
import { usePageMotion, useSmoothScroll } from "./hooks/useMotion";

const CollectionsPage = lazy(() => import("./pages/CollectionsPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const PiecePage = lazy(() => import("./pages/PiecePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const GuidePage = lazy(() => import("./pages/GuidePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

/** Routes whose hero is dark, so the header can sit transparently over it. */
const overlayRoutes = [
  /^\/$/,
  /^\/about\/?$/,
  /^\/lab-grown-diamonds\/?$/,
  /^\/collections\/[^/]+\/?$/,
];
const knownRoutes = [
  /^\/$/,
  /^\/about\/?$/,
  /^\/lab-grown-diamonds\/?$/,
  /^\/collections(\/[^/]+){0,2}\/?$/,
  /^\/contact\/?$/,
  /^\/(privacy|terms|exchange-and-buyback)\/?$/,
];

function Loading() {
  return (
    <div className="route-loading" role="status">
      <Emblem className="route-loading__emblem" />
      <span className="sr-only">Loading</span>
    </div>
  );
}

function PageMotion() {
  usePageMotion();
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  useSmoothScroll();
  const known = knownRoutes.some((r) => r.test(pathname));
  const overlay = !known || overlayRoutes.some((r) => r.test(pathname));

  return (
    <>
      <Header overlay={overlay} />
      <main id="main" key={pathname} className="page-enter" tabIndex={-1}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/collections/:category" element={<CategoryPage />} />
            <Route
              path="/collections/:category/:piece"
              element={<PiecePage />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/lab-grown-diamonds" element={<GuidePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<LegalPage type="privacy" />} />
            <Route path="/terms" element={<LegalPage type="terms" />} />
            <Route
              path="/exchange-and-buyback"
              element={<LegalPage type="exchange" />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <PageMotion />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
