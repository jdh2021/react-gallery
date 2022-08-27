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
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPepperHot } from '@fortawesome/free-solid-svg-icons'

function App() {
    const [galleryItem, setGalleryItem] = useState('');
    const [galleryList, setGalleryList] = useState([]);

    useEffect(() => {
      fetchGalleryItems();
    }, []);

    const fetchGalleryItems = () => {
      console.log('in fetchGalleryItems');
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

    const updateLikeCount = (id) => {
      console.log('in updateLikeCount', id);
      axios({
        method: 'PUT',
        url: `/gallery/like/${id}`
      }).then(respnse => {
        fetchGalleryItems();
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
          {/*Gallery starts here*/}
          <Grid container 
            spacing = {2}
            justifyContent="center"
            direction="row"
            alignItems="center">
            { galleryList.map((item) => {
              return  <Grid item key={item.id}>
                      <Card sx={{maxWidth: 150}} elevation={3}>
                        {/*Item starts here*/}
                        <CardMedia
                          component="img"
                          image={item.path}
                        />
                        {/*Item ends here*/}
                        <CardActions disableSpacing color="error">
                          <IconButton 
                            aria-label="add to favorites" 
                            color="error"
                            onClick={(event) => updateLikeCount(item.id)}>
                            <FontAwesomeIcon 
                              icon={faPepperHot}/>
                          </IconButton>
                          <span className="like-count">{item.likes}</span>
                        </CardActions>
                      </Card>
                    </Grid>
              })
            }
          </Grid>
           {/*Gallery ends here*/}
        </Container>
      </div>
    );
}

export default App;
