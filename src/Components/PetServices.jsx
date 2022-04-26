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
import { Navbar } from './Navbar';

export function PetServices() {
let id = JSON.parse(localStorage.getItem("user-id"))
console.log(id)
    const [petcreate ,setPetcreate] = useState({

        imageUrl : "",
        name : "",
        limit : "",
        size : "",
        sleep : "",
        area : "",
        emergency : "",
        walks : "",
        category : "",
        pet_id : id 
    })
  
    const handleChange = (e) =>{

      const {id,value} = e.target;
      setPetcreate({...petcreate, [id] : value})

    }

    const handleSubmit = () => {

      axios.post("https://pethouse-app.herokuapp.com/listing/create/add", petcreate).then((res)=>
      { console.log(res) })
    }
  console.log(petcreate)
  return (

    <>
    <Navbar />
    <Box className='inputBox'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

        <TextField
        id="imgUrl"
        label="Image Url"
        onChange={handleChange}
      />

       <TextField
        id="name"
        label="Owner Name"
        onChange={handleChange}
      />

        <TextField
        id="limit"
        label="Pets Limit"
        onChange={handleChange}
      />

        <TextField
        id="size"
        label="Pets Size Accepted"
        onChange={handleChange}
      />

        <TextField
        id="sleep"
        label="Sleep Area"
        onChange={handleChange}
      />

        <TextField
        id="area"
        label="Outside Area"
        onChange={handleChange}
      />

        <TextField
        id="emergency"
        label="Emergency Transport"
        onChange={handleChange}
      /> 

        <TextField
        id="walks"
        label="Walks"
        onChange={handleChange}
      /> <br />


    <FormControl id="formIs">
      <FormLabel id="demo-row-radio-buttons-group-label">Category</FormLabel>
      <RadioGroup id='category'
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value={"dog"} onClick={(e)=>setPetcreate({...petcreate, "category":e.target.value})} control={<Radio />} label="Dog" />
        <FormControlLabel value={"cat"} onClick={(e)=>setPetcreate({...petcreate, "category":e.target.value})} control={<Radio />} label="Cat" />
        <FormControlLabel value={"rabbit"} onClick={(e)=>setPetcreate({...petcreate, "category":e.target.value})} control={<Radio />} label="Rabbit" />
      </RadioGroup>
    </FormControl><br /><br />

    <Stack spacing={2} direction="row">
      <Button onClick={handleSubmit} id='inputBtn' variant="contained">SUBMIT</Button>
    </Stack>
       
      
    </Box>
    </>
  )
}
