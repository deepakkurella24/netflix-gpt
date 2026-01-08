import {createBrowserRouter,RouterProvider} from "react-router-dom";
import SignUp from "./SignUp";
import NavBar from "./NavBar";
const Body=()=>{
    const router=createBrowserRouter([
        {
            path:'/',
            element:<SignUp />
        }
       
    ])
    return (
        <div>
            <NavBar />
            <RouterProvider router={router} />
        </div>
    )
}
export default Body;