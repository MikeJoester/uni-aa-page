import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name Lecturer', minWidth: 170 },
  { id: 'course', label: 'Course', minWidth: 100 },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'title',
    label: 'Title',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'content',
    label: 'Content',
    minWidth: 170,
    align: 'left',
  },
];

function createData(name, course, date, title, content) {

  return { name, course, date, title, content };
}

const rows = [
  createData('Nguyen The Xuan Ly', 'Networking and Concurrency', '21/07/2022', 'no class','asdasdasdzxc'),
  createData('Tran The Vu', 'Mobile Programming', '13/07/2022', 'no class','asdasdasdzxc'),
  createData('Richard Sharp', 'Basic Web Design', '11/07/2022', 'no class','asdasdasdzxc'),
  createData('Tran Ngoc Anh', 'Data structure and Algorithms', '03/07/2022', 'no class','asdasdasdzxc'),
  createData('Dang Thi Phuong Thao', 'System Engineering Project - Practice', '21/06/2022', 'no class','asdasdasdzxc'),
  createData('Tran The Vu', 'Mobile Programming', '11/06/2022', 'no class','asdasdasdzxc'),
  createData('Tran The Vu', 'Mobile Programming', '05/06/2022', 'no class','asdasdasdzxc'),
  createData('Richard Sharp', 'Basic Web Design', '11/05/2022', 'no class','asdasdasdzxc'),
  createData('Tran Ngoc Anh', 'Data structure and Algorithms', '11/05/2022', 'no class','asdasdasdzxc'),
  createData('Richard Sharp', 'Basic Web Design', '11/05/2022', 'no class','asdasdasdzxc'),
  createData('Tran Ngoc Anh', 'Data structure and Algorithms', '11/05/2022', 'no class','asdasdasdzxc'),
  createData('Dang Thi Phuong Thao', 'System Engineering Project - Practice', '11/05/2022', 'no class','asdasdasdzxc'),
  createData('Tran The Vu', 'Mobile Programming', '11/05/2022', 'no class','asdasdasdzxc'),
  createData('Richard Sharp', 'Basic Web Design', '11/05/2022', 'no class','asdasdasdzxc'),
  createData('Tran Ngoc Anh', 'Data structure and Algorithms', '11/05/2022', 'no class','asdasdasdzxc'),
  createData('Dang Thi Phuong Thao', 'System Engineering Project - Practice', '11/05/2022', 'no class','asdasdasdzxc'),
  createData('Tran The Vu', 'Mobile Programming', '11/05/2022', 'no class','asdasdasdzxc'),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.course}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}