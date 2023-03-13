import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"
import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import TableItem from "./TableItem"
function ShortlistTable() {
    const [open, setOpen] = useState(false)
    const [shortlist, setShortlist] = useState([])

    const mockdata = [
        {name:"Aiden Jolley-Ruhn", score:10},
        {name:"Tyler", score:12},
        {name:"John", score:25},
        {name:"Craig", score:35},
        {name:"Chris", score:15},
        {name:"Zack", score:85},
    ]

    useEffect(() => {
        setShortlist(mockdata);
    }, [])


    return (
        <TableContainer>
            <Table>
                <TableHead sx={{backgroundColor:'#CDD0D6'}}>
                    <TableCell/>
                    <TableCell>Name</TableCell>
                    <TableCell>Score</TableCell>
                </TableHead>
                <TableBody>
                    {shortlist.map((row) => (
                        <TableItem row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ShortlistTable;