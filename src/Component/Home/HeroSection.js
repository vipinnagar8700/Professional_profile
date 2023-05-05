import {  Stack, Box, Typography, Grid, Button } from '@mui/material'
import React from 'react'
import Typewriter from 'typewriter-effect';

const HeroSection = () => {

    
    return (
        <>
            <Box className='Hero-section ' >
                <Stack className='containered'>
                    <Grid className='' my={24} container sx={{ justifyContent: 'center' }}>
                        <Grid items xs={11}>

                            <Typography  sx={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'serif', color: 'red' }}>
                                Hii There! I'm Vipin Nagar
                            </Typography>

                            <Stack className='type-writter-effect'>

                                <Typewriter
                                    options={{
                                        strings: [' A Mern Stack Web Developer', 'Create Awesome website'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Stack>
                            <Typography sx={{ fontSize: 60, fontWeight: 'bold', fontFamily: 'serif' }}></Typography>
                            <Typography sx={{ fontSize: 60, fontWeight: 'bold', fontFamily: 'serif' }}> </Typography>
                            <Typography sx={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'serif',color:'#fff' }}>Your band takes control of its visual representation with custom web design</Typography>
                            <Stack mt={3} direction='row' gap={4}>
                                <Button variant='contained' onClick="window.open('12.png')" value='downlaod' sx={{ bgcolor: 'red', fontWeight: 'bold', fontFamily: 'serif', }} size='large'>
                                    Download CV
                                </Button>
                                <Button variant='contained' href="12.png" sx={{ bgcolor: 'red', fontWeight: 'bold', fontFamily: 'serif' }} size='large'>
                                    Preview
                                </Button>
                            </Stack>

                            
                        </Grid>
                        
                    </Grid>
                </Stack>
            </Box>

        </>
    )
}

export default HeroSection