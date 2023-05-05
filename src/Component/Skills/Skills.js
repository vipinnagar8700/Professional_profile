import { Box, Typography, Stack, Button, Grid } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Rating from '@mui/material/Rating';


const Skills = () => {
    return (
        < >
            <Container className='Skills' >
                <Box  className='containered'>
                    <Stack py={8} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'serif' }}>My SKills</Typography>
                        <Typography sx={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'serif', color: '#fff' }}>Do your work with pride ,put safety in every stride.</Typography>
                    </Stack>
                    <Grid container  >
                        <Grid items lg={6} md={12} >
                            
                            <Button variant='contained' color='error' size='large'>My Skills</Button>
                            <Stack pt={6} direction='row'>
                                <Grid container>
                                    <Grid items xs={4}>
                                        <Box>
                                            <img src="./Assets/html-5.png" width={100} height={100}/>
                                            <img src="./Assets/css-3.png" width={100} height={100}/>
                                            <img src="./Assets/bootstrap.png" width={100} height={100}/>
                                            <img src="./Assets/react.png" width={100} height={100}/>
                                            <img src="./Assets/html-5.png" width={100} height={100}/>
                                            <img src="./Assets/html-5.png" width={100} height={100}/>
                                        </Box>
                                    </Grid>
                                    <Grid items>
                                        <Box>
                                        <img src="./Assets/nodejs.png" width={100} height={100}/>
                                        <img src="./Assets/html-5.png" width={100} height={100}/>
                                        <img src="./Assets/AdobeStock_526810058_Preview_Editorial_Use_Only.png" width={100} height={100}/>
                                        <img src="./Assets/html-5.png" width={100} height={100}/>
                                        <img src="./Assets/figma.png" width={100} height={100}/>
                                        <img src="./Assets/html-5.png" width={100} height={100}/>
                                        </Box>

                                    </Grid>
                                </Grid>
                            </Stack>

                        </Grid>
                        <Grid items lg={6} md={12}>
                            <Button variant='contained' color='error' size='large'>Fun Facts</Button>
                            <Stack pt={6} direction='row'>
                                <Grid container gap={2}>
                                    <Grid items xl={5} lg={5} md={12} >
                                        <Typography sx={{ border: '2px solid #fff', padding: 2, fontSize: 20, color: '#fff' }}><WorkspacePremiumIcon sx={{ color: '#fff' }} />Projects Done</Typography>

                                    </Grid>
                                    
                                    <Grid items xl={6} lg={6} md={12} >
                                        <Typography sx={{ border: '2px solid #fff', padding: 2, fontSize: 20, color: '#fff' }}><Rating name="half-rating" defaultValue={2.5} precision={0.5} sx={{ bg: '#fff' }} />User Rating</Typography>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Skills