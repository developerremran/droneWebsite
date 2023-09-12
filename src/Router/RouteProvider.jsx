import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainHomeLayout from "../Layout/MainHomeLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainHomeLayout></MainHomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;
