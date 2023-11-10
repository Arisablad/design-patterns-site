import {createBrowserRouter} from "react-router-dom";
import ErrorBoundary from "@/utils/ErrorBoundary.tsx";
import HomePage from "@/pages/HomePage.tsx";
import Observer from "@/pages/Observer.tsx";
import CommandPattern from "@/pages/CommandPattern.tsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: (
                <HomePage />
        ),
        errorElement: <ErrorBoundary />,
    },
    {
        path: "/command-pattern",
        element: <CommandPattern />,
    },
    {
        path: "/observer",
        element: <Observer />,
    },
]);

export default routes;
