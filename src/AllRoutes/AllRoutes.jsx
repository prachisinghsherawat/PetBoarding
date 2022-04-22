import { Home } from "../Components/Home"
import { PetCreate } from "../Components/PetCreate"
import { PetDetails } from "../Components/PetDetails"
import { Route , Routes } from "react-router"


export const AllRoutes = () => {

   return(
        <Routes>
            <Route path ="/" element ={<Home />}></Route>
            <Route path ="/listing/create" element ={<PetCreate />}></Route>
            <Route path ="/listing/:id" element ={<PetDetails />}></Route>
        </Routes>  
    )
}