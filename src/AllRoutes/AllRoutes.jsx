import { Home } from "../Components/Home"
import { PetCreate } from "../Components/PetCreate"
import { PetDetails } from "../Components/PetDetails"
import { Route , Routes } from "react-router"
import { Signup } from "../Components/Signup"
import { Login } from "../Components/Login"
import { Admin } from "../Components/Admin"
import { PetServices } from "../Components/PetServices"


export const AllRoutes = () => {

   return(
        <Routes>
            <Route path ="/" element ={<Home />}></Route>
            <Route path ="/listing/create" element ={<PetCreate />}></Route>
            <Route path ="/listing/:id" element ={<PetDetails />}></Route>
            <Route path ="/signup" element ={<Signup />}></Route>
            <Route path ="/login" element ={<Login />}></Route>
            <Route path ="/admin" element ={<Admin />}></Route>
            <Route path ="/listing/create/details" element ={<PetServices />}></Route>
        </Routes>  
    )
}