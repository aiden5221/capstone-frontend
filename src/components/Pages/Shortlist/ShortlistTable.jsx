import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination } from "@mui/material"
import { useState } from "react";
import TableItem from "./TableItem"
function ShortlistTable({ shortlist }) {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(e.target.value)
        setPage(0);
    }

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
        console.log(newPage)
    }

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead sx={{backgroundColor:'#CDD0D6'}}>
                        <TableCell/>
                        <TableCell sx={{fontWeight:'700'}}>Name</TableCell>
                        <TableCell sx={{fontWeight:'700'}}>Location</TableCell>
                        <TableCell sx={{fontWeight:'700'}}>Email</TableCell>
                        <TableCell sx={{fontWeight:'700'}}>Score</TableCell>
                        <TableCell sx={{fontWeight:'700'}}>Personality Score</TableCell>
                    </TableHead>
                    <TableBody>
                        {shortlist &&
                            shortlist
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                            <TableItem row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={ [5,10,25] }
                count={shortlist.length}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                onPageChange={handleChangePage}
                page={page}
                component='div'
            />
        </Paper>
    )
}

export default ShortlistTable;