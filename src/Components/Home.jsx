import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import axios from "axios"
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Navbar } from './Navbar';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





export function Home() {

  
  const [age, setAge] = React.useState('');
  const [data,setData] = React.useState([])
  const [page, setPage] = React.useState(1);
  const [city ,setCity] = React.useState("")
  const [verified ,setVerified ] = React.useState("")
  const [cost,setCost] = React.useState("")
  const [rating,setRating] = React.useState("")

  useEffect(()=>{getData()},[page,city,verified,cost,rating,data])
  const navigate = useNavigate()

  const handleChanges = (event, value) => {
    setPage(value);
  };


  const handleChange1 = (event) => {
    setCity(event.target.value);
  };
  const handleChange2 = (event) => {
    setVerified(event.target.value);
  };
  const handleChange3 = (event) => {
    setCost(event.target.value);
  };
  const handleChange4 = (event) => {
    setRating(event.target.value);
  };
 

  const getData = () => {

    axios.get(`http://localhost:8080/listing?page=${page}&city=${city}&verified=${verified}&cost=${cost}&rating=${rating}`).then((res)=>{setData(res.data)})
  }
  
  return (
    <>

    <Navbar/>

    {/*------------------------------------- Filter Part --------------------------------------------------*/}
    
    <div className="selectTag">

    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="City"
          onChange={handleChange1}
        >
          <MenuItem value={"New Delhi"}>New Delhi</MenuItem>
          <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
          <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Verified</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={verified}
          label="Verified"
          onChange={handleChange2}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
          
        </Select>
      </FormControl>
    </Box>

    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cost Per Day</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cost}
          label="Cost Per Day"
          onChange={handleChange3}
        >
          <MenuItem value={1}>High To Low</MenuItem>
          <MenuItem value={-1}>Low To High</MenuItem>
          
        </Select>
      </FormControl>
    </Box>

    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rating}
          label="Rating"
          onChange={handleChange4}
        >
          <MenuItem value={1}>High To Low</MenuItem>
          <MenuItem value={-1}>Low To High</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    </div>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Pet House</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Capacity</StyledTableCell>
            <StyledTableCell align="right">Cost Per Day</StyledTableCell>
            <StyledTableCell align="right">Verified</StyledTableCell>
            <StyledTableCell align="right">Rating</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((el) => (
            <StyledTableRow key={el._id}>
              <StyledTableCell id='petHome' component="th" scope="row" onClick={() => navigate(`/listing/${el._id}`)}>
                <img id='petImg' src={el.image} />
              </StyledTableCell>
              <StyledTableCell align="right">{el.name}</StyledTableCell>
              <StyledTableCell align="right">{el.city}</StyledTableCell>
              <StyledTableCell align="right">{el.address}</StyledTableCell>
              <StyledTableCell align="right">{el.capacity}</StyledTableCell>
              <StyledTableCell align="right">{el.cost_per_day}</StyledTableCell>
              <StyledTableCell align="right">{el.verified}</StyledTableCell>
              <StyledTableCell align="right">{el.rating}</StyledTableCell>
              
              
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>



    {/* --------------------------------------- Pagination ------------------------------------------------ */}

    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination id="pagination" count={3} page={page} onChange={handleChanges} />
    </Stack>



    </>
  )
}
