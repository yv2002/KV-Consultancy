import { createBrowserRouter } from "react-router-dom";
import Courses from "./components/Courses/Courses";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar/Sidebar";
const router = createBrowserRouter([
 {
    path:"/",
    element:<Sidebar/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/Courses",
            element:<Courses/>
        }
    ]

 }

])
export default router;