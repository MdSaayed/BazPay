import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import HomeV1 from "../pages/HomeV1";
import Features from "../pages/Features";




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
        ]
    },
]);

export default router;