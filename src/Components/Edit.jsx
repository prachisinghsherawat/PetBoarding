import { useParams } from "react-router"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


export const Edit = ()=>{
         
    const {id} = useParams();
    
    const [create ,setCreate] = useState({
        image : "",
        name : "",
        city : "",
        address : "",
        capacity : "",
        cost_per_day : "",
        verified : "",
        rating : ""
  
      })
    const [data,setData] = useState({})

    useEffect(()=>{
        getData()
    },[])
    
      const handleChange = (e) =>{

        const {id,value} = e.target;
        setCreate({...create, [id] : value})
  
      }
      const getData = ()=>{
          axios.get(`http://localhost:8080/listing/${id}`).then((res)=>{
         
            
      
      
          document.getElementById("image").value=res.data.image
          document.getElementById("name").value=res.data.name
          document.getElementById("city").value=res.data.city
          document.getElementById("address").value=res.data.address
          document.getElementById("capacity").value=res.data.capacity
          document.getElementById("cost_per_day").value=res.data.cost_per_day
          document.getElementById("verified").value=res.data.verified
          document.getElementById("rating").value=res.data.rating
      })
    }
      
       
    
      const Editing = (id)=>{
          console.log(id)
          axios.patch(`http://localhost:8080/listing/${id}`,create).then((res)=>{
              console.log(res.data)
          })
      }
    return(
      data?  <Box className='inputBox'
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
  
          <TextField
          id="image"
          label="Image Url"
          onChange={handleChange}
        />  
  
        <TextField
          id="name"
          label="Name"
          onChange={handleChange}
        />
  
         <TextField
          id="city"
          label="City"
          onChange={handleChange}
        />
  
          <TextField
          id="address"
          label="Address"
          onChange={handleChange}
        />
  
          <TextField
          id="capacity"
          label="Capacity"
          onChange={handleChange}
        />
  
          <TextField
          id="cost_per_day"
          label="Cost per day"
          onChange={handleChange}
        />
  
          <TextField
          id="verified"
          label="Verified"
          onChange={handleChange}
        />
  
          <TextField
          id="rating"
          label="Rating"
          onChange={handleChange}
        /> 
  
          {/* <TextField
          id="outlined-name"
          label="Walks"
          onChange={handleChange}
        />  */}
  
      
  
      
    
  
  
  
        
  
  
      <Stack spacing={2} direction="row">
        <Button onClick={()=>Editing(id)} id='inputBtn' variant="contained">SUBMIT</Button>
      </Stack>
         
        
      </Box>
      :""
    )
}