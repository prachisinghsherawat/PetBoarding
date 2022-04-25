
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
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
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





export function Admin() {

  
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


//  ---------------------------------------- Navbar ----------------------------------------------------------

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  // --------------------------------------------- Delete the Row ------------------------------------------------

  const Delete = (id) => {

    axios.delete(`http://localhost:8080/listing/${id}`)
  }
  
  
  return (
    <>

    {/* ---------------------------------------------- Navbar Part ---------------------------------------- */}

    <AppBar id='navbar' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <a href="/">PETBOARDING</a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Button
                sx={{ my: 2, color: 'white', display: 'block' , textDecoration :"none" }}>
                <a href="/">HOME</a>
              </Button>

              <Button
               
                sx={{ my: 2, color: 'white', display: 'block' ,textDecoration :"none" }}>
                <a href="/listing/create">ADD Details</a>
              </Button>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>


    <h2>This is Admin Page</h2>

    {/* -------------------------------------- Filter Part ------------------------------------------------- */}
    
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
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
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
              <StyledTableCell align="right"><button onClick={()=>navigate(`/listing/edit/${el._id}`)}>Edit</button></StyledTableCell>
              <StyledTableCell align="right"><button onClick={()=>{Delete(el._id)}}>Delete</button></StyledTableCell>
              
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>



    {/* ------------------------------------------- Pagination -------------------------------------------- */}

    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination id="pagination" count={3} page={page} onChange={handleChanges} />
    </Stack>



    </>
  )
}
