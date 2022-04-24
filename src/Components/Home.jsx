import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios"
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

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

  const navigate = useNavigate()
  const [data,setData] = React.useState([])
  useEffect(()=>{getData()},[])

  const getData = () => {

    axios.get("http://localhost:8080/listing").then((res)=>{setData(res.data)})
  }


  return (
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
            <StyledTableRow onClick={() => navigate(`/listing/${el._id}`)} key={el._id}>
              <StyledTableCell id='petHome' component="th" scope="row">
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
  );
}
