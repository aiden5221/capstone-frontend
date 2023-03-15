import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import TableItem from "./TableItem"
function ShortlistTable({ shortlist }) {


    return (
        <TableContainer>
            <Table>
                <TableHead sx={{backgroundColor:'#CDD0D6'}}>
                    <TableCell/>
                    <TableCell sx={{fontWeight:'700'}}>Name</TableCell>
                    <TableCell sx={{fontWeight:'700'}}>Score</TableCell>
                </TableHead>
                <TableBody>
                    {shortlist &&
                        shortlist.map((row) => (
                        <TableItem row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ShortlistTable;