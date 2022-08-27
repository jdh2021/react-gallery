import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import FavoriteIcon from '@mui/icons-material/Favorite';

function App() {
    const [galleryItem, setGalleryItem] = useState('');
    const [galleryList, setGalleryList] = useState([]);

    useEffect(() => {
      fetchGalleryItems();
    }, []);

    const fetchGalleryItems = () => {
      axios({
        method:'GET',
        url: '/gallery'
      }).then(response => {
        setGalleryList(response.data);
      }).catch(error => {
        console.log(error);
        alert('There\'s an error.');
      })
    }

    return (
      <div className="App">
        <Container 
          className="header-gallery-container"
          style={{ minHeight: '100vh'}}
          maxWidth="md">
          <header className="App-header">
            <h1 className="App-title">Gallery of My Life</h1>
          </header>
          {/*Gallery goes here*/}
          <Grid container 
            spacing = {2}
            justifyContent="center"
            direction="row"
            alignItems="center">
            { galleryList.map((item) => {
              return  <Grid item key={item.id}>
                      <Card sx={{maxWidth: 150}} elevation={3}>
                        <CardMedia
                          component="img"
                          image={item.path}
                        />
                      </Card>
                    </Grid>
              })
            }
          </Grid>
        </Container>
      </div>
    );
}

export default App;
