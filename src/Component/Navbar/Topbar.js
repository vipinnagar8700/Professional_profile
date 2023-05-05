import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Box, Typography } from '@mui/material'
import '../../App.css';
import { Stack } from '@mui/material'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Topbar = () => {
    return (
        <Navbar className='nav'>
            <Container className='containered'>
                <Stack direction="row" sx={{ justifyContent: 'space-between', color: 'white',alignItems:'center' }}>

                    <Box>
                        <Link style={{ color: '#fff', fontSize: 32, fontWeight: 'bold', fontFamily: 'cursive', textDecoration: 'none' }} to="/Profile"><span style={{color:'#FF0000'}}>Vipin </span>Nagar</Link>
                    </Box>
                    <Box>
                        <Stack direction='row' gap={4}>
                            <Link style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontFamily: 'cursive', textDecoration: 'none' }} to="/">Home</Link>
                            <Link style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontFamily: 'cursive', textDecoration: 'none' }} to="/About">About</Link>
                            <Link style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontFamily: 'cursive', textDecoration: 'none' }} to="/Services">Services</Link>
                            <Link style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontFamily: 'cursive', textDecoration: 'none' }} to="/Skills">Skills</Link>
                            <Link style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontFamily: 'cursive', textDecoration: 'none' }} to="/Project">Projects</Link>
                            <Link style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontFamily: 'cursive', textDecoration: 'none' }} to="/Contact">Contact Us</Link>
                        </Stack>
                    </Box>

                </Stack>
            </Container>

        </Navbar>
    )
}

export default Topbar