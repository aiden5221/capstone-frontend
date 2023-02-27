import React from 'react'
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';

const UploadSection = makeStyles({
    root: {
        color: 'black'
    },
});
export default function InputForm(props) {
    const classes = UploadSection();

    return (
        <Box component={"div"} className={classes.root}>
            <br></br>
            <Stack spacing={props.SpacingVal} direction="row" sx={{ alignItems: 'center' }}>
                <label ><b>{props.LabelText}</b></label>
                <Input sx={{ backgroundColor: '#D9D9D9' }} variant="outlined" disableUnderline />
            </Stack>
        </Box>
    )
}
