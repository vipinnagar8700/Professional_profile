import React from 'react'
import { Box, Typography } from '@mui/material'
import '../../App.css';
import { Stack, Grid } from '@mui/material'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Container className='About'>
        <Box >
          <Stack py={8} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'serif' }}>About Me</Typography>
            <Typography sx={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'serif', color: '#fff' }}>Professionally Profile - There Is All About Me</Typography>
          </Stack>
          <Stack className='containered'>
            <Grid container style={{ justifyContent: 'center' }}>
              <Grid items lg={4} md={6} sm={12} xs={12}>
                <img variant='rounded' src={'./12.png'} height={500} width={380} />
              </Grid>
              <Grid items lg={8} md={6} sm={12} xs={12}>
                <Typography sx={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'serif', color: '#fff' }}>I'm Vipin Nagar</Typography>
                <Typography pt={3} sx={{ fontSize: 18, fontWeight: '300', fontFamily: 'serif', color: '#fff', letterSpacing: "1px" }}>
                  Mern Stack Wen Developer with 1 year of Experience in coding websites.Proficient with HTML,CSS,BOOTSTRAP,REACT JS ,MUI,NODE JS,JS,API's,Figma,Wordpress,Database - like - MongoDB ,MySQL.Most notably,improved the average time on page by 90% and improved user experience score for all projects.Create website layout /user interface by using standard HTML,CSS,BOOTSTRAP,REACT JS,MUI etc practices.
                </Typography>
                <Box>
                  <Stack>
                    <Grid container>
                      <Grid items xs={6}>
                        <Box pt={3}  >
                          <Stack direction='row' gap={1} sx={{ alignItems: 'center' }}>
                            <img width={30} height={30} src="./Assets/skype.png" /><Typography sx={{ fontSize: 18, fontFamily: 'serif', fontWeight: '300' }}>Date of Birth :14 Sep 2002</Typography>

                          </Stack>
                          <Stack direction='row' gap={1} sx={{ alignItems: 'center' }}>
                            <img width={30} height={30} src="./Assets/phone.gif" /><Typography sx={{ fontSize: 18, fontFamily: 'serif', fontWeight: '300' }}><Link to='tel:8700504218' style={{ color: '#f22', textDecoration: 'none' }}>Nationality : Indian</Link></Typography>

                          </Stack>
                          <Stack direction='row' gap={1} sx={{ alignItems: 'center' }}>
                            <img width={30} height={30} src="./Assets/gmail.png" /><Typography sx={{ fontSize: 18, fontFamily: 'serif', fontWeight: '300' }}><Link to='mailto:vipinnagar8700@gmail.com' style={{ color: '#f22', textDecoration: 'none' }}>Address : Noida ,Uttarpradesh ,India</Link> </Typography>

                          </Stack>
                          <Stack direction='row' gap={1} sx={{ alignItems: 'center' }}>
                            <img width={30} height={30} src="./Assets/skype.png" /><Typography sx={{ fontSize: 18, fontFamily: 'serif', fontWeight: '300' }}> Spoken Languages : Hindi,English</Typography>

                          </Stack>


                        </Box>


                    </Grid>
                    <Grid items xs={6}>
                      <Box pt={3} sx={{ alignItems: 'center' }} >
                        <Stack direction='row' gap={1} sx={{ alignItems: 'center' }}>
                          <img width={30} height={30} src="./Assets/skype.png" /><Typography sx={{ fontSize: 18, fontFamily: 'serif', fontWeight: '300' }}>Available</Typography>

                        </Stack>
                        <Stack direction='row' gap={1} sx={{ alignItems: 'center' }}>
                          <img width={30} height={30} src="./Assets/phone.gif" /><Typography sx={{ fontSize: 18, fontFamily: 'serif', fontWeight: '300' }}><Link to='tel:8700504218' style={{ color: '#f22', textDecoration: 'none' }}>+918700504218</Link></Typography>

                        </Stack>
                        <Stack direction='row' gap={1} sx={{ alignItems: 'center' }}>
                          <img width={30} height={30} src="./Assets/gmail.png" /><Typography sx={{ fontSize: 18, fontFamily: 'serif', fontWeight: '300' }}><Link to='mailto:vipinnagar8700@gmail.com' style={{ color: '#f22', textDecoration: 'none' }}>vipinnagar8700@gmail.com</Link> </Typography>

                        </Stack>
                        <Stack direction='row' gap={1} sx={{ alignItems: 'center' }}>
                          <img width={30} height={30} src="./Assets/skype.png" /><Typography sx={{ fontSize: 18, fontFamily: 'serif', fontWeight: '300' }}> Vipin Nagar</Typography>

                        </Stack>


                      </Box>
                    </Grid>
                  </Grid>
                </Stack>


              </Box>

            </Grid>
          </Grid>
        </Stack>

      </Box>
    </Container >
    </>
  )
}

export default About