import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

const TableData2 = () => {
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
    { period: 2212232, number: 2 },
    { period: 2212244, number: 5 },
    { period: 3212232, number: 7 },
    { period: 5621223, number: 2 },
    { period: 2212232, number: 9 },
    { period: 9212232, number: 1 },
    { period: 112232, number: 0 },
    { period: 2212232, number: 2 },
    { period: 3335555, number: 5 },
    { period: 2212232, number: 4 },

    
  ];
  const slicedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div>
      <TableContainer component={Paper} sx={{ marginTop: 2 }} >
        <Table  aria-label="custom table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: '#383535', fontWeight: 'bold' }}>Period</TableCell>
              <TableCell sx={{ backgroundColor: '#383535', fontWeight: 'bold' }}>Number</TableCell>
              
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
    </div>
  );
};

export default TableData2;
