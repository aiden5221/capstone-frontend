import React from 'react'
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"
import { Box, Collapse, IconButton, TableCell, TableRow, Typography } from "@mui/material"
import { useState } from "react"

function TableItem({ row }) {
    const [open, setOpen] = useState(false)
    const { name, score } = row;

    return (
        <>
            <TableRow sx={{backgroundColor:'#ECEEF2'}} >
                <TableCell>
                    <IconButton
                        size='small'
                        onClick={() => setOpen(!open)}>
                            { open ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
                    </IconButton>
                </TableCell>
                <TableCell component='th' scope='row'>
                    {name}
                </TableCell>
                <TableCell component='th' scope='row'>
                    {score}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, backgroundColor:'#E1E4EA' }} colSpan={6}>
                    <Collapse in={open} timeout='auto' unmountOnExit>
                        <Box sx={{margin:1}}>
                            <Typography variant='h6' gutterBottom component='div'>
                                Skills
                            </Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}

export default TableItem