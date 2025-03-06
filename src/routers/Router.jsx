import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import HomeV1 from "../pages/HomeV1";
import Features from "../pages/Features";
import About from "../pages/About";
import Blog from "../pages/Blog";




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
        ]
    },
]);

export default router;