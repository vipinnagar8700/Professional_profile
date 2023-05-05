import React from 'react'
import { Box, Typography, Stack, Grid, TextField,Button } from '@mui/material'
import { Container } from 'react-bootstrap';

const Contact = () => {
  return (
    < >
      <Container className='contact' >
        <Box className='containered'>
          <Stack py={8} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'serif' }}>Get in Touch </Typography>
            <Typography sx={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'serif', color: '#fff' }}>Feel free to drop me a line - </Typography>
          </Stack>
          <Stack className='containered'>
            <form  >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField sx={{ bgcolor: '#fff' }}
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    autoFocus
                    placeholder='Your Name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField sx={{ bgcolor: '#fff' }}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    placeholder='Email Address'
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField sx={{ bgcolor: '#fff' }}
                    variant="outlined"
                    required
                    fullWidth
                    id="Subject"
                    name="Subject"
                    autoComplete="Subject"
                    placeholder='Subject'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField sx={{ bgcolor: '#fff' }}
                    variant="outlined"
                    required
                    fullWidth
                    name="Help"
                    type="Help"
                    id="Help"
                    autoComplete="Help"
                    placeholder='How can i help you?'
                  />
                </Grid>
                <Grid container pt={3} sx={{justifyContent:'center'}}>
                  <Button variant='outlined' sx={{ justifyContent: 'center',fontSize:22,border:'2px solid red',color:'red',borderRadius:0, fontWeight: 'bold', fontFamily: 'serif' }}>
                  Contact Now
                  </Button>
                </Grid>

              </Grid>


            </form>
          </Stack>

        </Box>
      </Container>
    </>
  )
}

export default Contact