import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export function PetCreate() {

  const navigate = useNavigate();

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
  
    const handleChange = (e) =>{

      const {id,value} = e.target;
      setCreate({...create, [id] : value})

    }

    const handleSubmit = () => {

      axios.post("http://localhost:8080/listing/create", create).then((res)=>
      {localStorage.setItem("user-id",JSON.stringify(res.data._id))})
      navigate("/listing/create/details")
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

    {/* <FormControl id="formIs">
      <FormLabel id="demo-row-radio-buttons-group-label">Size</FormLabel>
      <RadioGroup id='radioBtn1'
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="1" control={<Radio />} label="1-5" />
        <FormControlLabel value="5" control={<Radio />} label="5-10" />
        <FormControlLabel value="10" control={<Radio />} label="10-20" />
        <FormControlLabel value="20" control={<Radio />} label="20-30" />
       
      </RadioGroup>
    </FormControl> <br /> 

    <FormControl id="formIs">
      <FormLabel id="demo-row-radio-buttons-group-label">Category</FormLabel>
      <RadioGroup id='radioBtn'
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="dog" control={<Radio />} label="Dog" />
        <FormControlLabel value="cat" control={<Radio />} label="Cat" />
        <FormControlLabel value="rabbit" control={<Radio />} label="Rabbit" />
      </RadioGroup>
    </FormControl><br /><br /> */}

    
  



      


    <Stack spacing={2} direction="row">
      <Button onClick={handleSubmit} id='inputBtn' variant="contained">SUBMIT</Button>
    </Stack>
       
      
    </Box>
  )
}
