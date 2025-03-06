import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import HomeV1 from "../pages/HomeV1";
import Features from "../pages/Features";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/homev1',
                element: <HomeV1 />
            },
            {
                path: '/features',
                element: <Features />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/pricing',
                element: <Pricing />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    },
]);

export default router;