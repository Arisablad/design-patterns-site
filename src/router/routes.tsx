import {createBrowserRouter} from "react-router-dom";
import ErrorBoundary from "@/utils/ErrorBoundary.tsx";
import HomePage from "@/pages/HomePage.tsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: (
                <HomePage />
        ),
        errorElement: <ErrorBoundary />,
        // children: [
        //     {
        //         path: "/home",
        //         element: <HomePage />,
        //     },
        // ],
    },
]);

export default routes;
