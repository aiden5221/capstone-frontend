import { SearchOffRounded } from '@mui/icons-material'
import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

function NotFound() {
  return (
    <Grid2 sx={{ textAlign:'center' }}>
        <Typography variant='h4' marginTop={10} marginBottom={5} >404 Page not found...</Typography>
        <SearchOffRounded fontSize='large'/>
    </Grid2>
  )
}

export default NotFound