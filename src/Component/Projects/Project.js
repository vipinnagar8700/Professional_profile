import React from 'react'
import { Box, Typography, Stack, Button, Grid,} from '@mui/material'
import { Container } from 'react-bootstrap';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';




const Project = () => {

    return (
        < >
            <Container className='projects' >
                <Box className='containered'>
                    <Stack py={8} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'serif'  }}>Projects</Typography>
                        <Typography sx={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'serif', color: '#fff' }}>See My Work - </Typography>
                    </Stack>
                    <Stack direction='row' spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant='contained' color='error' size='large'>All</Button>
                        <Button variant='contained' color='error' size='large'>Designing</Button>
                        <Button variant='contained' color='error' size='large'>Graphic</Button>
                        <Button variant='contained' color='error' size='large'>Websites</Button>
                        <Button variant='contained' color='error' size='large'>Blogs</Button>

                    </Stack>
                    <Stack direction='row' py={8} >
                        <Grid container gap={4} sx={{ justifyContent: 'center' }}>
                            <Grid items lg={3.8} md={3.8}>
                                <ImageList sx={{ width: 400, height: 450 }} cols={3} rowHeight={164} >
                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img
                                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Grid>
                            <Grid items lg={3.8} md={3.8}>
                                <ImageList sx={{ width: 400, height: 450 }} cols={3} rowHeight={164}>
                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img
                                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Grid>
                            <Grid items lg={3.8} md={3.8}>
                                <ImageList sx={{ width: 400, height: 450 }} cols={3} rowHeight={164}>
                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img
                                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Grid>
                        </Grid>



                    </Stack>
                    

                    <Stack direction='row'  >
                        <Grid container gap={4} sx={{ justifyContent: 'center' }}>
                            <Grid items lg={3.8} md={3.8}>
                                <ImageList sx={{ width: 400, height: 450  }} cols={3} rowHeight={164}>
                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img
                                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Grid>
                            <Grid items lg={3.8} md={3.8}>
                                <ImageList sx={{ width: 400, height: 450 }} cols={3} rowHeight={164}>
                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img
                                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Grid>
                            <Grid items lg={3.8} md={3.8}>
                                <ImageList sx={{ width: 400, height: 450 }} cols={3} rowHeight={164}>
                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img
                                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Grid>
                        </Grid>



                    </Stack>

                </Box>
            </Container>
        </>
    )
}

export default Project


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },

    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];