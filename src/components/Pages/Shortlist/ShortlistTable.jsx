import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination } from "@mui/material"
import { useState } from "react";
import TableItem from "./TableItem"
function ShortlistTable({ shortlist, headings, isJobShortlist }) {
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
                        {
                            headings.map((heading) => (
                                <TableCell sx={{fontWeight:'700'}}>{heading}</TableCell>
                            ))
                        }
                    </TableHead>
                    <TableBody>
                        {shortlist &&
                            shortlist
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                            <TableItem row={row} isJobShortlist={isJobShortlist} />
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