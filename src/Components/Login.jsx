import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";
import { useNavigate } from 'react-router';


export function Login() {

    const[logindata,setLogindata] = React.useState({
        email:"",
        password:""
    })

 const navigate = useNavigate()
    const handleSubmit = ()=>{
        axios.post("http://localhost:8080/login",logindata).then((res)=>{
          console.log(res.data.user.roles[0])
              if(res.data.user.roles[0]=="user"){
                alert("login is successful !")
                  navigate("/")
              }
              else{
                alert("login is successful !")
                navigate("/admin")
              }

    
        }).catch((e)=>{
            alert("email or password is wrong")
        })
    }

    const handleChange = (e) =>{
    const {id,value} = e.target;
       setLogindata({...logindata , [id]:value})
    }

  
  
    

  return (
    <Box className='inputBox'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField
        id="email"
        label="Email"

        onChange={handleChange}
      />

       <TextField
        id="password"
        label="Password"
        type = "password"
        onChange={handleChange}
      />

       
    <Stack spacing={2} direction="row">
      <Button onClick={handleSubmit} id='inputBtn' variant="contained">SUBMIT</Button>
    </Stack>
       
      
    </Box>
  )
}
