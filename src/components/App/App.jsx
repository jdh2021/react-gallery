import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

import Container from '@mui/material/Container';

function App() {
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
        console.log(response.data);
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
      }).then(response => {
        console.log(response.data);
        fetchGalleryItems();
      }).catch(error => {
        console.log(error);
        alert('There\'s an error.');
      })
    }

    return (
      <div className="App">
        <Container className="header-gallery-container" style={{ minHeight: '100vh'}} maxWidth="md">
          <header className="App-header">
            <h1 className="App-title">Pepper Perusal</h1>
          </header>
          <GalleryList 
            galleryList={galleryList} 
            updateLikeCount={updateLikeCount}/>
        </Container>
      </div>
    );
}

export default App;


