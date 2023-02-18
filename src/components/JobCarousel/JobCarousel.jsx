import React, { useEffect, useState } from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import Carousel from 'react-multi-carousel';
import { carouselResponsiveValues } from '../constants';
import "react-multi-carousel/lib/styles.css";
import JobItem from './JobItem';
import { getJobApplications } from '../../utils/backend/requests';

function JobCarousel() {
    const [jobApps, setJobApps] = useState([])

    useEffect(() => {
        const getJobApps = async () => {
            return await getJobApplications();
        }
        if(jobApps){
            const request = getJobApps()
                            .then((res) => setJobApps(res))
                            .catch(console.error());
        }
    }, [])

  return (
    <Grid2
    item
    sx={{ width:'100%' }}
    xlOffset={1}
    lgOffset={1}
    mdOffset={1}
    smOffset={1}
    lg={10}
    md={10}
    sm={10}
    >
        <Carousel
            responsive={carouselResponsiveValues}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={1500}
            arrows={false}
            >
            {
                jobApps.map(({jobName, date}) => {
                    console.log(jobApps)
                    return(
                    <JobItem jobName={jobName} jobDate={date}/>)
                })
            }
        </Carousel>
    </Grid2>
  )
}

export default JobCarousel