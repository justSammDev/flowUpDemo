import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import Spinner from "./utils/Spinner.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Pricing = lazy(() => import("./pages/Pricing.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Product = lazy(() => import("./pages/Product.jsx"));
const Test = lazy(() => import("./components/Test.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <ScrollToTop />
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/pricing",
    element: (
      <Suspense fallback={<Spinner />}>
        <ScrollToTop />
        <Pricing />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<Spinner />}>
        <ScrollToTop />
        <About />
      </Suspense>
    ),
  },
  {
    path: "/product",
    element: (
      <Suspense fallback={<Spinner />}>
        <ScrollToTop />
        <Product />
      </Suspense>
    ),
  },
  {
    path: "/test",
    element: (
      <Suspense fallback={<Spinner />}>
        <ScrollToTop />
        <Test />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
