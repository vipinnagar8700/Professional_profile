import React from 'react'
import { Box, Typography, Stack, Avatar } from '@mui/material'
import { Container } from 'react-bootstrap';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { blue } from '@mui/material/colors';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        < >
            <Container className='footer' >
                <Box className='containered'>
                    <Stack py={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'serif' }}>Vipin Nagar</Typography>
                    </Stack>
                    <Stack sx={{ justifyContent: 'center', textAlign: 'center' }}>
                        <Typography sx={{ justifyContent: 'center', fontSize: 16, fontWeight: '300', color: '#fff', fontFamily: 'Verala' }}>I am a Skilled Mern Stack Web Developer with exppertise in building Dynamic web applications.My Proficiency in MongoDB,Express js,React js,Nodejs  allow me to develop efficient and scalable applications.I have experience in creating robust API's designing responsive user interfaces,and integrating various third-party services .With passion for delivering high-quality code,I am always looking to learn and improve my skills in the rapidly-evolving tech industry".</Typography>
                    </Stack>
                    <Stack pt={4} gap={2} sx={{ justifyContent: 'center' }} direction='row'>
                        <Link to='https://codepen.io/Alioos_90/pen/VPbzpy' target='_blank'>
                            <img height={50} width={50} src="./Assets/facebook.png" /></Link>
                        <Link to='https://codepen.io/Alioos_90/pen/VPbzpy' target='_blank'>
                            <img height={50} width={50} src="./Assets/Github.png"  /></Link>
                        <Link to='https://codepen.io/Alioos_90/pen/VPbzpy' target='_blank'>
                            <img height={50} width={50} src="./Assets/instagram.png" /></Link>
                        <Link to='https://codepen.io/Alioos_90/pen/VPbzpy' target='_blank'>
                            <img height={50} width={50} src="./Assets/linkedin.png" /></Link>
                        <Link to='https://codepen.io/Alioos_90/pen/VPbzpy' target='_blank'>
                            <img height={50} width={50} src="./Assets/twitter.png" /></Link>


                    </Stack>



                </Box>
                <Box mt={4} sx={{ backgroundColor: '#0A1310' }}>
                    <Stack p={2}>
                        <Typography sx={{ textAlign: 'center' }}>
                            ©CopyRight by<Link to='' style={{ color: '#fff', textDecoration: 'none' }}>VipinnagarTech 2023</Link>

                        </Typography>
                    </Stack>
                </Box>
            </Container>
        </>
    )
}

export default Footer