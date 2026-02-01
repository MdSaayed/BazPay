import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import Features from "../pages/Features";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Licenses from "../pages/Licenses";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfServices from "../pages/TermsOfServices";
import PricingDetails from "../pages/PricingDetails";
import BlogDetails from "../pages/BlogDetails";
import { loadSingleBlogData, LoadSinglePricingData } from "./Loader";


const router = createBrowserRouter([
    {
        path: "/", // Root path
        element: <Layout />, // Main layout wrapper
        errorElement: <Error />, // Fallback error page
        children: [
            { path: '/', element: <Home /> },
            { path: '/features', element: <Features /> },
            { path: '/about', element: <About /> },
            { path: '/blog', element: <Blog /> },
            { path: '/pricing', element: <Pricing /> },
            { path: '/contact', element: <Contact /> },
            { path: '/licenses', element: <Licenses /> },
            { path: '/privacypolicy', element: <PrivacyPolicy /> },
            { path: '/terms', element: <TermsOfServices /> },
            {
                path: "/pricing/:id",
                element: <PricingDetails />,
                loader: LoadSinglePricingData // ✅ Using the reusable loader
            }, // Dynamic Pricing Details
             
            { 
                path: '/blog/:id', 
                element: <BlogDetails /> ,
                loader:loadSingleBlogData
            } // Dynamic Blog Details 
        ]
    }
]);

export default router;



