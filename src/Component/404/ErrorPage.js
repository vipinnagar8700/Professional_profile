import React from 'react'
import '../../App.css'
import { Box, Container, Stack } from '@mui/material'

const ErrorPage = () => {
    return (
        <div className="Error-page">
            <Container maxWidth="lg">
                <Box p={27} >
                    <Stack py={5} sx={{ fontSize: 60, color: 'red', fontWeight: 'bold', fontFamily: 'revert' }}>
                        <Box p={2} sx={{ border: '8px solid green', borderRadius: 9 }}> 404 PAGE NOT FOUND</Box>


                    </Stack>
                </Box>
            </Container>

        </div>
    )
}

export default ErrorPage