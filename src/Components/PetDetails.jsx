import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"


export const PetDetails = () => {
    const [data, setData] = useState({})
    const {id} = useParams()
    useEffect(()=>{getData()},[])

    const getData = () => {

        axios.get(`https://pethouse-app.herokuapp.com/listing/add/${id}`).then((res)=>{setData(res.data)})
    }
    console.log(data)

    return(
        <div className="flexBox">
           <div className="leftDiv">
               <img id="petImg" src={data.imgUrl} />
           </div>
           <div className="rightDiv">
               <h1> Owner Name : {data.name}</h1>
               <h1> Number Of Pets : {data.limit}</h1>
               <h1> Accepted Pet Size : {data.size}</h1>
               <h1> Walks Per Day : {data.walks}</h1>
               <h1> Emergency Transport : {data.emergency}</h1>
               <h1> Category of Pet : {data.category}</h1>
           </div>
        </div>
    )
}