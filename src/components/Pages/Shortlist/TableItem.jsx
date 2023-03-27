import React from 'react'
import { KeyboardArrowDown, KeyboardArrowUp, SearchRounded } from "@mui/icons-material"
import { Box, Collapse, IconButton, TableBody, TableCell, Table, TableHead, TableRow } from "@mui/material"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function TableItem({ row, isJobShortlist }) {
    const [open, setOpen] = useState(false)
    const { name, score, correspondingSkills, location, email, aptitudeResults } = row;
    const navigate = useNavigate()

    const handleJobRedirect = () => {
      window.open(`${window.location.origin}/jobPosting/${row.jobId}`, '_blank')
    }

    return (
        <>
            <TableRow sx={{backgroundColor:'#ECEEF2'}} >
                <TableCell>
                    {
                        !isJobShortlist ?
                        <IconButton
                            size='small'
                            onClick={() => setOpen(!open)}>
                                { open ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
                        </IconButton>
                        :
                        <IconButton 
                            size='small'
                            onClick={handleJobRedirect}>
                                <SearchRounded/>
                        </IconButton>
                    }

                </TableCell>
                {
                    Object.keys(row).map((key) => {
                        if(key != 'correspondingSkills' && key != 'skills' && key != 'jobId'){
                            return (
                            <TableCell component='th' scope='row'>
                                {row[key]} {key == 'score' || key == 'aptitudeResults' ? '%' : ''}
                            </TableCell>)
                        }
                    })
                }
            </TableRow>
            {
                !isJobShortlist &&
                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0, backgroundColor:'#E1E4EA' }} colSpan={6}>
                            <Collapse in={open} timeout='auto' unmountOnExit>
                                <Box sx={{margin:1}}>
                                    <Table>
                                        <TableHead sx={{fontWeight:'700'}}>
                                            Skills
                                        </TableHead>
                                        <TableBody>
                                            {
                                                correspondingSkills.map((skill) => <TableRow><TableCell sx={{paddingBottom:0}}>{skill}</TableCell></TableRow>)
                                            }
                                        </TableBody>
                                    </Table>
                                
                                </Box>
                            </Collapse>
                        </TableCell>
                    </TableRow>
            }
            
        </>
    )
}

export default TableItem