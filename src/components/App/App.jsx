import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import Container from '@mui/material/Container';

function App() {
    const [galleryList, setGalleryList] = useState([]);
    const [itemDescription, setItemDescription] = useState('');
    const [itemPath, setItemPath] = useState('');

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

    const deleteItem = (id) => {
      console.log('in deleteItem', id)
      axios({
        method: 'DELETE',
        url: `/gallery/${id}`
      }).then(response => {
        console.log(response.data);
        fetchGalleryItems();
      }).catch(error => {
        console.log(error);
        alert('There\'s an error.');
      });
  }

  const addItem = (event) => {
    console.log('in addItem');
    event.preventDefault();
    axios({
      method: 'POST',
      url: '/gallery',
      data: {
        path: itemPath,
        description: itemDescription,
        likes: 0
      }
    }).then(response => {
      setItemDescription('');
      setItemPath('');
      fetchGalleryItems();
    }).catch(error => {
      console.log(error);
      alert('Something went wrong!');
    });
  }

  return (
    <div className="App">
      <Container className="header-gallery-container" style={{ minHeight: '100vh'}} maxWidth="md">
        <header className="App-header">
          <h1 className="App-title">Pepper Perusal</h1>
        </header>
        <GalleryList 
          galleryList = {galleryList} 
          updateLikeCount = {updateLikeCount}
          deleteItem = {deleteItem} 
          addItem = {addItem} 
          itemPath = {itemPath}
          setItemPath = {setItemPath}
          itemDescription = {itemDescription}
          setItemDescription = {setItemDescription}
        />
      </Container>
    </div>
  );
}

export default App;


