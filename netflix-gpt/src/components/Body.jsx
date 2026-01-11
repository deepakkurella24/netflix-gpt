import {createBrowserRouter,RouterProvider} from "react-router-dom";
import SignUp from "./SignUp";
import NavBar from "./NavBar";
import Browse from "./Browse";
const Body=()=>{
    const router=createBrowserRouter([
        {
            path:'/',
            element:<SignUp/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
       
    ])
    return (
        <div>
             
            <RouterProvider router={router}/>
               
           
        </div>
    )
}
export default Body;