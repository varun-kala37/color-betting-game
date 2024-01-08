import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

const Tabledata = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const data = [
    { period: 2212232, number: 2, size: 'Big', color:'red' },
    { period: 2212244, number: 5, size: 'Small', color:'green' },
    { period: 3212232, number: 7, size: 'Big', color:'red' },
    { period: 5621223, number: 2, size: 'Small', color:'green' },
    { period: 2212232, number: 9, size: 'Big', color:'red' },
    { period: 9212232, number: 1, size: 'Small', color:'green' },
    { period: 112232, number: 0, size: 'Big', color:'red' },
    { period: 2212232, number: 2, size: 'Small', color:'green' },
    { period: 3335555, number: 5, size: 'Big', color:'red' },
    { period: 2212232, number: 4, size: 'Small', color:'green' },

    
  ];
  const slicedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <TableContainer component={Paper} sx={{ marginTop: 2 ,justifyContent:'center'}} >
        <Table  aria-label="custom table" >
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: '#383535', fontWeight: 'bold', color:'#f1efef' }}>Period</TableCell>
              <TableCell sx={{ backgroundColor: '#383535', fontWeight: 'bold', color:'#f1efef' }}>Number</TableCell>
              <TableCell sx={{ backgroundColor: '#383535', fontWeight: 'bold', color:'#f1efef' }}>Size</TableCell>
              <TableCell sx={{ backgroundColor: '#383535', fontWeight: 'bold' , color:'#f1efef'}}>Color</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedData.map((row, index) => (
              <TableRow
                key={index}
                sx={{ backgroundColor: index % 2 === 0 ? '#4d4e7c' : '#383535' }}
              >
                <TableCell>{row.period}</TableCell>
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.size}</TableCell>
                <TableCell>{row.color}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

export default Tabledata;
