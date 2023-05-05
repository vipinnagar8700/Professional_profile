import React from 'react'
import { Link } from 'react-router-dom';
import { Avatar, Box, Typography } from '@mui/material'
import '../../App.css';
import { Stack, Grid } from '@mui/material'
import { Container } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Services = () => {
  return (
    <Container className='Services'>
      <Box >
        <Stack py={8} sx={{ justifyContent: 'center', alignItems: 'center',textAlign:'center' }}>
          <Typography sx={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'serif' }}>My Services</Typography>
          <Typography sx={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'serif', color: '#fff' }}>We develop Dynamic websites that help you connect with your customers.</Typography>
        </Stack>
        <Stack className='containered' >
          <Grid  container gap={4} style={{ justifyContent: 'center' }}>
            <Grid items lg={3.8} md={6} sm={12} xs={12}>
              <Card >
                <CardContent>
                  <Stack p={4} sx={{ justifyContent: 'center', alignItems: 'center',textAlign:'center' }}>
                    <Avatar /><Typography pt={2} sx={{fontSize:28,fontWeight:'bold',fontFamily:'serif'}}>Web Design</Typography><Typography pt={2} sx={{fontSize:20,fontWeight:'bold',fontFamily:'serif'}}>Up-to-date experience with web protocols and technologies</Typography></Stack></CardContent>
              </Card>
            </Grid>
            <Grid items lg={3.8} md={6} sm={12} xs={12}>
              <Card >
                <CardContent>
                  <Stack p={4} sx={{ justifyContent: 'center', alignItems: 'center',textAlign:'center' }}><Avatar /><Typography sx={{fontSize:28,fontWeight:'bold',fontFamily:'serif'}} pt={2}>Web Development</Typography><Typography pt={2} sx={{fontSize:20,fontWeight:'bold',fontFamily:'serif'}}>We will help you develop the best solution to your problem</Typography></Stack></CardContent>
              </Card>

            </Grid>
            <Grid items lg={3.8} md={6} sm={12} xs={12}>

              <Card >
                <CardContent>
                  <Stack p={4} sx={{ justifyContent: 'center', alignItems: 'center',textAlign:'center' }}><Avatar /><Typography sx={{fontSize:28,fontWeight:'bold',fontFamily:'serif'}} pt={2}>Wordpress Websites</Typography><Typography pt={2} sx={{fontSize:20,fontWeight:'bold',fontFamily:'serif'}}>Designing and Development new features and functions</Typography></Stack></CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid pt={4} container gap={4} style={{ justifyContent: 'center' }}>
            <Grid items lg={3.8} md={6} sm={12} xs={12}>
              <Card >
                <CardContent>
                  <Stack p={4} sx={{ justifyContent: 'center', alignItems: 'center',textAlign:'center' }}>
                    <Avatar /><Typography pt={2} sx={{fontSize:28,fontWeight:'bold',fontFamily:'serif'}}>SEO Analyst</Typography><Typography pt={2} sx={{fontSize:20,fontWeight:'bold',fontFamily:'serif'}}>Our SEO experts with more than 1 Years of experience</Typography></Stack></CardContent>
              </Card>
            </Grid>
            <Grid items lg={3.8} md={6} sm={12} xs={12}>
              <Card >
                <CardContent>
                  <Stack p={4} sx={{ justifyContent: 'center', alignItems: 'center',textAlign:'center' }}><Avatar /><Typography sx={{fontSize:28,fontWeight:'bold',fontFamily:'serif'}} pt={2}>Creative Design</Typography><Typography pt={2} sx={{fontSize:20,fontWeight:'bold',fontFamily:'serif'}}>Graphic design ,We simplify your message & reach your customer</Typography></Stack></CardContent>
              </Card>

            </Grid>
            <Grid items lg={3.8} md={6} sm={12} xs={12}>

              <Card >
                <CardContent>
                  <Stack p={4} sx={{ justifyContent: 'center', alignItems: 'center',textAlign:'center' }}><Avatar /><Typography sx={{fontSize:28,fontWeight:'bold',fontFamily:'serif'}} pt={2}>24 X 7 Support</Typography><Typography pt={2} sx={{fontSize:20,fontWeight:'bold',fontFamily:'serif'}}>We can make Youe website in a short period of time.</Typography></Stack></CardContent>
              </Card>
            </Grid>
          </Grid>
        </Stack>


      </Box>
    </Container>
  )
}

export default Services