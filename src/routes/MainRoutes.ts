import {lazy} from "react";
import Loadable from "../ui-component/Loadable.tsx";

const SamplePage = Loadable(lazy(() => import("../views/sample-page")));

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;