import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Navbar } from './Navbar';

export function Signup() {

    const navigate = useNavigate()

    const [register,setRegister] = useState({
        username : "",
        email : "",
        password : "",
        roles:""
    })
  
    const handleChange = (e) =>{
        let {id,value} = e.target;
        setRegister({...register , [id] : value})

    }

    const handleSubmit = () => {
        axios.post("http://localhost:8080/register",register).then((res) => {
            if(res.data.user.username ){
              alert("registration is successfull !")
                navigate("/login")
            }
            
          console.log(res)

        }).catch(()=>{alert("email already exists !")})
    }
   console.log(register)
  return (

    <>
    <Navbar />

    <h3>Sign Up Page</h3>
    <Box className='inputBox'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField
        id="username"
        label="Username"
        onChange={handleChange}
      />  

      <TextField
        id="email"
        label="Email"
        onChange={handleChange}
      />

       <TextField
        id="password"
        label="Password"
        type="password"
        onChange={handleChange}
      /><br /><br />

       



      <FormLabel id="roles">Roles</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        id="roles"
        name="radio-buttons-group"
      >
        <FormControlLabel onClick={(e)=>{setRegister({...register ,"roles" : e.target.value})}} value= {"user"} control={<Radio />} label="user" />
        <FormControlLabel onClick={(e)=>{setRegister({...register ,"roles" : e.target.value})}} value= {"admin"} control={<Radio />} label="admin" />
       
      </RadioGroup>
   
  


       
    <Stack spacing={2} direction="row">
      <Button onClick={handleSubmit} id='inputBtn' variant="contained">SUBMIT</Button>
    </Stack>
       
      
    </Box>

    </>
  )
}
